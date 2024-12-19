import Image from 'next/image';
import logo from "@/assets/img/png/MK-solutions-logo.png";

const LogoScreen = () => {
    return (
        <div className="md:flex justify-center items-center w-full h-full bg-[#205266] hidden p-8">
            <Image
                src={logo}
                alt="logo"
                width={500}
                height={500}
                className="rounded-lg"
                priority 
                unoptimized
            />
        </div>
    );
};

export default LogoScreen;
