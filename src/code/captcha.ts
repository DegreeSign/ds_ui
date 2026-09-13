import { loadScript } from './scripts';
import { parentValid } from './select';
import { CreateCaptcha, CreateCaptchaParams, LibsWindow } from '../types';

const
    /** Create captcha form */
    createCaptcha = ({
        parentTag,
        sitekey,
        hideConsoleErrors,
    }: CreateCaptchaParams): CreateCaptcha => {
        try {
            const
                libsWindow = window as LibsWindow,
                hCaptchaApiUrl = `https://js.hcaptcha.com/1/api.js`,
                parentElement = parentValid(parentTag),
                form = document.createElement(`form`),
                captcha = document.createElement(`div`),
                getCaptchaToken = () =>
                    (form.elements.namedItem(`h-captcha-response`) as HTMLTextAreaElement)?.value
                    || ``,
                resetCaptcha = () => {
                    libsWindow.hcaptcha
                        ? libsWindow.hcaptcha.reset()
                        : loadScript({ src: hCaptchaApiUrl, hideConsoleErrors });
                };
            if (parentElement) {
                form.name = `cap`;
                form.classList.add(`captcha_frame`);
                captcha.classList.add(`h-captcha`);
                captcha.dataset.sitekey = sitekey;
                form.appendChild(captcha);
                parentElement.appendChild(form);
                loadScript({ src: hCaptchaApiUrl, hideConsoleErrors });
                return {
                    captchaFrame: form,
                    getCaptchaToken,
                    resetCaptcha,
                }
            };
        } catch (e) {
            console.log(`createCaptcha failed`, e);
        };
        return {
            getCaptchaToken: () => ``,
            resetCaptcha: () => console.log(`createCaptcha load failed`),
        }
    };

export {
    createCaptcha,
};