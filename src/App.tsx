import { Avatar } from "./components/Avatar"
import { Rodape } from "./components/Rodape"
import { Drawer } from "./components/drawer"

function App() {

  return (
    <>
    <section className="flex justify-center items-center gap-6 flex-col mt-4">
    
      <Avatar/>
      <div className="text-2xl">@mateuslopes</div>

      <h1 className="text-6xl">Desenvolvedor Júnior</h1>

      
      <p> Explore meu trabalho como programador júnior e descubra como posso contribuir para o sucesso do seu projeto.</p>
      <p className="text-align: center">Desenvolvendo o futuro, um código de cada vez.</p>

    <div className="flex justify-center itens-center gap-18 mt-8">
    <Drawer/>
    </div>

    
      
    </section>
    </>
  )
}

export default App
