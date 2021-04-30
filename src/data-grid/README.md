# VS Code Data Grid

The `vscode-data-grid` enables developers to display an array of data in a tabular layout. The component is created using three components that work together:

-   `<vscode-data-grid>`: The top level container element.
-   `<vscode-data-grid-row>`: Displays a single row of data associated with a single record or a header row.
-   `<vscode-data-grid-cell>`: Displays a single cell of data within a row.

## Data Grid Attributes

| Attribute               | Type   | Description                                                                            |
| ----------------------- | ------ | -------------------------------------------------------------------------------------- |
| `generate-header`       | string | The type of header row that should be generated. Options: `none`, `default`, `sticky`. |
| `grid-template-columns` | string | A string that gets applied to the the `grid-template-columns` attribute of child rows. |

## Data Grid Row Attributes

| Attribute               | Type   | Description                                                          |
| ----------------------- | ------ | -------------------------------------------------------------------- |
| `grid-template-columns` | string | A CSS Grid string that defines the column widths of a data grid row. |
| `row-type`              | string | The type of row. Options: `default`, `header`, `sticky-header`.      |

## Data Grid Cell Attributes

| Attribute     | Type   | Description                                           |
| ------------- | ------ | ----------------------------------------------------- |
| `cell-type`   | string | The type of cell. Options: `default`, `columnheader`. |
| `grid-column` | string | The column index of the cell.                         |

## Usage

### Basic Usage

The recommended basic usage of the `vscode-data-grid` is to use JavaScript (or TypeScript) to programmatically populate the rows and cells of the grid using the `rowsData` property as shown below.

With that said, a data grid can still be created with HTML only (also shown below).

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-data-grid--default)

_Using HTML & JavaScript_

Note that when using this method of data grid creation, the header row is automatically generated based on the data passed to `rowsData`.

```html
<vscode-data-grid id="basic-grid"></vscode-data-grid>
```

```javascript
// A row is automatically generated for each object in the rowsData array.
// A column is automatically generated for each key in the first object in the rowsData array.
document.getElementById('basic-grid').rowsData = [
	{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},
	{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},
	{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},
];
```

_Using Only HTML_

Note that when using this method of data grid creation, the `generate-header` attribute should be set to `none` and the header row must be manually defined using HTML.

```html
<vscode-data-grid generate-header="none">
	<vscode-data-grid-row row-type="header">
		<vscode-data-grid-cell cell-type="columnheader" grid-column="1">Header 1</vscode-data-grid-cell>
		<vscode-data-grid-cell cell-type="columnheader" grid-column="2">Header 2</vscode-data-grid-cell>
		<vscode-data-grid-cell cell-type="columnheader" grid-column="3">Header 3</vscode-data-grid-cell>
		<vscode-data-grid-cell cell-type="columnheader" grid-column="3">Header 4</vscode-data-grid-cell>
	</vscode-data-grid-row>
	<vscode-data-grid-row>
		<vscode-data-grid-cell grid-column="1">Cell Data</vscode-data-grid-cell>
		<vscode-data-grid-cell grid-column="2">Cell Data</vscode-data-grid-cell>
		<vscode-data-grid-cell grid-column="3">Cell Data</vscode-data-grid-cell>
		<vscode-data-grid-cell grid-column="4">Cell Data</vscode-data-grid-cell>
	</vscode-data-grid-row>
	<vscode-data-grid-row>
		<vscode-data-grid-cell grid-column="1">Cell Data</vscode-data-grid-cell>
		<vscode-data-grid-cell grid-column="2">Cell Data</vscode-data-grid-cell>
		<vscode-data-grid-cell grid-column="3">Cell Data</vscode-data-grid-cell>
		<vscode-data-grid-cell grid-column="4">Cell Data</vscode-data-grid-cell>
	</vscode-data-grid-row>
	<vscode-data-grid-row>
		<vscode-data-grid-cell grid-column="1">Cell Data</vscode-data-grid-cell>
		<vscode-data-grid-cell grid-column="2">Cell Data</vscode-data-grid-cell>
		<vscode-data-grid-cell grid-column="3">Cell Data</vscode-data-grid-cell>
		<vscode-data-grid-cell grid-column="4">Cell Data</vscode-data-grid-cell>
	</vscode-data-grid-row>
</vscode-data-grid>
```

