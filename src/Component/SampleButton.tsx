import { useState } from "react";

export default function SampleButton() {
	const [state, setState] = useState(false);
	function handleClick() {
		setState((prevState) => !prevState);
	};

	return (
		<button onClick={handleClick}>
			{state ? "ON" : "OFF"}
		</button>
	);
}