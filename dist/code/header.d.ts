/**
 * Faster Request Header (frontend only).
 * Use when making a request to a server using `@degreesign/server`
 *
 * - application/json triggers preflight
 * - can speed requests 2x
 * - text/plain is simple type
 * - skips OPTIONS round trip
 * - type=application/json still parsed
 * - requires compliant server
 */
declare const FASTER_HEADER: HeadersInit;
export { FASTER_HEADER, };
