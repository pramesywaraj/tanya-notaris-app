import "components/Button/button.module.css";

export default function Button({ onClick, children, styles, classNames, type, disabled }) {
    const classes = classNames ? classNames : "";

    return (
        <button
            className={`btn btn-normal ${classes}`}
            onClick={onClick}
            style={{ ...styles }}
            type={type || "button"}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
