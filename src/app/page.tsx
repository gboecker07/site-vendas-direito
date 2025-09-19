'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Play, Check, Star, Users, BookOpen, FileText, Video, MessageCircle, Award, Download, Shield, Clock, ChevronLeft, ChevronRight } from 'lucide-react'

export default function DireitoTrabalho10X() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const testimonials = [
    {
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/f362e584-c0ee-4fbb-a07b-daa4f98dc7e6.jpg",
      alt: "Depoimento de cliente 1"
    },
    {
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e8a5b2ad-806d-4b9f-854f-7ab0cc81c53e.jpg",
      alt: "Depoimento de cliente 2"
    },
    {
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/c7737ccd-2af4-46d5-b1b8-a651d3f0816b.jpg",
      alt: "Depoimento de cliente 3"
    },
    {
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/5403c46d-c1b5-43c4-aa19-f32c54047fd7.png",
      alt: "Depoimento de cliente 4"
    }
  ]

  const faqData = [
    {
      question: "Para quem é esse produto?",
      answer: "O material é indicado para advogados, profissionais de departamento pessoal e recursos humanos, contabilidade, empresários, trabalhadores e muito mais.\n\nA linguagem é simples e direta."
    },
    {
      question: "Posso fazer o download de todo o material que está em PDF?",
      answer: "Sim! Todo o conteúdo pode ser baixado para você acessar do seu celular, tablet ou computador."
    },
    {
      question: "Por quanto tempo terei acesso ao produto e às atualizações? É possível ter acesso vitalício?",
      answer: "Você terá acesso ao produto e a TODAS as atualizações pelo período de 1 ano após a compra.\n\nContudo, na página de pagamento, é possível adicionar ao carrinho a opção de ter acesso vitalício ao material, garantindo acesso a todas as atualizações PARA SEMPRE."
    },
    {
      question: "Como funciona o 'Prazo de Garantia'?",
      answer: "O Prazo de Garantia é o período que você tem para pedir o reembolso integral do valor pago pela sua compra, caso o produto não seja satisfatório."
    },
    {
      question: "Como acessar o produto?",
      answer: "Você receberá o acesso por email. O conteúdo será acessado ou baixado através de um computador, celular, tablet ou outro dispositivo digital. Você também pode acessar o produto comprado nesta página:\n\n01 - Faça login na Área de membros do Direito do Trabalho 10X\n\n02 - Pronto! Você terá acesso a todos os módulos imediatamente."
    },
    {
      question: "Como faço para comprar?",
      answer: "Para comprar este curso, clique no botão \"Comprar agora\". Você terá acesso imediato para ler em qualquer dispositivo."
    }
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Auto-advance testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const handlePurchaseClick = () => {
    window.open('https://betteryou.mycartpanda.com/checkout/197478756:1', '_blank')
  }

  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "50 Tabelas Trabalhistas",
      description: "Incluindo Pagamento de Prêmio, Grupo Econômico, Multas Trabalhistas e muito mais"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "100 Infográficos",
      description: "Atualizados e autorizados para uso nas suas redes sociais"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Guia Completo",
      description: "13 capítulos com mais de 300 páginas de conteúdo essencial"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "50+ Vídeos Exclusivos",
      description: "Com participação do Juiz Dr.Marcos Ferreira, autor da Reforma Trabalhista"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidade WhatsApp",
      description: "Mais de 4000 membros com dicas e atualizações diárias"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Giro Trabalhista",
      description: "Notícias trabalhistas em primeira mão, semanalmente"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "GESTÃO DE PONTO E BANCO DE HORAS",
      description: "Desvende a Gestão de Ponto e Banco de Horas, de acordo com a CLT e Portaria 671/2021."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "CADERNO COM 100 QUESTÕES OBJETIVAS",
      description: "100 questões de múltipla escolha inéditas sobre Direito do Trabalho que preparamos para você testar o seu conhecimento."
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "PACK DE MODELOS TRABALHISTAS",
      description: "Pack de Modelos Trabalhistas com 19 modelos atualizados e revisados por especialistas."
    }
  ]

  const chapters = [
    "Contratação e registro",
    "Contrato intermitente", 
    "Salário, adicionais e benefícios",
    "Jornada de trabalho e horas extras",
    "Férias",
    "Décimo terceiro salário",
    "Licenças e afastamentos",
    "Gravidez no emprego",
    "Acidente de trabalho",
    "Fim do contrato de trabalho",
    "Rescisão Indireta",
    "FGTS",
    "Na justiça do trabalho"
  ]

  const extraTables = [
    "Requisitos do vínculo de emprego",
    "Carteira de Trabalho",
    "Principais prazos trabalhistas",
    "Adicionais trabalhistas",
    "Regras do intervalo e banco de horas",
    "Tudo sobre Férias (CLT)",
    "Nuances das Férias Coletivas",
    "Estabilidades trabalhistas",
    "Regras do seguro-desemprego",
    "Ausências remuneradas",
    "Sobreaviso x prontidão",
    "Verbas rescisórias em cada tipo de demissão",
    "Lei do Trabalho Doméstico"
  ]

  const extraEbooks = [
    {
      title: "Guia Contrato de Experiência",
      description: "Ferramenta essencial que aborda todos os pontos do contrato de experiência."
    },
    {
      title: "Guia Convenções e Acordos Coletivos",
      description: "Tire as suas principais dúvidas com relação a convenções e acordos coletivos."
    },
    {
      title: "Guia Tira Dúvidas sobre PIS",
      description: "Guia em formato de perguntas e repostas para você nunca mais se confundir sobre PIS."
    }
  ]

  const apontamentos = [
    {
      title: "Apontamento - Tipos de Contrato de Trabalho",
      description: "Um resumo sobre os principais contratos de trabalho existentes no Brasil."
    },
    {
      title: "Apontamento - Extinção do Contrato de Trabalho",
      description: "Para quem deseja se aprofundar: um apontamento sobre extinção do contrato de trabalho."
    },
    {
      title: "Apontamento - Terceirização",
      description: "Para quem deseja se aprofundar: um apontamento sobre terceirização ATUALIZADO."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-black/80"></div>
        
        <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
              NÃO É SÓ UM GUIA.
            </span>
            <br />
            <span className="text-red-500">
              É UM ECOSSISTEMA COMPLETO
            </span>
            <br />
            <span className="text-white">
              EM DIREITO DO TRABALHO
            </span>
          </h1>
          
          {/* Imagem adicionada acima do texto especificado */}
          <div className="mb-8 flex justify-center">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/9be32473-9bf3-493a-bbf2-122f8a59ada5.webp" 
              alt="Capa Campeã Hotmart DT10X com Sombra" 
              className="max-w-md w-full h-auto rounded-2xl shadow-2xl shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105"
            />
          </div>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            As leis trabalhistas mudam toda hora. O <span className="text-red-400 font-semibold">'Direito do Trabalho 10X'</span> é um material atualizado e confiável.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={handlePurchaseClick}
              className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-red-500/25 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                QUERO RECEBER AGORA
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-red-400" />
          </div>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                O QUE EU VOU RECEBER?
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Chapters Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
                GUIA DIREITO DO TRABALHO
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              13 capítulos com mais de 300 páginas. Vá direto ao ponto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chapters.map((chapter, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 group-hover:bg-red-500 transition-colors duration-300">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-white group-hover:text-red-400 transition-colors duration-300">
                  {chapter}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                MAIS DE 50 RESPOSTAS EXCLUSIVAS EM VÍDEO
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12">
              Com participação especial do Juiz do Trabalho, Dr.Marcos Ferreira: um dos autores da Reforma Trabalhista
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
                {/* Foto do Prof. Ricardo Peixoto substituída pela nova imagem */}
                <div className="mb-6 flex justify-center">
                  <img 
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/baeccd59-d37e-4c3c-af2c-eb20ff898cfa.jpg" 
                    alt="Prof. Ricardo Peixoto" 
                    className="w-32 h-32 rounded-full object-cover shadow-2xl shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold text-red-400 mb-4 text-center">Prof. Ricardo Peixoto</h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  Professor, advogado, palestrante, mestre em Direito e especialista em Direito do Trabalho há mais de 12 anos.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
                {/* Foto do Dr. Marcos Ferreira adicionada */}
                <div className="mb-6 flex justify-center">
                  <img 
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/8ce01b38-142e-4758-94fb-60089717d13f.webp" 
                    alt="Dr. Marcos Ferreira" 
                    className="w-32 h-32 rounded-full object-cover shadow-2xl shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold text-red-400 mb-4 text-center">Dr.Marcos Ferreira</h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  Juiz do Trabalho e um dos autores da Reforma Trabalhista. Autoridade máxima no assunto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Tables Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
                PENSA QUE ACABOU? AINDA TEM MAIS!!
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Tabelas extras (além das 50 já inclusas):
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraTables.map((table, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-white group-hover:text-red-400 transition-colors duration-300">
                    {table}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra eBooks Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                GUIAS EXTRAS:
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extraEbooks.map((ebook, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 group"
              >
                <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                  {ebook.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {ebook.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apontamentos Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                APONTAMENTOS:
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {apontamentos.map((apontamento, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 group"
              >
                <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                  {apontamento.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {apontamento.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-red-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              TENHA ACESSO AO ECOSSISTEMA DO DIREITO DO TRABALHO
            </span>
          </h2>
          
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 sm:p-12 rounded-3xl border border-gray-800 mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-2xl text-gray-400 line-through">DE R$ 297,00</span>
                <span className="px-4 py-2 bg-red-600 text-white font-bold rounded-full">77% OFF</span>
              </div>
              
              <div className="text-6xl sm:text-7xl font-bold text-red-500 mb-4">
                12x de R$ 6,93
              </div>
              
              <div className="text-2xl text-gray-300 mb-8">
                ou R$ 67 à vista
              </div>
              
              <button 
                onClick={handlePurchaseClick}
                className="group relative px-12 py-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-red-500/25 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-3">
                  <Shield className="w-6 h-6" />
                  GARANTIR O DESCONTO
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
              
              <div className="flex items-center justify-center gap-2 mt-6 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Pagamento único • Acesso imediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Agora com Carrossel Automático */}
      <section className="py-20 bg-gradient-to-b from-red-900/20 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                POSSO CONFIAR QUE É BOM MESMO?
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Confira alguns depoimentos reais:
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Container do carrossel */}
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.alt} 
                        className="w-full h-auto rounded-lg shadow-lg hover:shadow-red-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicadores de posição */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-red-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
                PARA QUEM É O DIREITO DO TRABALHO 10X?
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Advogados que atuam ou querem atuar na área trabalhista",
              "Concurseiros, preparação para exame da OAB, estudantes de Direito",
              "Departamento Pessoal e Recursos Humanos",
              "Empregadores, empregados, contadores, escritórios..."
            ].map((audience, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <p className="text-white group-hover:text-red-400 transition-colors duration-300">
                  {audience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Author Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                SOBRE O AUTOR
              </span>
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 sm:p-12 rounded-3xl border border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Olá! Me chamo <span className="text-red-400">Ricardo Peixoto</span>.
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Sou professor, advogado, palestrante, mestre em Direito e especialista em Direito do Trabalho há mais de 12 anos.
                  </p>
                  <p>
                    No ano de 2012, fundei o Portal Direito do Empregado e, hoje, estamos chegando a quase 3 milhões de seguidores nas redes, conversando sobre Direito do Trabalho todos os dias.
                  </p>
                  <p>
                    O Direito do Trabalho 10X foi cuidadosamente desenvolvido para ser um material 100% confiável e sempre atualizado.
                  </p>
                  <p className="text-white font-semibold">
                    Então, se você quer aprender rápido, relembrar os principais conceitos trabalhistas ou mesmo apenas estar sempre atualizado(a), esse material vai te ajudar DEMAIS!
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <img 
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/222671c7-a507-4bed-b812-93ea718629b5.jpg" 
                    alt="Ricardo Peixoto" 
                    className="w-64 h-64 rounded-full object-cover shadow-2xl shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-red-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              APROVEITE O CONTEÚDO EM QUALQUER DISPOSITIVO
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-8 mb-12">
            <Download className="w-12 h-12 text-red-500" />
            <div className="text-6xl font-bold text-red-500">12x de R$ 6,93</div>
            <Shield className="w-12 h-12 text-red-500" />
          </div>
          
          <div className="text-2xl text-gray-300 mb-8">
            ou R$ 67 à vista
          </div>
          
          <button 
            onClick={handlePurchaseClick}
            className="group relative px-16 py-8 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-2xl rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-red-500/25 w-full sm:w-auto mb-8"
          >
            <span className="flex items-center justify-center gap-3">
              COMPRAR AGORA
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
          
          <div className="text-gray-400 mb-8">
            PAGAMENTO 100% SEGURO COM ACESSO IMEDIATO
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            Fundado em agosto de 2012, Direito do Empregado é o principal canal sobre legislação trabalhista no Brasil. Com a missão de levar conhecimento de qualidade de forma acessível, está presente em todas as redes sociais, contando com quase 3 milhões de seguidores.
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                PERGUNTAS FREQUENTES
              </span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 cursor-pointer group"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white group-hover:text-red-400 transition-colors duration-300 font-semibold">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-red-500 transition-transform duration-300 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`} />
                </div>
                
                {openFAQ === index && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button 
            onClick={handlePurchaseClick}
            className="group relative px-12 py-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-red-500/25 mb-8"
          >
            <span className="flex items-center justify-center gap-3">
              COMPRAR AGORA
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
          
          <div className="text-gray-500 text-sm">
            Copyright © 2025 - Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}