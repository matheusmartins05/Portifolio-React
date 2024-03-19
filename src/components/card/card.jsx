import './index.css'
import fotoCard from "./fotoCard.jpg";

export function Card() {
    return (
        <section >
            <div class="card">
                <div class="linhas"></div>
                <div class="imgBx">
                    <img src={fotoCard} alt="" />
                </div>
                <div class="conteudo">
                    <div class="detalhes">
                        <h2>Matheus Martins<br /><span>26 anos</span></h2>
                        <div class="data">
                            <p className='sm:text-[1.5rem] sm:leading-8 md:text-[1rem] md:leading-[1.6rem] lg:text-[1.2rem] lg:leading-7 '>
                                Sou de São Paulo - SP, cursando Análise e Desenvolvimento de Sistemas
                                na Universidade Cruzeiro do Sul.
                                Atualmente focando meus estudos no desevolvimento web, construindo alguns projetos pessoais para estar preparado para novos desafios.


                            </p>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section >
    )
}