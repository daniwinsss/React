import React ,{useId} from "react";
function Select({
    options,
    label,
    labelClassName = '', // Added customizable className for label
    className = '',
    ...props
},ref){
    const id = useId();
    return (
        <div className="w-full">
            {label && (
                <label 
                    htmlFor={id} 
                    className={`block mb-2 text-sm font-medium text-gray-700 ${labelClassName}`} // Added default styling for label
                >
                    {label} {/* Added text content for label */}
                </label>
            )}
            <select {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
export default React.forwardRef(Select);