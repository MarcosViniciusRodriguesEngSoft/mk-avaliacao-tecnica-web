import Image from 'next/image';
import logo from "@/assets/img/png/MK-solutions-logo.png";

const LogoMiniature = () => {
    return (
        <div className="flex justify-center items-center md:hidden">
            <Image
                src={logo}
                alt="MK Solutions Logo"
                width={200}
                height={200}
                className="rounded-lg"
                priority 
                unoptimized
            />
        </div>
    );
};

export default LogoMiniature;
