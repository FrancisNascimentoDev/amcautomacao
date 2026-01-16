export default function Services() {
  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Informática',
      description:
        'Venda e manutenção de equipamentos de TI, software, consultoria e suporte técnico specializado.',
    },
    {
      id: 2,
      icon: '🔒',
      title: 'Segurança Eletrônica',
      description:
        'Sistemas de CFTV, alarmes, controle de acesso e monitoramento 24/7 para sua segurança.',
    },
    {
      id: 3,
      icon: '📡',
      title: 'Telecom',
      description:
        'Soluções de telefonia, internet de alta velocidade, redes e infraestrutura de comunicação.',
    },
    {
      id: 4,
      icon: '🛠️',
      title: 'Instalação e Manutenção',
      description:
        'Serviços de instalação profissional e manutenção preventiva em todos os segmentos.',
    },
    {
      id: 5,
      icon: '👨‍🏫',
      title: 'Consultoria',
      description:
        'Assessoria técnica e consultoria para otimização de infraestrutura e redução de custos.',
    },
    {
      id: 6,
      icon: '📞',
      title: 'Suporte Técnico',
      description:
        'Atendimento técnico ágil com SLA garantido e resolução rápida de problemas.',
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4">Nossos Serviços</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Oferecemos soluções completas e integradas para sua empresa
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
