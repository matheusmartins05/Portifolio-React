import { CardHabilidade } from "./cardHabilidade";
import html from  '../assets/html.svg'
import css from  '../assets/css3.svg'
import js from  '../assets/js.svg'
import git from  '../assets/git.svg'
import github2 from  '../assets/github2.svg'
import tailwind from  '../assets/tailwindcss-logotype.svg'
import react1 from  '../assets/react.svg'
import bootstrap from  '../assets/bootstrap-5-1.svg'
import { useState } from "react";

export function SecaoHabilidades() {

    const [habilidades, setHabilidades] = useState([
        { id: 1, imagem: html, nome: "HTML5"   },
        {id: 2, imagem: css, nome: "CSS3"   },
        {id: 3, imagem: js, nome: "JAVASCRIPT"   },
        {id: 4, imagem: git, nome: "GIT"   },
        {id: 5, imagem: tailwind, nome: "TAILWIND"   },
        {id: 6, imagem: react1, nome: "REACT"   },
        {id: 7, imagem: bootstrap, nome: "BOOTSTRAP"   }

    ])

    return (
        <section className="bg-zinc-700 py-36" id="habilidades">
            <div className="w-[80%] mx-auto text-center text-zinc-200">
                <h2 className="text-4xl md:text-6xl lg:text-6xl">Minhas habilidades</h2>
                <p className="pt-4">Tecnologias que tenho trabalhado recentemente.</p>
                <div className="pt-24 flex flex-wrap  justify-around items-center gap-10">


                {habilidades.map(element => {
                   return <CardHabilidade key={element.id} imagem={element.imagem} nome={element.nome}/>
                })}

                </div>
            </div>
        </section>
    )
}