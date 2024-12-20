'use client'

import logo from "@/assets/img/png/MK-solutions-logo.png";
import Image from "next/image";

function Login() {

    return (
        <div className="flex h-screen w-screen">
            <div className="flex justify-center items-center w-full">
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
        </div>
    );
};

export default Login;
