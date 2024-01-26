import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Image
            alt="Image"
            className="aspect-content overflow-hidden rounded-lg object-cover object-center"
            height={200}
            src="/placeholder.png"
            width={200}
          />
          <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
            Desarrollo Web
          </h2>
          <p className="mx-auto max-w-[200px] text-gray-500 md:text-lg dark:text-gray-400">
            Creamos sitios web atractivos y funcionales para su negocio.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 text-center">
          <Image
            alt="Image"
            className="aspect-content overflow-hidden rounded-lg object-cover object-center"
            height={200}
            src="/placeholder.png"
            width={200}
          />
          <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
            Diseño de UI/UX
          </h2>
          <p className="mx-auto max-w-[200px] text-gray-500 md:text-lg dark:text-gray-400">
            Diseñamos experiencias de usuario intuitivas y atractivas.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 text-center">
          <Image
            alt="Image"
            className="aspect-content overflow-hidden rounded-lg object-cover object-center"
            height={200}
            src="/placeholder.png"
            width={200}
          />
          <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
            Marketing Digital
          </h2>
          <p className="mx-auto max-w-[200px] text-gray-500 md:text-lg dark:text-gray-400">
            Ayudamos a su negocio a crecer con estrategias de marketing digital
            efectivas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
