import { ThemeController } from "./ThemeController";

export function Drawer(){

    return(
        <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button text-2xl">See more about me</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Projetos</a></li>
      <li><a>Sobre</a></li>
      <li><a>Contato</a></li>
      
    </ul>
  </div>
</div>
    )
}