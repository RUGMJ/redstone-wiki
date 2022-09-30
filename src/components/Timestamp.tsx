import { useState } from 'react';

export default function Timestamp() {
	const [date, setDate] = useState(Math.floor(Date.now() / 1000));

	const copy = () => {
		navigator.clipboard.writeText(date.toString());
		console.log('Copying to clipboard');
	};

	setInterval(() => {
		setDate(Math.floor(Date.now() / 1000));
	}, 1000);
	return (
		<span id='timestamp' onClick={copy}>
			{date}
		</span>
	);
}
