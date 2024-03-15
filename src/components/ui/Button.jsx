

export function Button({ children }) {
    return (
        <>
            <button
                className="relative inline-flex items-center gap-x-1.5 rounded-md 
            bg-teal-400 px-3 py-1.5 text-sm font-semibold text-white shadow-sm
            hover:bg-teal-500 focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-2 focus-visible:outline-teal-500 disabled:opacity-50
            disabled:cursor-not-allowed"
            >
                {children}

            </button>

        </>
    );
}

export default Button;
