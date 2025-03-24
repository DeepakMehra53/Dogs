import { NavbarBrand } from "./NavbarBrand";
import { NavbarMenu } from "./NavbarMenu"

export const  Navbar = ({navItems}) =>{
    return (
      <nav className="bg-gray-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">

            
            <NavbarBrand brand="Deepak"/>
          <button>
            <span></span>
          </button>
          <NavbarMenu navItems={navItems} />
          </div>
        </div>
      </nav>
    );
}