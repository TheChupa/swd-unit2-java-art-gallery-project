const Checkbox = ({ id, label, isChecked }) => {
	return (
		<div className="checkbox-with-label">
			<input id={id} className="checkbox" type="checkbox" checked={isChecked} />
			<label for={id}>{label}</label>
		</div>
	);
};
