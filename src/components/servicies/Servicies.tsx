import React from 'react'

const Servicies = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-16 px-8 lg:px-24">
    <div className="border-b border-white pb-8 mb-12">
      <h2 className="text-2xl font-bold uppercase tracking-widest mb-2">Somos el presente</h2>
      <h3 className="text-xl font-semibold">Descubre nuestros servicios</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h4 className="text-lg font-bold mb-2">Webside</h4>
        <p>Diseño, implementación mantenimiento y creación de contenido.</p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-2">Strategy</h4>
        <p>Estrategias de marketing, contenido, pauta.</p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-2">Social Media</h4>
        <p>Tendencia en cinteinido, crecimiento, pauta, diseño, mantenimiento.</p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-2">Pauta</h4>
        <p>Estrategia de publicidad pagada como herramienta de crecimiento y visibilidad en social media y website</p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-2">SEO</h4>
        <p>Implementación de estrategias para crecimiento orgánico de marcas y empresas</p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-2">Diseño</h4>
        <p>Creación de contenido digital en diseño.</p>
      </div>
      <div className="md:col-span-2">
        <h4 className="text-lg font-bold mb-2">Fotografía y Videografía</h4>
        <p>Planeación y toma de contenido fotográfico y audiovisual.</p>
      </div>
    </div>
  </section>
  )
}

export default Servicies