declare const selectElement: (id: string, parent?: Element | string) => HTMLElement, selectAll: (id: string, parent?: Element | string) => NodeListOf<Element>, showElement: (element?: HTMLElement | null) => "flex" | null | undefined, hideElement: (element?: HTMLElement | null) => "none" | null | undefined, 
/** Repeat Elements */
repeatElements: ({ children, parent, targetCount, }: {
    /** Child Element Nodes */
    children?: NodeListOf<Element> | HTMLCollection | HTMLElement[];
    /** Parent Element */
    parent?: Element | HTMLElement | string;
    /** Target Count */
    targetCount: number;
}) => void;
export { selectElement, selectAll, showElement, hideElement, repeatElements, };
