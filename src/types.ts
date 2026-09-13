export enum ResourceType {
    Script = `text/javascript`,
    Stylesheet = `stylesheet`,
}

export enum TagName {
    Link = `link`,
    Script = `script`,
}

export enum Display {
    Flex = `flex`,
    None = `none`,
}

export enum TypeName {
    String = `string`,
}

export type LoadScriptParams = {
    /** Resource URL */
    src: string,
    /** Resource type */
    type?: ResourceType,
    /** Defaults to load event */
    ready?: () => boolean,
    /** Readiness poll (ms) */
    interval?: number,
    /** Max wait (ms) */
    timeout?: number,
    /** Disable console logging */
    hideConsoleErrors?: boolean,
};
