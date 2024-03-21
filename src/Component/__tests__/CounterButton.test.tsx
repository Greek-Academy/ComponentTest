import { fireEvent, getByAltText, render, screen } from "@testing-library/react";
import CounterButton from "../CounterButton";

describe('CounterButton', () => {
	test('ボタンクリック時にカウントが増加すること', () => {
		const { getByText, getByTestId } = render(<CounterButton />);
		const button = getByText('カウント＋１');
		const counter = getByTestId('counter');

		// ボタンクリック前はカウンターが 0 であることを確認
		expect(counter.textContent).toBe('0');

		// ボタンクリック
		fireEvent.click(button);

		// ボタンクリック後はカウンターが 1 増加していることを確認
		expect(counter.textContent).toBe('1');
	});

	test('ボタンクリック2回のテスト', () => {
		const { getByText, getByTestId } = render(<CounterButton />);
		const button = getByText('カウント＋１');
		const counter = getByTestId('counter');

		// ボタンクリック前はカウンターが 0 であることを確認
		expect(counter.textContent).toBe('0');

		// ボタンクリック
		fireEvent.click(button);
		fireEvent.click(button);
		// ボタンクリック後はカウンターが 1 増加していることを確認
		expect(counter.textContent).toBe('2');
	});
});