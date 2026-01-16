import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-96 md:h-[500px] bg-cover bg-center bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-start">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container-custom flex flex-col justify-center relative z-10 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Soluções Tecnológicas Completas
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-100">
          Conectando pessoas, protegendo ambientes, impulsionando resultados.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Link href="#contato" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition-colors inline-block text-center">
            Solicitar Orçamento
          </Link>
          <Link href="#servicos" className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded font-semibold transition-colors inline-block text-center">
            Conhecer Serviços
          </Link>
        </div>
      </div>
    </section>
  )
}
