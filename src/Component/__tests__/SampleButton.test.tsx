import { render, screen } from "@testing-library/react";
import SampleButton from "../SampleButton";

test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
	render(<SampleButton />);
	const sampleButton = screen.getByRole("button");
	expect(sampleButton).toHaveTextContent("OFF");
});