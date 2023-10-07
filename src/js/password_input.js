// @ts-check
import { html } from "./tagged_template";

const pass_input = "password-input";
const pass_button = "password-button";

export default class PasswordInput {
    /**
     * @type {HTMLElement}
     */
    text_box;
    /**
     * @type {HTMLButtonElement}
     */
    enter_button;

    /**
     * @param {string} id
     * @param {HTMLElement} div 
     */
    constructor(id, div) {
        div.innerHTML = this.render(id);
    }
    render(id) {
        return html`
            <div class="password-input">
                <input type="password" id="password-input" placeholder="Password" />
                <button id="password-button">Enter</button>
            </div>
        `;
    }
}