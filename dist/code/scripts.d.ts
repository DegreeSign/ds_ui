import type { LoadScriptParams } from '../types';
declare const 
/** Load external script once */
loadScript: ({ src, type, ready, interval, timeout, hideConsoleErrors, }: LoadScriptParams) => Promise<void> | undefined;
export { loadScript, };
