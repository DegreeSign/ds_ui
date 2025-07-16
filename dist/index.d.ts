declare const selectElement: (id: string, parent?: Element | string) => HTMLElement, selectAll: (id: string, parent?: Element | string) => NodeListOf<Element>, showElement: (element: HTMLElement) => string, hideElement: (element: HTMLElement) => string, 
/** Repeat Elements */
repeatElements: ({ children, parent, targetCount, }: {
    /** Child Element Nodes */
    children?: NodeListOf<Element> | HTMLCollection;
    /** Parent Element */
    parent: Element | string;
    /** Target Count */
    targetCount: number;
}) => void;
export { selectElement, selectAll, showElement, hideElement, repeatElements, };
