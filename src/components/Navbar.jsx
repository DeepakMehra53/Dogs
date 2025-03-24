import { NavbatBrand } from "./NavbarBrand";
import { NavbarMenu } from "./NavbarMenu";
import { NavbarToggler } from "./NavbarToggler";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Privacy", path: "/privacy" },
  { name: "Terms", path: "/terms" },
  { name: "Contact", path: "/contact" },
];


export const  Navbar = ({brand,}) =>{

    return (
        <nav>
            <div className="flex justify-between ml-10 mr-10">
               <NavbatBrand brand={brand}/>
                <NavbarToggler/>
                <NavbarMenu navItems={navItems}/>
            </div>
        </nav>
    )
}