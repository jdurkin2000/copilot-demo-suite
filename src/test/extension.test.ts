import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import { CodingChallengeProvider } from '../utils/codingChallengeProvider';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Challenge Provider returns children', async () => {
		const children = await new CodingChallengeProvider().getChildren();
		assert.ok(children);
		assert.ok(Array.isArray(children));
		assert.notStrictEqual(children.length, 0);
	});
});
