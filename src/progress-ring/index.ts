import {customElement, ElementStyles} from '@microsoft/fast-element';
import {
	BaseProgress,
	ProgressRingTemplate as template,
} from '@microsoft/fast-foundation';
import {ProgressRingStyles as styles} from './progress-ring.styles';

/**
 * The VS Code Progress Ring element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.baseprogress/ | BaseProgress} and
 * {@link https://www.fast.design/docs/api/fast-foundation.progressringtemplate/ | ProgressRingTemplate}.
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
export class VSCodeProgressRing extends BaseProgress {}

/**
 * Styles for the VS Code Progress Ring component
 * @public
 */
export const ProgressRingStyles: ElementStyles = styles;
