import Link from "next/link";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="max-w-[1200px] mx-auto text-white pb-28 ">
        <div className="bg-black/20 rounded-4xl py-20 px-10 flex flex-col justify-center items-center space-y-5">
          <span className="inline-block py-2 px-4 bg-black/30 rounded-3xl font-bold text-md">
            Kosko Taxi
          </span>
          <h2 className="text-4xl text-center font-bold leading-12">
            Estamos disponibles en la ciudad del Cusco <br /> con servicio
             por todas sus rutas.
          </h2>
          <Link
            href={"/about-us"}
            className="bg-black/40 py-3 px-7 rounded font-bold text-lg"
          >
            Conoce más sobre nosotros
          </Link>
        </div>
        <div className="grid grid-cols-2 justify-between border-b border-white/40 pt-28 pb-10">
          <div className="font-bold text-2xl text-white">
            <Link href={"/"}>KOSKO TAXI</Link>
          </div>
          <div className="flex gap-5 justify-end">
            <Image
              src="/appstore.svg"
              width={150}
              height={192}
              quality={70}
              loading="eager"
              alt="Hero Image"
              className="shadow-lg shadow-neutral-700/10"
            />
            <Image
              src="/playstore.svg"
              width={150}
              height={192}
              quality={70}
              loading="eager"
              alt="Hero Image"
              className="shadow-lg shadow-neutral-700/10"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
