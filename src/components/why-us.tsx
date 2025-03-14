import { MdOutlineSecurity } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdBubbleChart } from "react-icons/md";
import Image from "next/image";

export const WhyUs = () => {
  return (
    <section className="py-28 bg-fourth">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 gap-20">
          <div className="bg-[#e5f0ff] rounded-4xl flex justify-center pb-20">
            <Image
              src="/call.webp"
              width={400}
              height={192}
              quality={70}
              loading="eager"
              alt="Hero Image"
              className="rounded-b-3xl shadow-lg shadow-neutral-700/10"
            />
          </div>
          <div className="space-y-14">
            <h2 className="text-primary bg-primary/10 py-2 px-3 font-bold rounded-4xl inline-block">
              ¿Por qué elegir Kosko Taxi?
            </h2>
            <div className="flex gap-10">
              <div className="3/12">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-2xl">
                  <MdOutlineSecurity className="text-3xl text-primary " />
                </div>
              </div>
              <div className="9/12 space-y-3">
                <h3 className="text-secondary font-bold text-xl">
                  Tu seguridad es nuestra prioridad
                </h3>
                <p className="text-third font-semibold">
                  Con viajes geolocalizados, conductores identificados y un
                  botón de seguridad disponible para cuidarte durante el viaje.
                </p>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="3/12">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-2xl">
                  <IoShieldCheckmark className="text-3xl text-primary " />
                </div>
              </div>
              <div className="9/12 space-y-3">
                <h3 className="text-secondary font-bold text-xl">
                  El estándar de calidad más alto
                </h3>
                <p className="text-third font-semibold">
                  Conductores profesionales, vehículos modernos y posibilidad de
                  elegir tus preferencias de viaje de la forma más fácil. Por
                  fin viajarás como te mereces.
                </p>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="3/12">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-2xl">
                  <MdBubbleChart className="text-3xl text-primary" />
                </div>
              </div>
              <div className="9/12 space-y-3">
                <h3 className="text-secondary font-bold text-xl">
                  Claridad y transparencia en los precios
                </h3>
                <p className="text-third font-semibold">
                  Siempre te mostramos el precio antes de aceptar el viaje para
                  que tú decidas cómo moverte por la ciudad. Sin sorpresas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
