import { MdOutlineSecurity } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";

export const SemiFooter = () => {
  return (
    <section className="md:pb-28 pb-10  z-50 bg-primary">
      <div className="bg-white md:rounded-b-[100px] rounded-b-4xl md:py-28 py-10">
        <div className="max-w-[1200px] mx-auto space-y-10 md:px-0 px-6">
          <div className="grid md:grid-cols-2  md:gap-20 gap-5">
            <div>
              <h2 className="text-4xl text-secondary font-bold leading-14 hidden md:block">
                Tu seguridad, <br /> nuestro compromiso
              </h2>
              <h2 className="text-3xl text-secondary font-bold md:leading-14 leading-10">
                Tu seguridad, nuestro compromiso
              </h2>
            </div>
            <div>
              <p className="text-third font-semibold text-xl">
                Cada detalle que forma parte de nuestro servicio se ha creado
                teniendo en cuenta tu seguridad
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
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
