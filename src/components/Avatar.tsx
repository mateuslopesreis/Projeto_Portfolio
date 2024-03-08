import { ThemeController } from "./ThemeController";

export function Avatar(){
    
    return(
        <>
        <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://s3.amazonaws.com/comicgeeks/characters/avatars/37872.jpg" />
  </div>
 
</div>
     <ThemeController/>
     </>
    )
}