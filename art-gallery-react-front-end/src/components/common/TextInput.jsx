import { useState } from 'react';

const TextInput = ({ id, label, errorMsg }) => {
	[inputValue, setInputValue] = useState('');

	const handleInput = event => {
		setInputValue(event.target.value);
	};

	return (
		<div>
			<label for={id}>{label}</label>
			<input id={id} type="text" value={inputValue} onInput={handleInput} />
            {errorMsg && <p class="error">{errorMsg}</p>}
		</div>
	);
};

export default TextInput;
