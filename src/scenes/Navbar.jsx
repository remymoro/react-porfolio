import { useState } from "react";
import Anchorlink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from "../hooks/useMediaQuery";

// composant personnalisé 


const Link = ({ page,selectedPage,setSelectedPage})=>{
  
    const lowerCasePage = page.toLowerCase();


    return(
        <Anchorlink className={`${selectedPage === lowerCasePage ? 
        "text-yellow" : ''} hover:text-yellow transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={()=>setSelectedPage(lowerCasePage)}
        >{page}</Anchorlink>
    )
}
        
        





const Navbar = ({isTopOfPage,selectedPage,setSelectedPage}) => {
    
    const [isMenuToggled , setIsMenuToggled] = useState(false);
    const isAboveMediumScreens = useMediaQuery('(min-width:768px)')
    const navbarBackground = isTopOfPage ? '' : "bg-red"
     
    
    return(
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
              <h4 className="font-playfair text-3xl font-bold">RM</h4>
       
                {/* Navigation du bureau */}

                {isAboveMediumScreens ? (
                    <div className="flex justify-beetwen gap-16 font-opensans text-sm font-semibold">
                    <Link
                    page={"Accueil"}
                    selectedPage={setSelectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page={"Competences"}
                    selectedPage={setSelectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page={"Projets"}
                    selectedPage={setSelectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page={"Parcours"}
                    selectedPage={setSelectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page={"Contact"}
                    selectedPage={setSelectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    
                    </div>
                ):(
                    <button className="rounded-full bg-red p-2" onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                       <img alt="menu-icon" src="../assets/menu-icon.svg"/>
                    </button>
                )}

                 {/* Menu portable */}
  
                 {!isAboveMediumScreens && isMenuToggled && (
                     <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                        {/* fermeture de l'icon */}
                         <div className="flex justify-end p-12">
                              <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                                    <img alt="close-icon" src="../assets/menu-icon.svg"/>
                              </button>
                          </div>
                         {/* menu-items */}
                         <div className="flex flex-col gap-10 text-deep-blue text-2xl ml-[33%]">
                                <Link
                                 page={"Accueil"}
                                  selectedPage={setSelectedPage}
                                   setSelectedPage={setSelectedPage}
                                 />
                                <Link
                                page={"Competences"}
                                selectedPage={setSelectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                <Link
                                page={"Projets"}
                                selectedPage={setSelectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                <Link
                                page={"Parcours"}
                                selectedPage={setSelectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                <Link
                                page={"Contact"}
                                selectedPage={setSelectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                         </div>
                    </div>
                 )}                    
            </div>
        </nav>
    )
}

export default Navbar;