### Generate Header Attribute

The `generate-header` attribute is applied to the `<vscode-data-grid>` component and can be used to automatically generate a header row when data is passed to the `rowsData` property in JavaScript.

There are three values that can be passed to the attribute:

-   `none`: No header row will be generated.
-   `default`: A default header row will be automatically generated. This is the default value if the `generate-header` is not defined on the component.
-   `sticky`: A sticky header row will be automatically generated.

**Important Note**

As shown above in the Basic Usage example, if the `vscode-data-grid` is defined using only HTML this attribute should be set to `none` otherwise an attempt at generating a default header row will occur and result in an undefined header row being added to the DOM.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-data-grid--with-no-header)

```html
<vscode-data-grid id="basic-grid" generate-header="none"></vscode-data-grid>
<vscode-data-grid id="basic-grid" generate-header="default"></vscode-data-grid>
<vscode-data-grid id="basic-grid" generate-header="sticky"></vscode-data-grid>
```

```javascript
document.getElementById('basic-grid').rowsData = [
	{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},
	{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},
	{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},
];
```

### Grid Template Columns Attribute

The `grid-template-columns` attribute can be applied to either the `<vscode-data-grid>` or `<vscode-data-grid-row>` component and can be used to define the width of each column in either all rows or a given row.

Each row of a data grid is rendered using CSS Grid layout. As a result, the value passed to the `grid-template-columns` attribute of these components can be the same as a the `grid-template-columns` CSS Grid property (i.e. `grid-template-columns="1fr 1fr 1fr 1fr"`).

By default the data grid automatically sets the width of each column to `"1fr"`.

**Differences Between Components**

The primary difference between using the `grid-template-columns` attribute on the `<vscode-data-grid>` versus the `<vscode-data-grid-row>` is how the value of the attribute is applied.

When defined on a `<vscode-data-grid>` component, the value of the attribute is automatically applied to every child row inside the component.

When defined on a `<vscode-data-grid-row>` component, the value of the attribute is applied to only that row.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-data-grid--with-custom-column-widths)

```html
<vscode-data-grid id="basic-grid" grid-template-columns="100px 10vw 3fr 30%"></vscode-data-grid>
```

```javascript
document.getElementById('basic-grid').rowsData = [
	{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},
	{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},
	{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},
];
```

### Row Type Attribute

The `row-type` attribute is used to define what type of row should be rendered. There are three values that can be passed to the attribute:

-   `default`: A default row will be rendered. This is the default value if the `row-type` is not defined on the component.
-   `header`: A header row will be rendered.
-   `sticky`: A sticky header row will be rendered.

**Usage Note**

Use this attribute when defining a data grid using only HTML. This attribute is automatically applied when rendering a data grid using JavaScript and the `rowsData` property.

```html
<vscode-data-grid-row row-type="default"></vscode-data-grid-row>
<vscode-data-grid-row row-type="header"></vscode-data-grid-row>
<vscode-data-grid-row row-type="sticky-header"></vscode-data-grid-row>
```

### Cell Type Attribute

The `cell-type` attribute is used to define what type of cell should be rendered. There are two values that can be passed to the attribute:

-   `default`: A default cell will be rendered. This is the default value if the `cell-type` is not defined on the component.
-   `columnheader`: A column header cell will be rendered.

**Usage Note**

Use this attribute when defining a data grid using only HTML. This attribute is automatically applied when rendering a data grid using JavaScript and the `rowsData` property.

```html
<vscode-data-grid-cell cell-type="default"></vscode-data-grid-cell>
<vscode-data-grid-cell cell-type="columnheader"></vscode-data-grid-cell>
```

### Grid Column Attribute

The `grid-column` attribute is used to define the column index (i.e. the order) of a given cell inside a row.

**Usage Note**

