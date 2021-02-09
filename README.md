# cool-tabs README

Adds "cool-tabs:atEndOfLine" and "cool-tabs:atStartOfLine" as "When" variables for key shortcuts.

Allows to use the `tab` key for "Indent line" while in the middle of a line without losing ability to use tab for auto-complete or tab to automatically add the right amounts of tab.

Suggested when condition: `editorTextFocus && !cool-tabs:atEndOfLine && !cool-tabs:atStartOfLine && !editorReadonly && !suggestWidgetVisible`.
