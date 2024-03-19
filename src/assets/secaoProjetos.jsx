import { CardProjeto } from "./cardProjeto";
import imagem from '../assets/7DaysOfCode.gif'

export function SecaoProjetos(){
    return(
        <section className="py-32">
            <div className="w-[80%] mx-auto">
                <h1 className="text-center text-zinc-400 text-6xl"> PROJETOS </h1>
                <div className="flex">
                    <CardProjeto nomeProjeto="7DaysOfCode" imagemProjeto={imagem} descricaoProjeto="Projeto desenvolvido para prática de consumo de API, utilização do Local Storage e consumo do DOM. O site exibe filmes que estão em alta, e dá opção favoritar seu filme preferido, exibindo somente os filmes favoritos quando solicitado, além de contar com um campo de pesquisa para buscar filmes especificos " techs="HTML - CSS - JS"/>
                    <CardProjeto/>
                    <CardProjeto/>
                    <CardProjeto/>
                </div>
            </div>
        </section>
    )
}

