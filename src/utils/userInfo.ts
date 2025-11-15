import { commands } from "vscode";
import { getGlobalState } from "../extension";
import { UserProgress } from "../models/userProgress";

const PROGRESS_KEY = "user_progress";
const defaultProgress: UserProgress = {
  currentChallengeId: "",
  completedChallenges: [],
  challengeAttempts: {},
  usedHints: {},
  lastPosition: { challengeId: "", cursorPosition: { line: 0, column: 0 } },
};

export function loadProgress(): UserProgress {
  return getGlobalState().get<UserProgress>(PROGRESS_KEY, defaultProgress);
}

export function saveProgress(progress: UserProgress) {
    getGlobalState().update(PROGRESS_KEY, progress);
}

export function hasCompletedChallenge(challenge_id: string): boolean {
    return loadProgress().completedChallenges.includes(challenge_id);
}

export function markChallengeCompleted(challenge_id: string) {
    if (hasCompletedChallenge(challenge_id)) {
        return;
    }

    loadProgress().completedChallenges.push(challenge_id);
    commands.executeCommand('codingChallengeProvider.refreshEntry');
}
