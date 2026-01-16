'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          AMC Automação
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Início
            </Link>
          </li>
          <li>
            <Link href="#servicos" className="hover:text-blue-600 transition-colors">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="#sobre" className="hover:text-blue-600 transition-colors">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#contato" className="hover:text-blue-600 transition-colors">
              Contato
            </Link>
          </li>
        </ul>

        {/* Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-blue-50 border-t">
          <ul className="flex flex-col gap-4 container-custom py-4">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Início
              </Link>
            </li>
            <li>
              <Link href="#servicos" onClick={() => setIsOpen(false)}>
                Serviços
              </Link>
            </li>
            <li>
              <Link href="#sobre" onClick={() => setIsOpen(false)}>
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#contato" onClick={() => setIsOpen(false)}>
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
