export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AMC Automação</h3>
            <p className="text-gray-400">
              Soluções completas em tecnologia, segurança eletrônica e telecom.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <p className="text-gray-400 mb-2">📞 (21) 96448-8719</p>
            <p className="text-gray-400">📧 amcautomacao@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {2024} AMC Automação. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
