declare const 
/** Repeat Elements */
repeatElements: ({ children, parent, targetCount, }: {
    /** Child Element Nodes */
    children?: NodeListOf<Element> | HTMLCollection | HTMLElement[];
    /** Parent Element */
    parent?: Element | HTMLElement | string;
    /** Target Count */
    targetCount: number;
}) => void;
export { repeatElements, };
