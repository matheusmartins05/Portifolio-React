

export function CardHabilidade ({imagem, nome}){
    return(
        <div className="bg-zinc-600 w-[40%] flex flex-col flex-wrap min-w-48 max-w-[25rem] items-center justify-center p-6 rounded-md hover:bg-slate-600 shadow-xl">
            <img className="w-[60%] h-40" src={imagem} alt="Logo da tecnologia" />
            <h3>{nome}</h3>
        </div>
    )
}