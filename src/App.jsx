import { Navbar } from "./components/Navbar";
const navItems = [
  { name: "Home", href: "index.html" },
  { name: "About", href: "about.html" },
  { name: "Privacy", href: "privacy.html" },
  { name: "Terms", href: "terms.html" },
  { name: "Contact", href: "contact.html" },
];
export const App = () =>{
  
  return (
    <>
    <Navbar brand="Deepak" navItems={navItems}/>
    
</>
    
  );
}
