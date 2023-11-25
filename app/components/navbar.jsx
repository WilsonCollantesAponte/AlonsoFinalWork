// import Image from "next/image";
// import facuImage from "../../public/facu.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" bg-sky-600 py-1.5 flex flex-wrap justify-around items-center text-white">
      <div className=" w-1/2">
        <img
          className=" rounded-full"
          src="https://pbs.twimg.com/profile_images/1513880464037134340/lwuvAQT3_400x400.jpg"
          alt="logo"
          width={50}
        />
      </div>
      <Link href="/registrar">Registrate</Link>
      <Link href="/nosotros">Nosotros</Link>
      <Link href="/contacto">Contacto</Link>
      <Link href="/conoceFacultad">Conoce la Facultad</Link>
    </div>
  );
}
