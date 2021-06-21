// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {disabledCursor, focusVisible} from '@microsoft/fast-foundation';
import {
	borderWidth,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';
import {DropdownStyles} from '../dropdown/dropdown.styles';

export const ComboboxStyles = css`
	${DropdownStyles}

	:host([disabled]) *,
	:host([disabled]) .selected-value {
		cursor: ${disabledCursor};
		user-select: none;
	}
	.selected-value {
		-webkit-appearance: none;
		background: transparent;
		border: none;
		color: inherit;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		height: calc(100% - (2 * (${borderWidth} * 1px)));
		margin: auto 0;
		width: 100%;
	}
	.selected-value:hover,
	.selected-value:${focusVisible},
	.selected-value:disabled,
	.selected-value:active {
		outline: none;
	}
`;
