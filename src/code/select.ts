import { Display, TypeName } from '../types';

const
    /** Validate parent element */
    parentValid = (parent?: Element | string): Element | undefined => {
        if (typeof parent == TypeName.String)
            return document.querySelector(parent as string) as Element;
        return parent as Element | undefined
    },
    /** Select element by selector */
    selectElement = (id: string, parent?: Element | string) =>
        (parentValid(parent) || document)?.querySelector(id) as HTMLElement,
    /** Select all by selector */
    selectAll = (id: string, parent?: Element | string) =>
        (parentValid(parent) || document)?.querySelectorAll(id) as NodeListOf<Element>,
    /** Show element */
    showElement = (element?: HTMLElement | null) => element && (element.style.display = Display.Flex),
    /** Hide element */
    hideElement = (element?: HTMLElement | null) => element && (element.style.display = Display.None);

export {
    parentValid,
    selectElement,
    selectAll,
    showElement,
    hideElement,
}
