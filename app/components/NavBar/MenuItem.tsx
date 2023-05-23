'use client';

interface IMenuItemProps {
    label: string;
    onClick: () => void;
}

const MenuItem:React.FC<IMenuItemProps> = ({label, onClick}) => {
    return (
        <div className="px-3 py-4 hover:bg-neutral-100 transition font-semibold" onClick={onClick}>
            {label}
        </div>
    );
}
 
export default MenuItem;