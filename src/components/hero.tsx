import Image from "next/image";
import Link from "next/link";
export const Hero = () => {
  return (
    <section className="max-w-[1200px] mx-auto md:pt-20 md:pb-28 md:px-0 px-6 md:py-0 py-10">
      <div className="grid md:grid-cols-2 items-center md:gap-x-20 gap-5">
        <div className="space-y-7">
          <h1 className="md:text-5xl text-3xl text-secondary font-bold md:leading-16 leading-10">Más seguridad,<br /> mayor calidad y una ciudad a tu alcance</h1>
          <p className="text-third text-xl font-semibold">Viaja por el Cusco con el mejor servicio de transporte</p>
          <Link href={"https://wa.link/c4rbmo"} target="_blank" className="py-4 px-8 bg-primary text-white rounded-md inline-block text-md">Book my Taxi in Cusco</Link>
        </div>
        <div>
          <Image
            src="/home-hero.webp"
            width={700}
            height={192}
            quality={70}
            loading="eager"
            alt="Hero Image"
            className="rounded-4xl"
          />
        </div>
      </div>
    </section>
  );
};
