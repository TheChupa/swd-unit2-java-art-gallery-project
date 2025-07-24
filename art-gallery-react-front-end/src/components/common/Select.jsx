const Select = ({ id, label, children, handleChange }) => {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<select id={id} name={id} onChange={handleChange}>
				{children}
			</select>
		</div>
	);
};

export default Select;
