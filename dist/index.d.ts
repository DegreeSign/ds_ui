declare const selectElement: (id: string) => HTMLElement, selectAll: (id: string) => NodeListOf<Element>, showElement: (element: HTMLElement) => string, hideElement: (element: HTMLElement) => string, 
/** Repeat Elements */
repeatElements: ({ children, parent, targetCount, }: {
    /** Child Element Nodes */
    children: NodeListOf<any> | undefined;
    /** Parent Element */
    parent: any;
    /** Target Count */
    targetCount: number;
}) => void;
export { selectElement, selectAll, showElement, hideElement, repeatElements, };
