import { forwardRef } from 'react';

export const Input = forwardRef((props, ref) => {
    return (
        <input type='text' className="bg-white px-3 py-2 my-2 w-full text-gray-800 rounded-md" {...props} ref={ref} />
    )
})
export default Input