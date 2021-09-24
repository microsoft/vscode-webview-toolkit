// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	BaseProgress,
	ProgressRingTemplate as template,
} from '@microsoft/fast-foundation';
import {ProgressRingStyles as styles} from './progress-ring.styles';

/**
 * The Visual Studio Code progress ring component.
 *
 * @remarks
 * HTML Element: `<vscode-progress-ring>`
 *
 * @public
 */
@customElement({
	name: 'vscode-progress-ring',
	template,
	styles,
})
export class VSCodeProgressRing extends BaseProgress {
	/**
	 * Component lifecycle method that runs when the component is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();

		// This will override any usage of the paused attribute
		// inherited by the FAST Foundation BaseProgress component
		// so that VSCodeProgressRing can never be paused
		if (this.paused) {
			this.paused = false;
		}

		// Defines a default aria label that screen readers can access
		this.setAttribute('aria-label', 'Loading');
	}

	/**
	 * Component lifecycle method that runs when an attribute of the
	 * element is changed.
	 *
	 * @param attrName - The attribute that was changed
	 * @param oldVal - The old value of the attribute
	 * @param newVal - The new value of the attribute
	 *
	 * @internal
	 */
	public attributeChangedCallback(
		attrName: string,
		oldVal: string,
		newVal: string
	) {
		if (attrName === 'value') {
			// This will override any usage of the value attribute
			// inherited by the FAST Foundation BaseProgress component
			// so that VSCodeProgressRing can never set to be a
			// determinate state
			this.removeAttribute('value');
		}
	}
}
