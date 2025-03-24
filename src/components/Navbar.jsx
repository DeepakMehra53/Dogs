import { NavbatBrand } from "./NavbarBrand";
import { NavbarMenu } from "./NavbarMenu";
import { NavbarToggler } from "./NavbarToggler";



export const  Navbar = ({brand,navItems}) =>{

    return (
        <nav>
            <div className="flex justify-between">
               <NavbatBrand brand={brand}/>
                <NavbarToggler/>
                <NavbarMenu navItems={navItems}/>
            </div>
        </nav>
    )
}