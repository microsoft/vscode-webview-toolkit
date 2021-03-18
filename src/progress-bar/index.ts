import {customElement} from '@microsoft/fast-element';
import {
	BaseProgress,
	ProgressTemplate as template,
} from '@microsoft/fast-foundation';
import {ProgressBarStyles as styles} from './progress-bar.styles';

/**
 * The VSCode Progress Bar element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.baseprogress/ BaseProgress} and
 * {@link https://www.fast.design/docs/api/fast-foundation.progresstemplate/ ProgressTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-progress-bar>`
 */
@customElement({
	name: 'vscode-progress-bar',
	template,
	styles,
})
export class VSCodeProgressBar extends BaseProgress {}

/**
 * Styles for Progress
 * @public
 */
export const ProgressStyles = styles;
