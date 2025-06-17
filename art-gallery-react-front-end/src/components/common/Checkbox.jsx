const Checkbox = ({ id, label, isChecked }) => {
    
        return (
            <div class="checkbox-with-label">
                <input id={id} class="checkbox" type="checkbox" checked={isChecked} />
                <label for={id}>{label}</label>
            </div>
        );
}