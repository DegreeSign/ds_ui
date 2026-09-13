import { Display } from '../types';
declare const 
/** Validate parent element */
parentValid: (parent?: Element | string) => Element | undefined, 
/** Select element by selector */
selectElement: (id: string, parent?: Element | string) => HTMLElement, 
/** Select all by selector */
selectAll: (id: string, parent?: Element | string) => NodeListOf<Element>, 
/** Show element */
showElement: (element?: HTMLElement | null) => Display.Flex | null | undefined, 
/** Hide element */
hideElement: (element?: HTMLElement | null) => Display.None | null | undefined;
export { parentValid, selectElement, selectAll, showElement, hideElement, };
