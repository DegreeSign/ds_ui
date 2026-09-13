import { parentValid } from './select';

const
    /** Repeat Elements */
    repeatElements = ({
        children,
        parent,
        targetCount,
    }: {
        /** Child Element Nodes */
        children?: NodeListOf<Element> | HTMLCollection | HTMLElement[],
        /** Parent Element */
        parent?: Element | HTMLElement | string,
        /** Target Count */
        targetCount: number
    }) => {
        try {
            const parentElm = parentValid(parent);
            children = children || parentElm?.children;
            if (children?.length) {
                const totalLength = children?.length || 0;
                if (targetCount > totalLength) {
                    const firstChild = children?.[0];
                    if (firstChild)
                        for (let i = totalLength; i < targetCount; i++) {
                            if (parentElm) parentElm.appendChild(firstChild.cloneNode(true));
                            else firstChild?.after(firstChild.cloneNode(true));
                        };
                } else if (targetCount < totalLength && targetCount != 0)
                    for (let i = totalLength - 1; i >= targetCount; i--)
                        children[i]?.remove();
            };
        } catch (e) {
            console.log(`repeatElements failed`, targetCount, e);
        };
    };

export {
    repeatElements,
}
