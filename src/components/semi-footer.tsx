import { MdOutlineSecurity } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";

export const SemiFooter = () => {
  return (
    <section className="pb-28 z-50 bg-primary">
      <div className="bg-white rounded-b-[100px] py-28">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl text-secondary font-bold leading-14">
                Tu seguridad, <br /> nuestro compromiso
              </h2>
            </div>
            <div>
              <p className="text-third font-semibold text-xl">
                Cada detalle que forma parte de nuestro servicio se ha creado
                teniendo en cuenta tu seguridad
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="border rounded-4xl border-[#e4e4f7]  p-10 space-y-5">
              <div>
                {" "}
                <MdOutlineSecurity className="text-5xl text-blue-600 " />
              </div>
              <h3 className="text-secondary font-bold text-xl">
                Botón de seguridad
              </h3>
              <p className="text-third font-semibold leading-6">
                Añade una persona de confianza para que reciba notificaciones
                cada vez que viajes, comparte tu ubicación en tiempo real o
                contacta con emergencias.
              </p>
            </div>
            <div className="border rounded-4xl border-[#e4e4f7]  p-10 space-y-5">
              <div>
                <FaLocationDot className="text-5xl text-[#f769b5]" />
              </div>
              <h3 className="text-secondary font-bold text-xl">
                Viajes geolocalizados
              </h3>
              <p className="text-third font-semibold leading-6">
                Cada viaje está geolocalizado y puedes compartir tu viaje con
                tus amigos o familiares para que sepan dónde estás.
              </p>
            </div>
            <div className="border rounded-4xl border-[#e4e4f7]  p-10 space-y-5">
              <div>
                <AiFillMessage className="text-5xl text-[#f3af13]" />
              </div>
              <h3 className="text-secondary font-bold text-xl">
                Estamos aquí para ti
              </h3>
              <p className="text-third font-semibold leading-6">
                Nuestro equipo de atención al cliente está disponible para
                ayudarte y responder a tus dudas y preguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