Use this attribute when defining a data grid using only HTML. This attribute is automatically applied when rendering a data grid using JavaScript and the `rowsData` property.

```html
<vscode-data-grid-row>
	<vscode-data-grid-cell grid-column="1">Cell Data</vscode-data-grid-cell>
	<vscode-data-grid-cell grid-column="2">Cell Data</vscode-data-grid-cell>
	<vscode-data-grid-cell grid-column="3">Cell Data</vscode-data-grid-cell>
	<vscode-data-grid-cell grid-column="4">Cell Data</vscode-data-grid-cell>
</vscode-data-grid-row>
```

### Custom Column Titles

By default, when defining a data grid programmatically using the `rowsData` property in JavaScript, the key of each object in the given array is used as the header text for each column.

This behavior can be overridden, however, by defining a new array of objects that is passed to the `columnDefinitions` property.

The array should contain an object for each column in the data grid that contains the following:

**`columnDataKey` Property**

This should contain the key from the `rowsData` object (representing a specific column) that you want the new custom title to override.

**`title` Property**

This is where you define the custom title for a given column.

```html
<vscode-data-grid id="basic-grid"></vscode-data-grid>
```

```javascript
document.getElementById('basic-grid').rowsData = [
	{ColumnKey1: 'Cell Data', ColumnKey2: 'Cell Data', ColumnKey3: 'Cell Data', ColumnKey4: 'Cell Data'},
	{ColumnKey1: 'Cell Data', ColumnKey2: 'Cell Data', ColumnKey3: 'Cell Data', ColumnKey4: 'Cell Data'},
	{ColumnKey1: 'Cell Data', ColumnKey2: 'Cell Data', ColumnKey3: 'Cell Data', ColumnKey4: 'Cell Data'},
];

document.getElementById('basic-grid').columnDefinitions = [
	{columnDataKey: 'ColumnKey1', title: 'A Custom Header Title'},
	{columnDataKey: 'ColumnKey2', title: 'Another Custom Title'},
	{columnDataKey: 'ColumnKey3', title: 'Title Is Custom'},
	{columnDataKey: 'ColumnKey4', title: 'Custom Title'},
];
```

### Custom Cell Element

While a `vscode-data-grid-cell` usually contains text, it can also contain any valid HTML, such as a `<vscode-button>`.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-breadcrumb-item--with-custom-element)

The custom cell element can be defined using only HTML by simply inserting the element(s) as a child of the `vscode-data-grid-cell`. The major pitfall of this approach is that this will have to be manually done for every cell in the data grid.

```html
<vscode-data-grid-cell>
	<vscode-button>Cell Data</vscode-button>
</vscode-data-grid-cell>
```

A more powerful and programmatic way of defining a custom cell element is to create a cell template using Microsoft's FAST Framework (the technology that this component library is built from).

A simple example is shown below, but further documentation for defining a template can be found [here](https://www.fast.design/docs/fast-element/declaring-templates).

```html
<vscode-data-grid id="basic-grid"></vscode-data-grid>
```

```typescript
import {html} from '@microsoft/fast-element';
import type {DataGridCell} from '@microsoft/fast-foundation';

document.getElementById('basic-grid').rowsData = [
	{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},
	{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},
	{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},
];

document.getElementById('basic-grid').columnDefinitions = [
	{
		columnDataKey: 'Header1',
		cellTemplate: buttonCellTemplate,
		cellFocusTargetCallback: getFocusTarget,
	},
	{
		columnDataKey: 'Header2',
		cellTemplate: buttonCellTemplate,
		cellFocusTargetCallback: getFocusTarget,
	},
	{
		columnDataKey: 'Header3',
		cellTemplate: buttonCellTemplate,
		cellFocusTargetCallback: getFocusTarget,
	},
	{
		columnDataKey: 'Header4',
		cellTemplate: buttonCellTemplate,
		cellFocusTargetCallback: getFocusTarget,
	},
];

const buttonCellTemplate = html<DataGridCell>`
	<template>
		<vscode-button @click="${handleClick}" style="width: 100%;">
			${cell => populateWithCellData(cell)}
		</vscode-button>
	</template>
`;

function handleClick(): void {
	alert('Cell Clicked!');
}

function populateWithCellData(cell: DataGridCell) {
	if (cell.columnDefinition) {
		const columnMetaData = cell.columnDefinition;
		const columnKey = columnMetaData.columnDataKey;

		if (cell.cellType === 'columnheader') {
			// If the cell is a header cell, return the cell title or column key
			return columnMetaData.title ? columnMetaData.title : columnKey;
		} else {
			// If the cell is a default cell, return the cell data
			if (cell.rowData) {
				const parentRow = cell.rowData;
				const cellData = parentRow[columnKey];
				return cellData;
			}
		}
	}
}

function getFocusTarget(cell: DataGridCell): HTMLElement {
	return cell.querySelector('vscode-button');
}
```

### Custom Header Cell Element

A header cell can also contain and render abitrary HTML.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-breadcrumb-item--with-custom-element)

