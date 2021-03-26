# VSCode Divider

The `vscode-divider` is a web component implementation of an [HTML Horiztonal Rule Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr).

## Attributes

| Attribute | Type   | Description                                    |
| --------- | ------ | ---------------------------------------------- |
| role      | string | Indicates the semantic meaning of the divider. |

## Usage

### Basic Usage

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-divider--default)

```html
<vscode-divider></vscode-divider>
```

### Role Attribute

The role attribute determines the semantic meaning (or lack there of) of a VSCode Divider. The two options are `separator` and `presentation`.

The `separator` option is the default value and indicates that the divider semantically separates content.

The `presentation` option indicates that the divider has no semantic value and is for visual presentation only.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-divider--with-role)

```html
<!-- Indicates that the divider semantically separates content -->
<vscode-divider role="separator"></vscode-divider>
<vscode-divider></vscode-divider>

<!-- Indicates that the divider has no semantic value and is for visual presentation only -->
<vscode-divider role="presentation"></vscode-divider>
```
