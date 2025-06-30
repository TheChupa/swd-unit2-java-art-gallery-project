const PasswordInput = ({ id, label, errorMsg }) => {
	[inputValue, setInputValue] = useState('');
	[showInput, setShowInput] = useState(false);

	const handleInput = event => {
		setInputValue(event.target.value);
	};

	const toggleShowPassword = () => {
		setShowInput(!showInput);
	};

	// TODO: Get icons for show and hide
	return (
		<div className="form-item">
			<label for={id}>{label}</label>
			<input
				id={id}
				type={showInput ? 'text' : 'password'}
				value={inputValue}
				onInput={handleInput}
			/>
			<button onClick={toggleShowPassword}>Show</button>
			{errorMsg && <p className="error">{errorMsg}</p>}
		</div>
	);
};

export default PasswordInput;
