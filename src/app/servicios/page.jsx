import Link from "next/link";
import Image from "next/image";
import { FaClock } from "react-icons/fa";
import { CgArrowLongRightR } from "react-icons/cg";
import { FaLocationArrow } from "react-icons/fa6";



export default async function Page() {
  return (
    <main>
      <section className="pb-28 z-50 bg-primary">
        <div className="bg-white rounded-b-[100px] pt-20 pb-28">
          <div className="max-w-[1200px] mx-auto flex flex-col space-y-5 justify-center  items-center">
            <h1 className="text-5xl text-secondary font-bold leading-16">
              Nuestro Servicios
            </h1>
            <p className="text-third text-xl font-semibold">
              Un modelo de entrega para cada mercancía
            </p>
            <Link
              href={"https://wa.link/c4rbmo"}
              target="_blank"
              className="bg-primary py-3 px-7 rounded font-bold text-lg text-white"
            >
              Contacta con ventas
            </Link>
            <div className="w-full h-[500px] overflow-hidden relative rounded-4xl block mt-5">
              <Image
                src="/envio-paquetes.webp"
                width={1200}
                height={720}
                quality={70}
                loading="eager"
                placeholder="blur"
                blurDataURL="/envio-paquetes.webp"
                alt="Services"
                className="shadow-lg shadow-neutral-700/10 object-center object-cover"
              />
            </div>
            <div className="flex flex-row w-full pt-10 gap-5">
              <div className="md:w-7/12 bg-primary/5 p-15 rounded-4xl space-y-7">
                <span className="text-primary bg-primary/10 py-2 px-3 font-bold rounded-4xl inline-block">
                  ¿Por qué elegir Kosko Taxi?
                </span>
                <h2 className="text-3xl text-secondary font-bold leading-10">
                  Si lo que necesitas es inmediatez
                </h2>
                <div className="space-y-2">
                  <p className="text-third text-lg font-medium">
                    Nuestro transporte atiende tus envíos express en
                    cuestión de minutos.
                  </p>
                  <p className="text-third text-lg font-medium">
                    Perfecto para tiendas en línea con un servicio de entregas
                    rápidas y para empresas con reposiciones urgentes de
                    material o envíos internos de paquetes y documentación.
                  </p>
                </div>
              </div>
              <div className="md:w-5/12 bg-primary/5 p-5 rounded-4xl space-y-7">
                <Image
                  src="/envio.webp"
                  width={900}
                  height={720}
                  quality={70}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="/hero-placeholder.png"
                  alt="Services"
                  className=" object-center object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="border rounded-4xl border-[#e4e4f7]  p-10 space-y-5">
                <div>
                  <FaClock  className="text-3xl text-primary" />
                </div>
                <h3 className="text-secondary font-bold text-xl">
                Vehículos con distintas capacidades de carga.

                </h3>
              </div>
              <div className="border rounded-4xl border-[#e4e4f7]  p-10 space-y-5">
                <div>
                  <CgArrowLongRightR  className="text-3xl text-primary" />
                </div>
                <h3 className="text-secondary font-bold text-xl">
                Un servicio extra ágil con trayectos de 1 o más paradas.
                </h3>
              </div>
              <div className="border rounded-4xl border-[#e4e4f7]  p-10 space-y-5">
                <div>
                  <FaLocationArrow  className="text-3xl text-primary" />
                </div>
                <h3 className="text-secondary font-bold text-xl">
                Seguimiento en tiempo real para el cliente y el destinatario final.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
