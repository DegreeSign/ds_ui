declare const selectElement: (id: string, parent?: Element) => HTMLElement, selectAll: (id: string, parent?: Element) => NodeListOf<Element>, showElement: (element: HTMLElement) => string, hideElement: (element: HTMLElement) => string, 
/** Repeat Elements */
repeatElements: ({ children, parent, targetCount, }: {
    /** Child Element Nodes */
    children?: NodeListOf<Element>;
    /** Parent Element */
    parent: Element;
    /** Target Count */
    targetCount: number;
}) => void;
export { selectElement, selectAll, showElement, hideElement, repeatElements, };
