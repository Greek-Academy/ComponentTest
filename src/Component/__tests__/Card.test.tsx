import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card';

test('Cardコンポーネントが正しく描画されること', () => {
	const title = 'Test Title';
	const childText = 'Test Child';

	const { getByText } = render(
		<Card title={title}>
			{childText}
		</Card>
	);

	expect(getByText(title)).toBeInTheDocument();
	expect(getByText(childText)).toBeInTheDocument();
});
