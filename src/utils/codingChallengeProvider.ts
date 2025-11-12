import * as vscode from "vscode";
import * as fs from "fs";
import challenges from "../data/challenges.json";
import { CodingChallenge } from "../models/challenge";

export class CodingChallengeProvider
  implements vscode.TreeDataProvider<ChallengeTreeItem>
{
  constructor(private workspaceRoot: string | undefined) {}

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
      challenge_description: string
    ): ChallengeTreeItem =>
      new ChallengeTreeItem(challengeName, false, challenge_description);

    const treeItems = challenges
      ? challenges.map((obj) => toTreeItem(obj.title, obj.description))
      : [];

    return treeItems;
  }
}

class ChallengeTreeItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    private completed: boolean,
    private challenge_description: string
  ) {
    super(label);
    this.tooltip = this.challenge_description;
    //this.description = this.challenge_description;
    this.iconPath = new vscode.ThemeIcon(
      this.completed ? "pass-filled" : "circle-large-outline"
    );
  }
}
