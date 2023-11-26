import Image from "next/image";
// import facuImage from "../../public/facu.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" bg-sky-600 py-1.5 flex flex-wrap justify-around items-center text-white">
      <div className=" w-1/2">
        <Link href="/">
          <Image src="/facu.png" width={50} height={50} />
        </Link>
      </div>
      <Link href="/registrar">Registrate</Link>
      <Link href="/nosotros">Nosotros</Link>
      <Link href="/contacto">Contacto</Link>
      <Link href="/conoceFacultad">Conoce la Facultad</Link>
    </div>
  );
}
