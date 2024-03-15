export function Label({ children, htmlFor }) {
    return (
        <label
            className="block text-md font-semibold text-teal-400"
            htmlFor={htmlFor}
        >
            {children}
        </label>
    );
}

export default Label;
