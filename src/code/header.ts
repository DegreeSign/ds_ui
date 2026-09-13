import { OutgoingHttpHeaders } from "http2"

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
const
    FASTER_HEADER: OutgoingHttpHeaders = {
        [`Content-Type`]: `text/plain;charset=UTF-8;type=application/json`,
    };

export {
    FASTER_HEADER,
};