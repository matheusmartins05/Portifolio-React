import { Menu } from "./components/menu"
import { SecaoApresentacao } from "./components/secaoApresentacao"
import { SecaoHabilidades } from "./components/secaoHabilidades"
import { SecaoProjetos } from "./components/secaoProjetos"
import pageUp from './assets/pageUp.svg'
import { useState } from "react"
import { Rodape } from "./components/rodape"


function App() {



  return (
    <>
      <Menu />
      <SecaoApresentacao />
      <SecaoHabilidades />
      <SecaoProjetos />
      <Rodape />


    </>
  )


}

export default App
