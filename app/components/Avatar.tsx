'use client';

import Image from "next/image";

const Avatar: React.FC<{}> = () => {
    return <Image src="/images/placeholder.jpg" alt="Avatar Image" width="30" height="30" className="rounded-full" />
}
 
export default Avatar;