export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Sobre a AMC Automação</h2>
            <p className="text-gray-600 mb-4 text-lg">
              Com mais de 10 anos de experiência no mercado, somos referência em soluções
              tecnológicas integradas para empresas de todos os portes.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              Nosso compromisso é fornecer produtos de qualidade, serviços especializados e
              atendimento excepcional, sempre buscando a satisfação total do cliente.
            </p>
            <p className="text-gray-600 text-lg">
              Contamos com equipe técnica certificada, parcerias com grandes fabricantes e
              compromisso com inovação contínua.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <p>Clientes Atendidos</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10+</div>
                <p>Anos de Mercado</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p>Suporte Disponível</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p>Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
