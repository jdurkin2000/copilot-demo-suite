import * as vscode from "vscode";
import challenges from "../data/challenges.json";
import { hasCompletedChallenge } from "./userInfo";
import { CodingChallenge } from "../models/challenge";

export class CodingChallengeProvider
  implements vscode.TreeDataProvider<ChallengeTreeItem>
{
  private _onDidChangeTreeData: vscode.EventEmitter<
    ChallengeTreeItem | undefined | null | void
  > = new vscode.EventEmitter<ChallengeTreeItem | undefined | null | void>();
  readonly onDidChangeTreeData: vscode.Event<
    ChallengeTreeItem | undefined | null | void
  > = this._onDidChangeTreeData.event;

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(
    element: ChallengeTreeItem
  ): vscode.TreeItem | Thenable<vscode.TreeItem> {
    return element;
  }
  getChildren(
    element?: ChallengeTreeItem | undefined
  ): vscode.ProviderResult<ChallengeTreeItem[]> {
    return Promise.resolve(element ? [] : this.getChallengesFromJson());
  }

  private getChallengesFromJson(): ChallengeTreeItem[] {
    const toTreeItem = (
      challengeName: string,
      challengeId: string,
      challenge_description: string
    ): ChallengeTreeItem =>
      new ChallengeTreeItem(
        challengeName,
        challengeId,
        challenge_description
      );

    const treeItems = challenges
      ? challenges.map((obj) => toTreeItem(obj.title, obj.id, obj.description))
      : [];

    return treeItems;
  }
}

export class ChallengeTreeItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    private challenge_id: string,
    private challenge_description: string,
    public readonly command?: vscode.Command
  ) {
    super(label);
    this.tooltip = this.challenge_description;
    this.description = this.challenge_id;
    this.iconPath = new vscode.ThemeIcon(
      hasCompletedChallenge(this.challenge_id) ? "pass-filled" : "circle-large-outline"
    );
  }
}
