import {action} from '@storybook/addon-actions';
import {createDropdown, DropdownArgs} from './fixtures/createDropdown';

export default {
	title: 'Library/Dropdown',
	argTypes: {
		isOpen: {control: 'boolean'},
		position: {
			control: {
				type: 'select',
				options: ['Above', 'Below'],
			},
		},
		isDisabled: {control: 'boolean'},
		isFocused: {control: 'boolean'},
		customIndicator: {control: 'boolean'},
		numberOfChildren: {control: 'number'},
		onChange: {
			action: 'changed',
			table: {
				disable: true,
			},
		},
	},
};

const Template = ({...args}: DropdownArgs) => {
	return createDropdown({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	isOpen: false,
	position: 'Below',
	isDisabled: false,
	isFocused: false,
	numberOfChildren: 3,
	customIndicator: false,
	onChange: action('dropdown-onchange'),
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-dropdown>\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-dropdown>`,
		},
	},
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
	...Default.args,
	isDisabled: true,
};
WithDisabled.parameters = {
	docs: {
		source: {
			code: `<vscode-dropdown disabled>\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-dropdown>`,
		},
	},
};

export const WithOpen: any = Template.bind({});
WithOpen.args = {
	...Default.args,
	isOpen: true,
};
WithOpen.parameters = {
	docs: {
		source: {
			code: `<vscode-dropdown open>\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-dropdown>`,
		},
	},
};

export const WithPositionAbove: any = Template.bind({});
WithPositionAbove.args = {
	...Default.args,
	position: 'Above',
};
WithPositionAbove.parameters = {
	docs: {
		source: {
			code: `<vscode-dropdown position="above">\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-dropdown>`,
		},
	},
};

export const WithPositionBelow: any = Template.bind({});
WithPositionBelow.args = {
	...Default.args,
	position: 'Below',
};
WithPositionBelow.parameters = {
	docs: {
		source: {
			code: `<vscode-dropdown position="below">\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-dropdown>`,
		},
	},
};

export const WithCustomIndicator: any = Template.bind({});
WithCustomIndicator.args = {
	...Default.args,
	customIndicator: true,
};
WithCustomIndicator.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using VS Code Codicon Library -->\n\n<vscode-dropdown>\n\t<span slot="indicator" class="codicon codicon-settings"></span>\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-dropdown>`,
		},
	},
};

export const WithNoOptions: any = Template.bind({});
WithNoOptions.args = {
	...Default.args,
	numberOfChildren: 0,
};
WithNoOptions.parameters = {
	docs: {
		source: {
			code: `<vscode-dropdown></vscode-dropdown>`,
		},
	},
};

export const WithLongList: any = Template.bind({});
WithLongList.args = {
	...Default.args,
	numberOfChildren: 50,
};
WithLongList.parameters = {
	docs: {
		source: {
			code: `<vscode-dropdown>\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n\t<!-- Insert more options... -->\n</vscode-dropdown>`,
		},
	},
};
