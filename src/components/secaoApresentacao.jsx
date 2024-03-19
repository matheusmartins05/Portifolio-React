import { Button } from "./button";
import { Card } from "./card/card";

export function SecaoApresentacao() {
    return (
        <main className="bg-zinc-800 pb-[25rem] md:pb-0 lg:pb-0" id="apresentecao">

        <div className="flex md:flex-row flex-col gap-32 w-[80%] m-auto items-center h-screen">
            <div className="w-[100%] md:w-[75%] lg:w[75%] text-center md:text-left">
                <h1 className="text-zinc-400 pt-24 text-[2.5rem] md:text-[4rem] lg:pt-0 lg:text-[4.7rem] w-[100%] ">Olá &#128075;&#127996;, sou <span className="bg-gradient-to-r from-[#ca5e5e] to-[#2570e1] text-transparent bg-clip-text"> Matheus, desenvolvedor front end. </span></h1>
            
                <a href="#projetos"><Button  texto="Ver projetos"/></a>
            </div>
            <Card/>
        </div>

        </main>
    )
}