'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Aqui você pode integrar com um serviço de email (como Sendgrid, Mailgun, ou similar)
    console.log('Form submitted:', formData)
    
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4">Entre em Contato</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Deixe seus dados e entraremos em contato em breve
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Informações</h3>
            
            <div className="mb-6">
              <p className="font-bold text-blue-600 mb-2">Telefone</p>
              
              <p className="text-gray-600">(21) 96448-8719 (WhatsApp)</p>
            </div>

            <div className="mb-6">
              <p className="font-bold text-blue-600 mb-2">Email</p>
              <p className="text-gray-600">amcautomacao@gmail.com</p>
            </div>

            <div className="mb-6">
              <p className="font-bold text-blue-600 mb-2">Localização</p>
              <p className="text-gray-600">
                Honorio Gurgel - RJ<br />
                Brasil
              </p>
            </div>

            <div>
              <p className="font-bold text-blue-600 mb-2">Horário de Funcionamento</p>
              <p className="text-gray-600">
                Segunda a Sexta: 8h às 17h<br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div>
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">Nome *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                  placeholder="(21) 9999-9999"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Assunto *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="informatica">Informática</option>
                  <option value="seguranca">Segurança Eletrônica</option>
                  <option value="telecom">Telecom</option>
                  <option value="consultoria">Consultoria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">Mensagem *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                  placeholder="Descreva sua necessidade..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
