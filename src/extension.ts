// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

let terminal = vscode.window.createTerminal('XE', '/bin/zsh');

const startFastItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 1);
startFastItem.text = 'XE.startfast';
startFastItem.command = 'extension.crossengage.startfast';

const startItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 1);
startItem.text = 'XE.start';
startItem.command = 'extension.crossengage.start';

const showTerminalItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 1);
showTerminalItem.text = 'XE.showterminal';
showTerminalItem.command = 'extension.crossengage.showTerminal';

function showStatus(message: string) {
	const status = vscode.window.setStatusBarMessage('yarn start:fast has started');
	const timeOut = setTimeout(() => {
		status.dispose();
		clearTimeout(timeOut);
	}, 5000);
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let runStartFast = vscode.commands.registerCommand('extension.crossengage.startfast', () => {
		terminal.hide();
		terminal.dispose();
		terminal = vscode.window.createTerminal('XE', '/bin/zsh');
		terminal.sendText('yarn start:fast');
		showStatus('yarn start:fast has started');
	});

	let runStart = vscode.commands.registerCommand('extension.crossengage.start', () => {
		terminal.hide();
		terminal.dispose();
		terminal = vscode.window.createTerminal('XE', '/bin/zsh');
		terminal.sendText('yarn start');
		showStatus('yarn start has started');
	});

	let showTerminal = vscode.commands.registerCommand('extension.crossengage.showTerminal', () => {
		terminal.show();
	});

	context.subscriptions.push(showTerminal);
	context.subscriptions.push(runStartFast);
	context.subscriptions.push(runStart);
	vscode.commands.executeCommand('extension.crossengage.crossengage');

	startFastItem.show();
	startItem.show();
	showTerminalItem.show();
}

// this method is called when your extension is deactivated
export function deactivate() {
	terminal.dispose();
}
