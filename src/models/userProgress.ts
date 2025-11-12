export interface UserProgress {
    currentChallengeId: string;
    completedChallenges: string[];
    challengeAttempts: { [challengeId: string]: number };
    usedHints: { [challengeId: string]: string[] };
    lastPosition: ChallengePosition;
}

export interface ChallengePosition {
    challengeId: string;
    cursorPosition: { line: number; column: number };
}