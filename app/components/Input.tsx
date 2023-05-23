import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

export interface IInputProps {
    id: string;
    label: string;
    type?: string;
    foramtPrice?: number;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const Input: React.FC<IInputProps> = ({
    id,
    label,
    type,
    foramtPrice,
    disabled,
    required,
    register,
    errors,
}) => {
    return (
        <div className="w-full relative">
            {foramtPrice && <BiDollar size={24} className="absolute text-neutral-700 top-5 left-2" />}
            <input 
            id={id}
            disabled={disabled}
            type={type} 
            className="
            peer
            w-full
            p-4
            pt-6
            font-light
            bg-white
            border-2
            rounded-md
            outline-none
            transition
            disabled:opacity-70
            disabled:cursor-not-allowed
            "
            />

        </div>
    );
}
 
export default Input;