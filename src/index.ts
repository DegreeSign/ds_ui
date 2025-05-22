const
    selectElement = (id: string) => document.querySelector(id) as HTMLElement,
    selectAll = (id: string) => document.querySelectorAll(id) as NodeListOf<Element>,
    showElement = (element: HTMLElement) => element!.style.display = `flex`,
    hideElement = (element: HTMLElement) => element!.style.display = `none`,
    /** Repeat Elements */
    repeatElements = ({
        children,
        parent,
        targetCount,
    }: {
        /** Child Element Nodes */
        children: NodeListOf<any> | undefined,
        /** Parent Element */
        parent: any,
        /** Target Count */
        targetCount: number
    }) => {
        try {
            const totalLength = children ? children.length : 0;
            if (children)
                if (targetCount > totalLength)
                    for (let i = totalLength; i < targetCount; i++)
                        parent.appendChild(children[0].cloneNode(1));
                else if (targetCount < totalLength && targetCount != 0)
                    for (let i = totalLength - 1; i >= targetCount; i--)
                        children[i]?.remove();
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