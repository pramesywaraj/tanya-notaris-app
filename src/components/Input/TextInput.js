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
    error,
}) {
    const textInputClass = error ? `text-input error` : `text-input`;
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
                className={textInputClass}
            />
            {error && <p className="error-text">{error}</p>}
        </div>
    );
}
