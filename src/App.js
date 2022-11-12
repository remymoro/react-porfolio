import { useEffect, useState } from "react";
//  hooks responsive
import useMediaQuery from "./hooks/useMediaQuery"
// component lineGradient 
import LineGradient from "./components/LineGradient";
// pages
import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from "./scenes/Landing";
import MySkills from './scenes/MySkills'
import Projets from "./scenes/Projets";


function App() {
    const [selectedPage,setSelectedPage] = useState('accueil');
    
    // est au-dessus de l'écran moyen on lui passe
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')
    
    // déclenchement de la navbar en haut 
    const [isTopOfPage,setIsTopOfPage] = useState(true)
     
    useEffect(()=>{
        const HandleScroll = ()=>{
           if(window.scrollY === 0) setIsTopOfPage(true)
           if(window.scrollY !== 0) setIsTopOfPage(false)
        }

        window.addEventListener('scroll',HandleScroll)
        return ()=> window.removeEventListener('scroll',HandleScroll)
    })



    
     return <div className="App bg-deep-blue ">
     <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
         <div className="md:h-full w-5/6 mx-auto">
            {isAboveMediumScreens && (
                <DotGroup
                 selectedPage={selectedPage}
                 setSelectedPage={setSelectedPage}
                />
            )}
            <Landing selectedPage={selectedPage}/>
        </div>
            <LineGradient/>
                <div className="w-5/6 mx-auto md:full">
                 {/* compétence  */}
                    <MySkills/>
                </div>
                {/* Les projets */}
            <LineGradient/>
                <div className="w-5/6 mx-auto ">
                 {/* Projets*/}
                    <Projets/>
                </div>


     </div>
}

export default App;
