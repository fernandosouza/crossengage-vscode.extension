// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

let terminal = vscode.window.createTerminal('XE', '/bin/zsh');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const startFastItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 1);
	startFastItem.text = 'XE.startfast';
	startFastItem.command = 'extension.crossengage.startfast';

	const startItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 1);
	startItem.text = 'XE.start';
	startItem.command = 'extension.crossengage.start';

	const showTerminalItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 1);
	showTerminalItem.text = 'XE.showterminal';
	showTerminalItem.command = 'extension.crossengage.showTerminal';

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
		console.log('Congratulations, your extension "crossengage" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.crossengage.crossengage', () => {
		startFastItem.show();
		startItem.show();
		showTerminalItem.show();
	});

	let runStartFast = vscode.commands.registerCommand('extension.crossengage.startfast', () => {
		terminal.hide();
		terminal.dispose();
		terminal = vscode.window.createTerminal('XE', '/bin/zsh');
		terminal.show();
		terminal.sendText('yarn start:fast');
	});

	let runStart = vscode.commands.registerCommand('extension.crossengage.start', () => {
		terminal.hide();
		terminal.dispose();
		terminal = vscode.window.createTerminal('XE', '/bin/zsh');
		terminal.show();
		terminal.sendText('yarn start');
	});

	let showTerminal = vscode.commands.registerCommand('extension.crossengage.showTerminal', () => {
		terminal.show();
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(showTerminal);
	context.subscriptions.push(runStartFast);
	context.subscriptions.push(runStart);
	vscode.commands.executeCommand('extension.crossengage.crossengage');

}

// this method is called when your extension is deactivated
export function deactivate() {
	terminal.dispose();
}
