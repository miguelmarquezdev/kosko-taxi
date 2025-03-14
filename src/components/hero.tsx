import Image from "next/image";
export const Hero = () => {
  return (
    <section className="max-w-[1200px] mx-auto pt-20 pb-28">
      <div className="grid grid-cols-2 items-center gap-x-20">
        <div className="space-y-7">
          <h1 className="text-5xl text-secondary font-bold leading-16">Más seguridad,<br /> mayor calidad y una ciudad a tu alcance</h1>
          <p className="text-third text-xl font-semibold">Viaja por el Cusco con el mejor servicio de transporte</p>
          <a href="" className="py-4 px-8 bg-primary text-white rounded-md inline-block">Book my Taxi in Cusco</a>
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
