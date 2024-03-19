import { CardProjeto } from "./cardProjeto";
import daysOfCode from '../assets/7DaysOfCode.gif'
import doctorCare from '../assets/doctorCare.gif'
import meteora from '../assets/meteora.gif'
import telaLogin from '../assets/telaLogin.gif'
import { useState } from "react";
import { EmBreveMaisProjetos } from "./emBreveMaisProjetos";


export function SecaoProjetos() {



    const [projetos, setProjetos] = useState([

        { id: 1, nome: "7DaysOfCode", imagem: daysOfCode, descricao: "Projeto desenvolvido para prática de consumo de API, utilização do Local Storage e consumo do DOM. O site exibe filmes que estão em alta, e dá opção favoritar seu filme preferido, exibindo somente os filmes favoritos quando solicitado, além de contar com um campo de pesquisa para buscar filmes especificos", techs: "HTML - CSS - JS" },

        { id: 2, nome: "Doctor Care", imagem: doctorCare, descricao: "Projeto de site desenvolvido na Next Level Week Return da Rocketseat. Conceitos como: mobile first, acessebildade e consumo de bibliotecas de terceiros.", techs: "HTML - CSS - JS" },

        { id: 3, nome: "Meteora", imagem: meteora, descricao: "Página de uma loja virtual desenvolvida em um challenge da Alura. O objetivo foi simular a criaçao de uma página e organizar as etapas do processo através da metodologia ágil kanban.", techs: "HTML - CSS - JS - BOOTSTRAP" },

        { id: 4, nome: "Tela de Login", imagem: telaLogin, descricao: "Tela de login simples desenvolvida para prática de HTML e CSS. O objetivo foi tornar a página responsiva, adaptando a imagem ao restante do conteúdo.", techs: "HTML - CSS" }

    ])


    return (
        <section className="py-32 bg-zinc-800" id="projetos">
            <div className="mx-auto">
                <h1 className="text-center pb-14 text-zinc-400 text-6xl"> PROJETOS </h1>
                <div className="flex gap-36 md:gap-24 justify-center flex-wrap">

                    {projetos.map(element => {
                        return <CardProjeto key={element.id} projetos={element.nome} imagem={element.imagem} descricao={element.descricao} techs={element.techs} />
                    })}
                </div>

                <EmBreveMaisProjetos />
            </div>


        </section>
    )
}

