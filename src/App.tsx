import { Button } from "react-daisyui"
import { Avatar } from "./components/Avatar"
import { Rodape } from "./components/Rodape"
import { Drawer } from "./components/drawer"
import { Menu } from "./components/Menu"
import { Carousel } from "./components/Carousel"
import { Hero } from "./components/hero"

function App() {

  return (
    <>
    
    
    <section className="flex-col gap-6 mt-4 px-16">
    
    
    
    

    <div className="flex justify-center  flex-col ml-6">
    <Menu/>
    

    <div className="flex justify-end gap-8">
      <Avatar/>
      </div>


      <div className="m-20 tracking-[.25em]">
      <h1 className="text-2xl m-8">Olá, meu nome é Mateus</h1>

      
      <p className="whitespace-pre"> Explore meu trabalho como programador júnior e descubra como posso contribuir para o sucesso do seu projeto.</p>
      <p className="text-center">Desenvolvendo o futuro, um código de cada vez.</p>

    <div className="flex justify-center itens-center gap-18 mt-24">
    <Drawer/>
    </div>
    </div>
    </div>
    
     
    </section>


    <section>
      <Hero/>

    </section>


    
    </>
  )
}

export default App
