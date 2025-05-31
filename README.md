# DegreeSign UI functions

A lightweight TypeScript library for managing UI elements in web applications.

## Installation

Install the package via npm:

```bash
npm install @degreesign/ui
```

## Usage

Import the functions from the `@degreesign/ui` package in your TypeScript or JavaScript project:

```javascript
import { selectElement, selectAll, showElement, hideElement, repeatElements } from '@degreesign/ui';
```

Below are the available functions and their usage examples.

## Functions

### `selectElement(id: string, parent?: Element) => HTMLElement`

Selects a single DOM element by its CSS selector, optionally within a parent element.

**Parameters:**
- `id`: The CSS selector (e.g., `#myId`, `.myClass`) of the element to select.
- `parent` (optional): The parent element to search within. Defaults to `document`.

**Returns:** An `HTMLElement`.

**Example:**
```javascript
// Select an element by ID
const myDiv = selectElement('#myDiv');
myDiv.textContent = 'Hello, World!';

// Select an element within a specific parent
const parent = selectElement('.container');
const child = selectElement('.child', parent);
child.style.color = 'blue';
```

### `selectAll(id: string, parent?: Element) => NodeListOf<Element>`

Selects all DOM elements matching a CSS selector, optionally within a parent element.

**Parameters:**
- `id`: The CSS selector (e.g., `.myClass`, `div`) to select elements.
- `parent` (optional): The parent element to search within. Defaults to `document`.

**Returns:** A `NodeListOf<Element>`.

**Example:**
```javascript
// Select all elements with a class
const items = selectAll('.item');
items.forEach(item => item.style.backgroundColor = 'lightgray');

// Select all divs within a parent
const parent = selectElement('#parent');
const divs = selectAll('div', parent);
divs.forEach(div => div.classList.add('highlight'));
```

### `showElement(element: HTMLElement) => void`

Sets an element's display style to `flex`, making it visible.

**Parameters:**
- `element`: The `HTMLElement` to show.

**Example:**
```javascript
const myDiv = selectElement('#myDiv');
showElement(myDiv); // Displays the element with flex layout
```

### `hideElement(element: HTMLElement) => void`

Sets an element's display style to `none`, hiding it.

**Parameters:**
- `element`: The `HTMLElement` to hide.

**Example:**
```javascript
const myDiv = selectElement('#myDiv');
hideElement(myDiv); // Hides the element
```

### `repeatElements({ children?: NodeListOf<Element>, parent: Element, targetCount: number }) => void`

Repeats or removes child elements within a parent to match a target count by cloning or removing the first child.

**Parameters:**
- `children` (optional): A `NodeListOf<Element>` containing the child elements to repeat or remove.
- `parent`: The parent `Element` where children will be added or removed.
- `targetCount`: The desired number of child elements.

**Example:**
```javascript
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

## Error Handling

The `repeatElements` function includes error handling to catch and log issues when manipulating elements. For example, if the `children` NodeList is invalid or cloning fails, an error will be logged to the console.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request at [https://github.com/DegreeSign/ds_ui](https://github.com/DegreeSign/ds_ui).

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/DegreeSign/ds_ui/blob/main/LICENSE) file for details.