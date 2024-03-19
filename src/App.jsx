import { Menu } from "./components/menu"
import { SecaoApresentacao } from "./components/secaoApresentacao"
import { SecaoHabilidades } from "./components/secaoHabilidades"
import { SecaoProjetos } from "./components/secaoProjetos"
import pageUp from  './assets/pageUp.svg'
import { useState } from "react"
import { Rodape } from "./components/rodape"


function App() {
  const [deveriaMostrarBotao, setDeveriaMostrarBotao] = useState(true);

  window.addEventListener("scroll", function (event) {
    if (scrollY > 200) {
      setDeveriaMostrarBotao(true)
    } else {
      setDeveriaMostrarBotao(false)
    }
  });

  return (
    <>
      <Menu/>
      <SecaoApresentacao/>
      <SecaoHabilidades/>
      <SecaoProjetos/>
      <Rodape/>

      {deveriaMostrarBotao ? (

      <a href="#apresentacao"><img src={pageUp} alt="" className=" fixed left-[90%] top-[95%] -translate-x-1/2 -translate-y-1/2"/></a>

      ) : (
        ''
      )}
    </>
  )
}

export default App
