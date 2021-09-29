// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeOption} from '../index';

export type OptionArgs = {
	label: string;
	isDisabled: boolean;
	isSelected: boolean;
};

export function createOption({label, isDisabled, isSelected}: OptionArgs) {
	const option = new VSCodeOption();

	if (label) {
		option.textContent = label;
	}
	if (isDisabled) {
		option.setAttribute('disabled', '');
	}
	if (isSelected) {
		option.setAttribute('selected', '');
	}

	return option;
}
