import * as vscode from "vscode";
import { CodingChallengeProvider, ChallengeTreeItem } from "./utils/codingChallengeProvider";
import { markChallengeCompleted } from "./utils/userInfo";

let extensionContext: vscode.ExtensionContext | null = null;

export function activate(context: vscode.ExtensionContext) {
  extensionContext = context;

  const challengeProvider = new CodingChallengeProvider();
  const disposables = [
    vscode.window.registerTreeDataProvider(
      "codingChallenge",
      challengeProvider
    ),
    vscode.commands.registerCommand(
      "codingChallengeProvider.refreshEntry",
      () => challengeProvider.refresh()
    ),
    vscode.commands.registerCommand(
      "codingChallengeProvider.markCompleted",
      (node: ChallengeTreeItem) => markChallengeCompleted(node.description as string)
    ),
  ];
  context.subscriptions.push(...disposables);
}

// This method is called when your extension is deactivated
export function deactivate() {}

export function getGlobalState() {
  return extensionContext?.globalState;
}
