# contenteditable
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/contenteditable

```html
<p contenteditable="true">Edit this content</p>
```

# Selection
https://developer.mozilla.org/zh-CN/docs/Web/API/Selection

```JavaScript
const selObj = window.getSelection();
console.log(selObj);

anchorNode: text
anchorOffset: 12
baseNode: text
baseOffset: 12
extentNode: text
extentOffset: 0
focusNode: text
focusOffset: 0
isCollapsed: false
rangeCount: 1
type: "Range"
[[Prototype]]: Selection
```

# Range
https://developer.mozilla.org/zh-CN/docs/Web/API/Range

```JavaScript
const selection = window.getSelection();

const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
selection.addRange(range);

const range = selection.getRangeAt(0);
selection.removeRange(range);
selection.removeAllRanges();
```

# execCommand
https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand

```JavaScript
bool = document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```