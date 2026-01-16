'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className={`container-custom flex justify-between items-center px-6 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image 
            src="/img/Designer.png" 
            alt="AMC Automação" 
            width={221}
            height={67}
            className={`w-auto h-auto drop-shadow-lg transition-all duration-300 ${isScrolled ? 'scale-75' : 'scale-100'}`}
          />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-10 items-center ml-auto">
          <li>
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contato
            </Link>
          </li>
          <li>
            <Link href="#contato" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors font-semibold">
              Solicitar
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
