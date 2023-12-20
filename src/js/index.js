import "../css/style.css";
// import { EC2Client } from "@aws-sdk/client-ec2";

const STATUS = {
    incorrectPassword: "Incorrect Password",
    wait: "Wait",
    starting: "Starting",
    stopping: "Stopping",
    unknown: "Unknown",
    alreadyStarted: "Already Started",
    alreadyStopped: "Already Stopped",
    errorStarting: "Error Starting",
    errorStopping: "Error Stopping",
}

let status_value = STATUS.unknown;

function disable_buttons() {
    const startBtn = document.getElementById("start-btn");
    const stopBtn = document.getElementById("stop-btn");
    startBtn.setAttribute("disabled", "disabled");
    stopBtn.setAttribute("disabled", "disabled");
}
function enable_buttons() {
    const startBtn = document.getElementById("start-btn");
    const stopBtn = document.getElementById("stop-btn");
    startBtn.removeAttribute("disabled");
    stopBtn.removeAttribute("disabled");
}

let debounceMs = 5000;
let lastCalledId = undefined;
let lastCalled = 0;
function debounce(callback) {
    const now = Date.now();
    if (now - lastCalled >= debounceMs) {
        disable_buttons();
        lastCalled = now;
        callback();
        if (lastCalledId === undefined) {
            lastCalledId = setTimeout(() => {
                lastCalledId = undefined;
                enable_buttons();
            }, debounceMs)
        }
        debounceMs += 3000;
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function is_status(s) {
    return status_value === s;
}
function set_status(s) {
    status_value = s;
}

function get_credentials() {
    localStorage.getItem("password");
    const elem = document.getElementById("password");
    const pwd = elem.value;
    const encrypted = "U2FsdGVkX18AOt+VQEHRyIySO+GDLJKatH/aAHIxmHoxIC1Xepx5vK78Hf3UN8f11snX7TkCdBJEKSWr0bkgaroUFL0sO+x8+YaZIMgcBH8uCWbXuU92l2E3FNpSVV/1hdfacofM/3IOE57HyXfvoQ==";
    try {
        const decrypted = CryptoJS.AES.decrypt(encrypted, pwd).toString(CryptoJS.enc.Utf8);
        return JSON.parse(decrypted);
    } catch {
        return undefined;
    }
}

globalThis.ec2Instance = undefined;
function get_ec2_instance() {
    if (globalThis.ec2Instance === undefined) {
        const creds = get_credentials();
        if (creds === undefined) {
            return undefined;
        }
        globalThis.AWS.config.update({ region: "us-west-1" });
        globalThis.AWS.config.update({
            accessKeyId: creds.key,
            secretAccessKey: creds.secret,
        });
        globalThis.ec2Instance = new globalThis.AWS.EC2();
    }
    return globalThis.ec2Instance;
}

const FOUNDRY_INST = "i-0f74a54dd5e573e4e";

function start_ec2_instance() {
    if (is_status(STATUS.errorStarting) || is_status(STATUS.starting) || is_status(STATUS.wait)) return;

    const ec2 = get_ec2_instance();
    if (ec2 === undefined) {
        set_status(STATUS.incorrectPassword);
        return;
    }

    const params = {
        InstanceIds: [
            FOUNDRY_INST,
        ]
    };

    set_status(STATUS.wait);
    disable_buttons();
    ec2.startInstances(params, (err, data) => {
        if (err) {
            console.log(err, err.stack);
            set_status(STATUS.errorStarting);
        } else {
            set_status(STATUS.starting);
        }
        enable_buttons();
    })

    globalThis.checkFoundryTimeout = 5000;
}

function stop_ec2_instance() {
    if (is_status(STATUS.errorStopping) || is_status(STATUS.stopping) || is_status(STATUS.wait)) return;

    const ec2 = get_ec2_instance();
    if (ec2 === undefined) {
        set_status(STATUS.incorrectPassword);
        return;
    }
    const params = {
        InstanceIds: [
            FOUNDRY_INST,
        ]
    };
    set_status(STATUS.wait);
    disable_buttons();
    ec2.stopInstances(params, (err, data) => {
        if (err) {
            console.log(err, err.stack);
            set_status(STATUS.errorStarting);
        } else {
            set_status(STATUS.stopping);
        }
        enable_buttons();
    })

    globalThis.checkFoundryTimeout = 4000;
}

async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 8000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(resource, {
        ...options,
        signal: controller.signal
    });
    clearTimeout(id);

    return response;
}

globalThis.checkFoundryTimeout = 5000;
async function check_foundry_status() {
    const url = "https://foundry.funnbot.click/api/status";
    const request = new Request(url, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache no-store",
            "Expires": "0",
        }),
    });
    const timeout = globalThis.checkFoundryTimeout;
    globalThis.checkFoundryTimeout = Math.floor(globalThis.checkFoundryTimeout * 1.5);
    let resp = undefined;
    try {
        resp = await fetchWithTimeout(request, { timeout });
    } catch (e) {
        if (e.type === "cors") {
            throw Error("cors");
        } else if (e.type === "basic") {
            return { status: "error" }
        } else {
            console.log({e});
            throw Error(e);
        }
    }
    let body = undefined;
    try {
        body = await resp.json();
    } catch {
        throw Error("Bad Response: " + resp);
    }
    if (body?.active) {
        return { status: "ok", active: true, world: body?.world ?? "none", users: body?.users ?? 0 }
    } else {
        return { status: "ok", active: false }
    }
}

const foundryStatus = document.getElementById("foundry-status");
async function update_foundry_status() {
    const prev = foundryStatus.innerHTML;
    foundryStatus.innerHTML = `<b>Checking Status...</b>`
    await delay(200);
    foundryStatus.innerHTML = prev;
    const { status, ...r } = await check_foundry_status();
    if (status === "error") {
        if (r.type === "cors") {
            throw Error(status + ": " + r);
        }
        foundryStatus.innerHTML = `<b>Status:</b> not running<br>`
    } else if (status === "ok") {
        if (r.active) {
            foundryStatus.innerHTML = `<b>Status:</b> running <a href="https://foundry.funnbot.click">Click To Enter FoundryVTT</a><br><b>World:</b> ${r.world}<br><b>Users:</b> ${r.users}<br>`
        } else {
            foundryStatus.innerHTML = `<b>Status:</b> running`
        }
    } else {
        throw Error(status + r);
    }

    await delay(1000);
    update_foundry_status();
}

set_status(STATUS.unknown);
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", () => {
    debounce(start_ec2_instance);
});

stopBtn.addEventListener("click", () => {
    debounce(stop_ec2_instance);
});

(async () => {
    update_foundry_status();
})();