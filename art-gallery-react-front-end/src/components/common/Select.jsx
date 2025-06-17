const Select = ({ id, label, options }) => {
	[selectValue, setSelectValue] = useState('');

	const optionsJSX = () => {
		return options.map(option => {
			return <option value={option.value}>{option.label}</option>;
		});
	};

	const handleChange = event => {
		setSelectValue(event.target.value);
	};

	return (
		<div>
			<label for={id}>{label}</label>
			<select id={id} value={selectValue} onChange={handleChange}>
				{optionsJSX}
			</select>
		</div>
	);
};

export default Select;
