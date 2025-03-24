import { Navbar } from "./Navbar";
import Backgroundimg from "../assets/Background.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Privacy", path: "/privacy" },
  { name: "Terms", path: "/terms" },
  { name: "Contact", path: "/contact" },
];
export const Home = () => {
  return (
    <>
      
            <Navbar brand="Mowaki" navItems={navItems} />
        

        <img
          src={Backgroundimg}
          alt=""
          className="w-full h-163 object-cover"
        />
        
      
    </>
  );
};
