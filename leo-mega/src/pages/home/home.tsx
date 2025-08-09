/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo } from 'react'
import LightLogo from '../../assets/28 - Logomarca Principal - Fundo Transparente - Colorido 2.png'
import DarkLogo from '../../assets/27 - Logomarca Principal - Fundo Transparente - Colorido 1.png'
import LeoPhoto from '../../assets/LeoPhoto.jpg'
import FotoLeo from '../../assets/FotoLeo.jpg'
import AntesLeo from '../../assets/AntesLeo.jpg'
import JosiAntes from '../../assets/JosiAntes.jpg'
import JosiDepois from '../../assets/JosiDepois.jpg'
import { FaWhatsapp, FaInstagram, FaEnvelope, FaArrowRight, FaArrowLeft, FaPlay } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Header from '../../components/Header'

function App() {
  // Anos de atuação calculados a partir de 2021 (formado em 2021)
  const anosAtuacao = useMemo(() => {
    const start = 2021
    const now = new Date().getFullYear()
    return Math.max(1, now - start)
  }, [])

  return (
    <body>
      {/* Header fixo com transparência */}
      <Header/>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <h1>
              Comece sua consultoria online hoje e dê o primeiro passo rumo à sua melhor versão
            </h1>

            <div className="pitch">
              <h3>🎯 Buscando Equilíbrio entre Treino, Trabalho e Lazer?</h3>
              <p>
                Você não precisa escolher entre saúde e qualidade de vida — pode ter os dois!
              </p>
              <p>
                Sou Personal Trainer especializado em ajudar pessoas comuns, com rotinas agitadas, a encaixar o treino de forma realista e eficiente no dia a dia.
              </p>
              <ul className="checks">
                <li>✅ Sem dietas malucas</li>
                <li>✅ Sem treinos impossíveis</li>
                <li>✅ Com foco na sua rotina, nos seus objetivos e no seu tempo</li>
              </ul>
              <p className="tagline">
                💪 Resultados reais, com flexibilidade para viver seus hobbies, trabalhar e ainda se cuidar.
              </p>
              <ul className="bullets">
                <li>📅 Planos personalizados</li>
                <li>📍 Acompanhamento online e presencial (dependendo da sua região)</li>
                <li>📲 Me chame no direct/WhatsApp para começarmos!</li>
              </ul>

              <div className="cta-row flex center">
                <button
                  className="button-wpp big"
                  onClick={() => {
                    window.location.href = 'https://wa.me/5511937788516'
                  }}
                >
                  <FaWhatsapp /> Falar no WhatsApp
                </button>
                <a className="ghost" href="#evolucao">
                  Ver resultados <FaArrowRight />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="card-bio">
              <div className="photo-name">Leonardo Mega</div>
              <img src={LeoPhoto} alt="Leonardo Mega" />
              <div className="photo-legend">
                <div className="photo-person-infos">
                  Personal Trainer há <strong>{anosAtuacao}</strong> {anosAtuacao === 1 ? 'ano' : 'anos'} — CREF: 174883-G/SP
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: 3 campos de evolução (Antes/Depois) */}
      <section id="evolucao" className="evolucao">
        <h2>Resultado dos membros da consultoria</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3400, disableOnInteraction: false }}
          loop
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 2 }
          }}
        >
          {[
            { nome: 'Leonardo Mega', imgDepois: LeoPhoto, imgAntes: AntesLeo },
            { nome: 'Josilene Almeida', imgDepois: JosiDepois, imgAntes: JosiAntes },
            { nome: 'Aluno 3', imgDepois: '', imgAntes: '' }
          ].map((a, i) => (
            
            <SwiperSlide key={i}>
              <div key={i} className="evo-card">
                <div className="evo-header">
                  <span className="dot" />
                  <h3>{a.nome}</h3>
                </div>
                <div className="evo-photos">
                  <figure>
                    <img src={a.imgAntes} alt="Antes" />
                    <figcaption>Antes</figcaption>
                  </figure>
                  <figure>
                    <img src={a.imgDepois} alt="Depois" />
                    <figcaption>Depois</figcaption>
                  </figure>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Seção Foco em Resultados (parallax) */}
      <section className="info" id="info">
        <h2>Foco em Resultados</h2>
        <p>
          Minha missão é te levar ao seu melhor resultado! Minha consultoria é feita sob medida para você que busca transformação física, mais qualidade de vida e autoestima elevada.
        </p>
        <ul>
          <li>✔️ Planos 100% personalizados</li>
          <li>✔️ Acompanhamento próximo e profissional</li>
          <li>✔️ Suporte via WhatsApp sempre que precisar</li>
          <li>✔️ Métodos que realmente geram resultados</li>
        </ul>
      </section>

      {/* BIO detalhada */}
      <section id="bio" className="bio">
        <div className="bio-wrap">
          <div className="bio-photo">
            <img src={LeoPhoto} alt="Leonardo Mega" />
          </div>
          <div className="bio-text">
            <h2>Sobre o Personal</h2>
            <p>
              Meu nome é Leonardo, tenho 26 anos e sou formado em Educação Física pela Universidade UNICID desde 2021. Atuo como personal trainer desde o início da minha formação e, desde 2022, também integro a equipe da academia Smart Fit.
            </p>
            <p>
              Sou especialista em musculação, biomecânica aplicada ao exercício e hormonização, com foco em treinos personalizados, eficientes e sustentáveis. Acredito que o treino deve ser parte de uma rotina equilibrada — respeitando o tempo, os objetivos e a realidade de cada aluno.
            </p>
            <p>
              Meu compromisso é ajudar você a evoluir com segurança, técnica e constância, sem abrir mão do seu estilo de vida. Treinar pode (e deve) ser algo que se encaixa na sua vida — e não o contrário.
            </p>
            <p>
              Vamos juntos construir resultados duradouros, com qualidade e propósito.
            </p>
            <div className="cref">CREF: <strong>174883-G/SP</strong></div>
          </div>
        </div>
      </section>

      <div className='divider-depoimentos'></div>

      {/* Depoimentos em loop infinito */}
      <section id="depoimentos" className="depoimentos">
        <h2>Depoimentos dos alunos</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3400, disableOnInteraction: false }}
          loop
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {[
            {
              texto:
                'Só um feedback mesmo sobre os treinos de superiores... tá vindooooo 🙏🥺🥺 Nem acredito. Essa mudança de treino foi top demais. Obrigada leo'
            },
            {
              texto:
                'Estou progredindo sim, inclusive tenho até que mudar lá de novo já. Estou notando diferença no meu quadríceps que está aparecendo mais e em glúteo, e também em ombro. Tô curtindo bastante.'
            },
            {
              texto:
                'Plano feito de acordo com as necessidades do atleta, atendem desde o nível mais iniciante até o mais avançado! Recomendo muito'
            },
            {
              texto:
                'Esse sábado eu fiz o treino de peito, e foi excelente também, consegui sentir os músculos trabalhando muito bem, e o treino foi rápido também. Hoje vou fazer o de costas.'
            },
            {
              texto:
                'Consegui organizar meus treinos mesmo trabalhando e viajando. Perdi 7kg e ganhei disposição!'
            },
            {
              texto:
                'Treinos objetivos e sem enrolação. Evoluí força e postura sem viver na academia.'
            }
          ].map((d, i) => (
            <SwiperSlide key={i}>
              <div className="dep-card">
                <blockquote>“{d.texto}”</blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Contato */}
      <section id="contato" className="contato">
        <h2>Entre em Contato</h2>
        <p>Vamos juntos transformar sua vida!</p>
        <div className="contato-infos">
          <a href="https://wa.me/5511937788516" target="_blank">
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="https://www.instagram.com/leo_.mega" target="_blank">
            <FaInstagram /> Instagram
          </a>
        </div>
      </section>
    </body>
  )
}

export default App
