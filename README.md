# Cool-tabs

Adds `cool-tabs:atEndOfLine` and `cool-tabs:atStartOfLine` as "when" context variables for key shortcuts to allow to use the tab key for the "Indent line" action while in the middle of a line, without losing ability to use tab for auto-complete or tab to automatically add the right amounts of tab.

Suggested "when" condition: `editorTextFocus && !cool-tabs:atEndOfLine && !cool-tabs:atStartOfLine && !editorReadonly && !suggestWidgetVisible && !inSnippetMode`.
