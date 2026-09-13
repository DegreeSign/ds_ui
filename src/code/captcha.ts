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

                // reset captcha or create frame then load script
                reloadCaptcha = async () => {
                    try {

                        // reset captcha when script already loaded
                        if (libsWindow.hcaptcha) {
                            libsWindow.hcaptcha.reset();
                            return captchaFrame;
                        };

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
                        return await loadScript({ src: hCaptchaApiUrl, hideConsoleErrors })
                            ? captchaFrame
                            : undefined;

                        // report load failure
                    } catch (e) {
                        if (!hideConsoleErrors) console.log(loadingFailed, e);
                        return undefined;
                    };
                };

            // return captcha controls
            if (parentElement)
                return {
                    reloadCaptcha,
                    getCaptchaToken,
                };

            // report creation failure
        } catch (e) {
            if (!hideConsoleErrors) console.log(`createCaptcha failed`, e);
        };

        // fallback controls
        return {
            reloadCaptcha: async () => {
                if (!hideConsoleErrors) console.log(loadingFailed);
                return undefined;
            },
            getCaptchaToken: () => ``,
        };
    };

export {
    createCaptcha,
};