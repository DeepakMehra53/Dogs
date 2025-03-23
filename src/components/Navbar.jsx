const navLinks = [
  { name: "Home", href: "index.html" },
  { name: "About", href: "about.html" },
  { name: "Privacy", href: "privacy.html" },
  { name: "Terms", href: "terms.html" },
  { name: "Contact", href: "contact.html" },
];

export const  Navbar = () =>{

    return (
        <nav>
            <div>
                <a href=""></a>
                <button>
                    <span></span>
                </button>
            </div>
            <div>
                <ul className="flex justify-center ">
                    {navLinks.map((link,index)=>(
                        <li key={index}>
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}