declare const selectElement: (id: string) => HTMLElement, showElement: (element: HTMLElement) => string, hideElement: (element: HTMLElement) => string, 
/** Repeat Elements */
repeatElements: ({ children, parent, targetCount, }: {
    /** Child Element Nodes */
    children: NodeListOf<any> | undefined;
    /** Parent Element */
    parent: any;
    /** Target Count */
    targetCount: number;
}) => void;
export { selectElement, showElement, hideElement, repeatElements, };
