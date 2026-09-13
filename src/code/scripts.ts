import { ResourceType, TagName } from '../types';
import type { LoadScriptParams } from '../types';

const
    /** calls promises cache */
    loadCalls: Record<string, Promise<void>> = {},
    /** Load external script once */
    loadScript = ({
        src,
        type = ResourceType.Script,
        ready,
        interval = 100,
        timeout = 30000,
        hideConsoleErrors,
    }: LoadScriptParams) => {
        try {

            // return cached call
            const existing = loadCalls[src];
            if (existing) return existing;

            // create new call
            const call = new Promise<void>((resolve, reject) => {

                // track timing state
                let
                    settled = false,
                    poll: ReturnType<typeof setTimeout> | undefined,
                    timer: ReturnType<typeof setTimeout> | undefined;

                // settle and cleanup
                const
                    settle = (error?: unknown) => {
                        if (settled) return;
                        settled = true;
                        if (timer) clearTimeout(timer);
                        if (poll) clearTimeout(poll);
                        if (error) reject();
                        else resolve();
                    },

                    // poll until ready
                    checkReady = () => {
                        if (settled) return;
                        if (!ready || ready()) return settle();
                        poll = setTimeout(checkReady, interval);
                    };

                // enforce timeout limit
                timer = setTimeout(() => {
                    if (!hideConsoleErrors) console.log(`loadScript timed out`, src);
                    settle(true);
                }, timeout);

                // create resource tag
                let tag: HTMLLinkElement | HTMLScriptElement;
                if (type === ResourceType.Stylesheet) {
                    const link = document.createElement(TagName.Link);
                    link.rel = ResourceType.Stylesheet;
                    link.href = src;
                    tag = link;
                } else {
                    const script = document.createElement(TagName.Script);
                    script.type = ResourceType.Script;
                    script.src = src;
                    script.async = true;
                    tag = script;
                };

                // handle load result
                tag.onload = checkReady;
                tag.onerror = e => {
                    if (!hideConsoleErrors) console.log(`loadScript failed onload`, src, e);
                    settle(e);
                };

                // attach to head
                document.head.appendChild(tag);
            });

            // cache call
            loadCalls[src] = call;
            call.catch(() => {
                if (loadCalls[src] === call) delete loadCalls[src];
            });
            return call;

        } catch (e) {
            if (!hideConsoleErrors) console.log(`loadScript failed`, e);
        };
    };

export {
    loadScript,
};