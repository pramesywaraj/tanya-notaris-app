export default function TextInput({
    containerStyle,
    labelStyle,
    inputStyle,
    name,
    label,
    required = false,
    placeholder,
    type,
    value,
    onChange,
}) {
    return (
        <div className="text-input-container" style={{ ...containerStyle }}>
            <label style={{ ...labelStyle }} htmlFor={name}>
                {label}
            </label>
            <input
                style={{ ...inputStyle }}
                id={name}
                name={name}
                type={type || "text"}
                required={required}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e)}
            />
        </div>
    );
}
