// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	vscode.window.onDidChangeTextEditorSelection((ev) => {
		let firstSelection = ev.selections[0];
		if (ev.selections.length === 1 && firstSelection.isSingleLine) {
			vscode.commands.executeCommand('setContext', 'cool-tabs:atStartOfLine', firstSelection.start.character === 0);
			vscode.commands.executeCommand('setContext', 'cool-tabs:atEndOfLine', firstSelection.end.character === ev.textEditor.document.lineAt(firstSelection.end.line).range.end.character);
		}
		else {
			vscode.commands.executeCommand('setContext', 'cool-tabs:atStartOfLine', false);
			vscode.commands.executeCommand('setContext', 'cool-tabs:atEndOfLine', false);
		}

	});
}

// this method is called when your extension is deactivated
export function deactivate() { }
