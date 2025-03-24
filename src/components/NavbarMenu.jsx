import { NavbarItem } from "./NavbarItem"

export const NavbarMenu =({navItems})=>{
    return(
        <div>
            <ul>
                {navItems.map((item,index)=>(
                    <NavbarItem key={index} {...item}/>
                ))}
            </ul>
        </div>
    )
}