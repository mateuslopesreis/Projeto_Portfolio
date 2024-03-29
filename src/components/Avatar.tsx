import { ThemeController } from "./ThemeController";
import perfil from  '../foto/perfil.png'

export function Avatar(){
    
    return(
        <>
        <div className="avatar">
  <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={perfil} />
  </div>
 
</div>
     <ThemeController/>
     </>
    )
}