import { ReactNode } from "react";

interface Props {
	title: string;
	children: ReactNode;
}
export default function Card({ title, children }: Props) {
	return (
		<>
			<div style={{ border: "solid" }}>
				{title}
			</div>
			<div style={{ border: "dotted" }}>
				{children}
			</div>
		</>
	);
}