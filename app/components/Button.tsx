"use client";

import { IconType } from "react-icons/lib";

interface IButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outlined?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button: React.FC<IButtonProps> = ({
    label,
    onClick,
    disabled,
    outlined,
    small,
    icon: Icon,
}) => {
    return (
    <button
    onClick={onClick}
    disabled={disabled} 
    className={`
    relative
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-lg
    hover:opacity-80
    transition
    w-full
    ${outlined? 'bg-white' : 'bg-rose-500'}
    ${outlined? 'border-black' : 'border-rose-500'}
    ${outlined? 'text-black' : 'text-white'}
    ${small ? 'py-1' : 'py-3'}
    ${small ? 'text-sm' : 'text-md'}
    ${small ? 'text-semibold' : 'text-bold'}
    ${small ? 'border-[1px]' : 'border-2'}
    `}
    >
        {label}
        {Icon && <Icon size={small ? 18 : 24} className="absolute top-4 left-3" />}
    </button>
    );
}
 
export default Button;