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

        const loadingFailed = `createCaptcha load failed`;

        try {

            // track captcha frame
            let captchaFrame: HTMLFormElement | undefined;

            const
                // shared window
                libsWindow = window as LibsWindow,

                // captcha script url
                hCaptchaApiUrl = `https://js.hcaptcha.com/1/api.js`,

                // resolve parent element
                parentElement = parentValid(parentTag),

                // read captcha token
                getCaptchaToken = () =>
                    (captchaFrame?.elements.namedItem(`h-captcha-response`) as HTMLTextAreaElement)?.value
                    || ``,

                // reset captcha or load script
                resetCaptcha = () => {
                    libsWindow.hcaptcha
                        ? libsWindow.hcaptcha.reset()
                        : loadCaptcha();
                },

                // create frame then load script
                loadCaptcha = async () => {
                    try {

                        // create captcha frame
                        if (parentElement && !captchaFrame) {
                            captchaFrame = document.createElement(`form`);
                            captchaFrame.name = `cap`;
                            captchaFrame.classList.add(`captcha_frame`);
                            const captcha = document.createElement(`div`);
                            captcha.classList.add(`h-captcha`);
                            captcha.dataset.sitekey = sitekey;
                            captchaFrame.appendChild(captcha);
                            parentElement.appendChild(captchaFrame);
                        };

                        // load captcha script
                        return await loadScript({ src: hCaptchaApiUrl, hideConsoleErrors });

                        // report load failure
                    } catch (e) {
                        if (!hideConsoleErrors) console.log(loadingFailed, e);
                        return false;
                    };
                };

            // return captcha controls
            if (parentElement)
                return {
                    loadCaptcha,
                    captchaFrame,
                    getCaptchaToken,
                    resetCaptcha,
                };

            // report creation failure
        } catch (e) {
            if (!hideConsoleErrors) console.log(`createCaptcha failed`, e);
        };

        // fallback controls
        return {
            loadCaptcha: async () => {
                if (!hideConsoleErrors) console.log(loadingFailed);
                return false;
            },
            getCaptchaToken: () => ``,
            resetCaptcha: () => {
                if (!hideConsoleErrors) console.log(loadingFailed);
            },
        };
    };

export {
    createCaptcha,
};