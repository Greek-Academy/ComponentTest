import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SampleButton from './Component/SampleButton';
import CounterButton from './Component/CounterButton';
import Card from './Component/Card';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<SampleButton />
		<CounterButton />
		<Card title="テストカード">
			<p>{"これはカードコンポーネントのテストです"}</p>
			<p>{"コンポーネントにPropsがあるときに、"}</p>
			<p>{"ちゃんと実行できるかテストしましょう。"}</p>
			<p>{"テストをするのは大事です。"}</p>
			<p>{"よーく考えよう♪"}</p>
		</Card>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
