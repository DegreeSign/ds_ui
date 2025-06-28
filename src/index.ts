const
    parentValid = (parent?: Element | string): Element | undefined => {
        if (typeof parent == `string`)
            parent = document.querySelector(parent) as Element;
        return parent
    },
    selectElement = (id: string, parent?: Element | string) =>
        (parentValid(parent) || document)?.querySelector(id) as HTMLElement,
    selectAll = (id: string, parent?: Element | string) =>
        (parentValid(parent) || document)?.querySelectorAll(id) as NodeListOf<Element>,
    showElement = (element: HTMLElement) => element && (element.style.display = `flex`),
    hideElement = (element: HTMLElement) => element && (element.style.display = `none`),
    /** Repeat Elements */
    repeatElements = ({
        children,
        parent,
        targetCount,
    }: {
        /** Child Element Nodes */
        children?: NodeListOf<Element>,
        /** Parent Element */
        parent: Element | string,
        /** Target Count */
        targetCount: number
    }) => {
        try {
            const parentElm = parentValid(parent);
            if (children?.length) {
                const totalLength = children?.length || 0;
                if (targetCount > totalLength) {
                    for (let i = totalLength; i < targetCount; i++)
                        parentElm?.appendChild(children?.[0]?.cloneNode(true));
                } else if (targetCount < totalLength && targetCount != 0)
                    for (let i = totalLength - 1; i >= targetCount; i--)
                        children[i]?.remove();
            };
        } catch (e) {
            console.log(`Error repeating elements`, targetCount, e);
        };
    };

export {
    selectElement,
    selectAll,
    showElement,
    hideElement,
    repeatElements,
}