Just like the custom cell element, a custom header cell can be defined using only HTML by simply inserting the element(s) as a child of the `vscode-data-grid-cell` that defines the `cell-type="columnheader"` attribute. Again, the major pitfall of this approach is that this will have to be manually done for every header cell in the data grid.

```html
<vscode-data-grid-cell cell-type="columnheader">
	<vscode-button>Cell Data</vscode-button>
</vscode-data-grid-cell>
```

A more powerful and programmatic way of defining a custom header cell element is to create a header cell template using Microsoft's FAST Framework (the technology that this component library is built from).

A simple example is shown below, but further documentation for defining a template can be found [here](https://www.fast.design/docs/fast-element/declaring-templates).

**Note**

The major difference between this example and the custom cell example is that the array of objects that is passed to the `columnDefintions` property uses the `headerCellTemplate` and `headerCellFocusTargetCallback` keys (instead of `cellTemplate` and `cellFocusTargetCallback`).

Additionally, all of these keys can be added to each object in the array to create a data grid that has _both_ custom cells and header cells.

```html
<vscode-data-grid id="basic-grid"></vscode-data-grid>
```

```typescript
import {html} from '@microsoft/fast-element';
import type {DataGridCell} from '@microsoft/fast-foundation';

document.getElementById('basic-grid').rowsData = [
	{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},
	{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},
	{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},
];

document.getElementById('basic-grid').columnDefinitions = [
	{
		columnDataKey: 'Header1',
		headerCellTemplate: buttonCellTemplate,
		headerCellFocusTargetCallback: getFocusTarget,
	},
	{
		columnDataKey: 'Header2',
		headerCellTemplate: buttonCellTemplate,
		headerCellFocusTargetCallback: getFocusTarget,
	},
	{
		columnDataKey: 'Header3',
		headerCellTemplate: buttonCellTemplate,
		headerCellFocusTargetCallback: getFocusTarget,
	},
	{
		columnDataKey: 'Header4',
		headerCellTemplate: buttonCellTemplate,
		headerCellFocusTargetCallback: getFocusTarget,
	},
];

const buttonCellTemplate = html<DataGridCell>`
	<template>
		<vscode-button @click="${handleClick}" style="width: 100%;">
			${cell => populateWithCellData(cell)}
		</vscode-button>
	</template>
`;

function handleClick(): void {
	alert('Cell Clicked!');
}

function populateWithCellData(cell: DataGridCell) {
	if (cell.columnDefinition) {
		const columnMetaData = cell.columnDefinition;
		const columnKey = columnMetaData.columnDataKey;

		if (cell.cellType === 'columnheader') {
			// If the cell is a header cell, return the cell title or column key
			return columnMetaData.title ? columnMetaData.title : columnKey;
		} else {
			// If the cell is a default cell, return the cell data
			if (cell.rowData) {
				const parentRow = cell.rowData;
				const cellData = parentRow[columnKey];
				return cellData;
			}
		}
	}
}

function getFocusTarget(cell: DataGridCell): HTMLElement {
	return cell.querySelector('vscode-button');
}
```
