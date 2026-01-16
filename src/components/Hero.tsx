import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
      <div className="container-custom flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Soluções Tecnológicas Completas
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-blue-100">
          Fornecimento de materiais e serviços em Informática, Segurança Eletrônica e Telecom
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Link href="#contato" className="btn-primary">
            Solicitar Orçamento
          </Link>
          <Link href="#servicos" className="btn-secondary">
            Conhecer Serviços
          </Link>
        </div>
      </div>
    </section>
  )
}
