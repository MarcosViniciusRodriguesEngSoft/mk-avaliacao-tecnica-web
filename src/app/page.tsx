import logo from "@/assets/img/png/MK-solutions-logo.png";
import Button from "@/components/Button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full gap-4">
        <div className="flex md:hidden">
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={200}
            className="rounded-lg"
            unoptimized
          />
        </div>
        <Button className="primary w-[300px] h-[50px]" href="/login">Acessar a plataforma</Button>
      </div>

      <div className="md:flex justify-center items-center w-full h-full bg-[#d1d5db] hidden p-8">
        <Image
          src={logo}
          alt="logo"
          width={500}
          height={500}
          className="rounded-lg"
          unoptimized
        />
      </div>
    </div>
  );
}
