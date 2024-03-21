import { useState } from "react";

export default function CounterButton() {
	const [state, setState] = useState(0);
	function handleClick() {
		setState(state + 1);
	};

	return (
		<>
			<p>
				<button onClick={handleClick}>
					カウント＋１
				</button>
			</p>
			<p data-testid="counter">{state}</p>
		</>
	);
}