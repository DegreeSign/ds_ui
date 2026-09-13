# DegreeSign UI functions

A lightweight, dependency-free TypeScript library of frontend essentials for web app UI, including DOM controls, instant CAPTCHA implementation, and faster requests.

## Setup

Install the package via npm:

```bash
npm install @degreesign/ui
```

OR via yarn:

```bash
yarn add @degreesign/ui
```

OR use in browsers through CDN

```html
<script 
    src="https://cdn.jsdelivr.net/npm/@degreesign/ui@1.2.3/dist/browser/degreesign.min.js"
></script>
```

## Usage

Import the functions from the `@degreesign/ui` package in your TypeScript or JavaScript project:

```ts
import { selectElement, selectAll, showElement, hideElement, repeatElements, loadScript, FASTER_HEADER } from '@degreesign/ui';
```

Below are the available functions and their usage examples.

## CDN Usage

Use the package directly in the browser without a build step by loading the UMD bundle from a CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@degreesign/ui@1.2.3/dist/browser/degreesign.min.js"></script>
```

The bundle exposes a global `dsUI` object containing all exported functions, enums, and constants:

```html
<div id="myDiv">Hello</div>
<script>
    const el = dsUI.selectElement('#myDiv');
    dsUI.showElement(el);
    dsUI.hideElement(el);
</script>
```

## Functions

### Select Element

Selects a single DOM element by its CSS selector, optionally within a parent element.

**Parameters:**
- `id`: The CSS selector (e.g., `#myId`, `.myClass`) of the element to select.
- `parent` (optional): The parent element to search within. Defaults to `document`.

**Returns:** An `HTMLElement`.

**Example:**
```ts
// Select an element by ID
const myDiv = selectElement('#myDiv');
myDiv.textContent = 'Hello, World!';

// Select an element within a specific parent
const parent = selectElement('.container');
const child = selectElement('.child', parent);
child.style.color = 'blue';
```

### Select All

Selects all DOM elements matching a CSS selector, optionally within a parent element.

**Parameters:**
- `id`: The CSS selector (e.g., `.myClass`, `div`) to select elements.
- `parent` (optional): The parent element to search within. Defaults to `document`.

**Returns:** A `NodeListOf<Element>`.

**Example:**
```ts
// Select all elements with a class
const items = selectAll('.item');
items.forEach(item => item.style.backgroundColor = 'lightgray');

// Select all divs within a parent
const parent = selectElement('#parent');
const divs = selectAll('div', parent);
divs.forEach(div => div.classList.add('highlight'));
```

### Show Element

Sets an element's display style to `flex`, making it visible.

**Parameters:**
- `element`: The `HTMLElement` to show.

**Example:**
```ts
const myDiv = selectElement('#myDiv');
showElement(myDiv); // Displays the element with flex layout
```

### Hide Element

Sets an element's display style to `none`, hiding it.

**Parameters:**
- `element`: The `HTMLElement` to hide.

**Example:**
```ts
const myDiv = selectElement('#myDiv');
hideElement(myDiv); // Hides the element
```

### Repeat Elements

Repeats or removes child elements within a parent to match a target count by cloning or removing the first child.

**Parameters:**
- `children` (optional): A `NodeListOf<Element>` containing the child elements to repeat or remove.
- `parent`: The parent `Element` where children will be added or removed.
- `targetCount`: The desired number of child elements.

**Example:**
```ts
// HTML structure:
// <div id="parent">
//   <div class="child">Item</div>
// </div>

// Repeat child elements to a total of 5
const parent = selectElement('#parent');
const children = selectAll('.child', parent);
repeatElements({ parent, children, targetCount: 5 });
// Result: 5 child divs inside #parent

// Reduce to 2 child elements
repeatElements({ parent, children: selectAll('.child', parent), targetCount: 2 });
// Result: 2 child divs inside #parent
```

### Load Script

Loads an external script or stylesheet once and caches the returned promise.

**Parameters:**
- `src`: The resource URL.
- `hideConsoleErrors` (optional): Set to `true` to disable console logging.

**Returns:** A `Promise<void>`.

**Example:**
```ts
loadScript({ src: 'https://example.com/lib.js', hideConsoleErrors: true });
```

### Faster Request Header

A ready-made `Content-Type` header for requests to a server built with `@degreesign/server`.

A cross-origin `application/json` request is not a CORS "simple request", so the browser first sends an `OPTIONS` (preflight) call. Because `text/plain` is a simple content type, using `FASTER_HEADER` skips that preflight and can roughly double request speed, while the trailing `type=application/json` parameter tells the server to parse the body as JSON.

**Example:**
```ts
import { FASTER_HEADER } from '@degreesign/ui';

await fetch(`https://api.example.com/v1/endpoint`, {
    method: `POST`,
    headers: FASTER_HEADER,
    body: JSON.stringify({ hello: `world` }),
});
```

## Error Handling

The `repeatElements` function includes error handling to catch and log issues when manipulating elements. For example, if the `children` NodeList is invalid or cloning fails, an error will be logged to the console.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request at [https://github.com/DegreeSign/ds_ui](https://github.com/DegreeSign/ds_ui).

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/DegreeSign/ds_ui/blob/main/LICENSE) file for details.