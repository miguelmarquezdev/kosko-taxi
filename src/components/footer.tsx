import Link from "next/link";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="max-w-[1200px] mx-auto text-white md:pb-28 pb-0 md:px-0 px-6">
        <div className="bg-black/20 rounded-4xl md:py-20 py-10 px-10 flex flex-col justify-center items-center space-y-5">
          <span className="inline-block py-2 px-4 bg-black/30 rounded-3xl font-bold text-md">
            Kosko Taxi
          </span>
          <h2 className="md:text-4xl text-2xl text-center md:font-bold font-semibold md:leading-12 leading-9">
            Estamos disponibles en la ciudad del Cusco <br className="md:block hidden"/> con servicio
             por todas sus rutas.
          </h2>
          <Link
            href={"/about"}
            className="bg-black/40 py-3 md:px-7 px-5 rounded font-bold md:text-lg text-md text-center"
          >
            Conoce más sobre nosotros
          </Link>
        </div>
        <div className="grid md:grid-cols-2 justify-between gap-5 border-b border-white/40 md:pt-28 pt-10 pb-10">
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
