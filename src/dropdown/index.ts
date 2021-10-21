// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	Select as FoundationSelect,
	SelectOptions,
	selectTemplate as template,
} from '@microsoft/fast-foundation';
import {dropdownStyles as styles} from './dropdown.styles';

/**
 * Dropdown configuration options
 * @public
 */
export type DropdownOptions = SelectOptions;

/**
 * The Visual Studio Code dropdown class.
 *
 * @public
 */
export class Dropdown extends FoundationSelect {}

/**
 * The Visual Studio Code link dropdown registration.
 *
 * @remarks
 * HTML Element: `<vscode-dropdown>`
 *
 * @public
 */
export const vsCodeDropdown = Dropdown.compose<DropdownOptions>({
	baseName: 'dropdown',
	template,
	styles,
	indicator: `
		<svg
			class="select-indicator"
			part="select-indicator"
			viewBox="0 0 12 7"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"
			/>
		</svg>
	`,
});
