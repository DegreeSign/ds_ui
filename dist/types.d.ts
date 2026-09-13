export declare enum ResourceType {
    Script = "text/javascript",
    Stylesheet = "stylesheet"
}
export declare enum TagName {
    Link = "link",
    Script = "script"
}
export declare enum Display {
    Flex = "flex",
    None = "none"
}
export declare enum TypeName {
    String = "string"
}
export type LibsWindow = Window & {
    hcaptcha?: {
        reset: (id?: string) => void;
    };
};
export interface CreateCaptchaParams {
    /** Parent element or selector */
    parentTag: string | HTMLElement;
    /** hCaptcha site key */
    sitekey: string;
    /** Disable console logging */
    hideConsoleErrors?: boolean;
}
export interface CreateCaptcha {
    captchaFrame?: HTMLFormElement;
    getCaptchaToken: () => string;
    resetCaptcha: () => void;
}
export type LoadScriptParams = {
    /** Resource URL */
    src: string;
    /** Resource type */
    type?: ResourceType;
    /** Defaults to load event */
    ready?: () => boolean;
    /** Readiness poll (ms) */
    interval?: number;
    /** Max wait (ms) */
    timeout?: number;
    /** Disable console logging */
    hideConsoleErrors?: boolean;
};
