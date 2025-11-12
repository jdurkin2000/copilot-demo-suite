export interface CodingChallenge {
    id: string;
    title: string;
    description: string;
    category: 'refactoring' | 'testing' | 'cli' | 'cross-file';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    startingCode: string;
    language: string; // 'javascript', 'typescript', 'python', etc.
    fileContext?: FileContext[]; // For multi-file challenges
    validation: ValidationCriteria;
    hints: Hint[];
    copilotPrompts: string[];
    learningObjectives: string[];
}

export interface FileContext {
    fileName: string;
    content: string;
    language: string;
    isEditable: boolean;
}

export interface ValidationCriteria {
    type: 'output' | 'ast' | 'test' | 'manual';
    expectedOutput?: string;
    requiredPatterns?: string[];
    forbiddenPatterns?: string[];
    testFile?: string;
}

export interface Hint {
    id: string;
    text: string;
    requiredAttempts: number; // Show after X failed attempts
    copilotPromptExample: string;
}