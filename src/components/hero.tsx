import perfil from  '../foto/perfil.png'

export function Hero(){
    return(
      <>
      
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={perfil} className="max-w-60 rounded-lg shadow-2xl ml-4 mr-6" />
    <div>
    <h1 className="text-4xl font-bold">Sobre</h1>
      
      <p className="py-5 text-justify">
Olá a todos! É com grande prazer que compartilho um pouco sobre minha trajetória profissional até o momento. Sou formado como técnico em informática para internet pelo IFMS e atualmente estou embarcado em uma jornada acadêmica na graduação de Análise e Desenvolvimento de Sistemas. Esta busca incessante pelo aperfeiçoamento e pela construção de uma base sólida para minha carreira profissional tem sido uma fonte constante de motivação para mim.<br></br>

Desde os primeiros passos na área da informática, sempre mantive um olhar atento às novas tecnologias e tendências do mercado. Acredito que a educação é um processo contínuo e fundamental para acompanhar o ritmo acelerado das transformações no campo da tecnologia da informação. É por isso que estou comprometido não apenas com a obtenção de diplomas, mas também com a busca pelo conhecimento prático e teórico que me permitirá enfrentar os desafios do mundo profissional com confiança e competência.<br></br>

Minha experiência no IFMS foi fundamental para estabelecer uma base sólida de habilidades técnicas, mas estou ciente de que a jornada está apenas começando.
</p>
      <button className="btn btn-primary">Entrar Em Contato!</button>
    </div>
  </div>
</div>
</>
    )
}