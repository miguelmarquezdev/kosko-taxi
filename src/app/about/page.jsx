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
            <h1 className="text-5xl text-secondary font-bold leading-16 text-center">
              Nuestra misión nos apasiona. Y <br />
              también el viaje para llegar hasta allá.
            </h1>
            <div className="flex flex-row w-full pt-10 gap-5">
              <div className="md:w-5/12 relative overflow-hidden rounded-4xl">
                <Image
                  src="/travel.webp"
                  width={900}
                  height={720}
                  quality={70}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="/travel.webp"
                  alt="Services"
                  className=" object-center object-cover w-full h-full absolute"
                />
              </div>
              <div className="md:w-7/12 bg-primary/5 p-15 rounded-4xl space-y-7">
                <h2 className="text-3xl text-secondary font-bold leading-10">
                  Lo que nos mueve
                </h2>
                <div className="space-y-2">
                  <p className="text-third text-lg font-medium">
                    En Kosko Taxi nos guía nuestra ambición de transformar las
                    ciudades en mejores espacios para vivir a través de la
                    movilidad. Desarrollamos tecnología por y para las
                    necesidades de movilidad de las personas. Buscamos mejorar
                    la manera en la que se conectan ciudadanos, empresas y
                    conductores de forma segura y con calidad en los 6 países y
                    más de 40 ciudades en las que estamos presentes. Con este
                    objetivo, hemos creado un modelo de negocio sostenible,
                    guiado por principios básicos de ética que nos ayudan a ser
                    cada vez más comprometidos.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full pt-10 gap-5">
              <div className="md:w-7/12 bg-primary/5 p-15 rounded-4xl space-y-7">
                <h2 className="text-3xl text-secondary font-bold leading-10">
                  Lo que nos mueve
                </h2>
                <div className="space-y-2">
                  <p className="text-third text-lg font-medium">
                    Nacimos en Cusco Peru en 2020 y hemos sido pioneros en la
                    creación de una nueva movilidad en la ciudad. Estamos
                    presentes en Cusco y contamos con aproximadamente 2 unidades
                    de transporte en oficinas de Cusco. En estos 5 años de
                    trayectoria, hemos registrado más de 100 de usuarios, 5
                    socios conductores y taxistas y, actualmente, movilizamos a
                    más de 20 empresas. Estamos decididos a ser parte de la
                    solución de grandes desafíos para seguir desarrollando
                    nuestra contribución en los Objetivos de Desarrollo
                    Sostenible.
                  </p>
                  <Link
                    href={"https://www.tripadvisor.com.pe/Attraction_Review-g294314-d26458185-Reviews-KOSKOTAXI-Cusco_Cusco_Region.html"}
                    target="_blank"
                    className="bg-primary py-3 px-7 rounded font-bold text-lg text-white mt-5 inline-block"
                  >
                    Ver Comentarios en Tripadvisor
                  </Link>
                </div>
              </div>
              <div className="md:w-5/12 relative overflow-hidden rounded-4xl">
                <Image
                  src="/chicas.webp"
                  width={900}
                  height={720}
                  quality={70}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="/chicas.webp"
                  alt="Services"
                  className=" object-center object-cover w-full h-full absolute"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
