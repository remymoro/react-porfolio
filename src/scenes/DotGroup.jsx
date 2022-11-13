import Anchorlink from 'react-anchor-link-smooth-scroll';





const DotGroup = ({selectedPage,setSelectedPage})=>{
    const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
  
   


return(
    <div className=' flex flex-col gap-6 fixed top-[60%] right-7'>
       <Anchorlink className={`${selectedPage === 'accueil' ? 
        selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
        href="#accueil"
        onClick={()=>setSelectedPage('accueil')}
        >{}
       </Anchorlink>
       <Anchorlink className={`${selectedPage === 'competences' ? 
        selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
        href="#competences"
        onClick={()=>setSelectedPage('competences')}
        >{}
       </Anchorlink>
       <Anchorlink className={`${selectedPage === 'projets' ? 
        selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
        href="#projets"
        onClick={()=>setSelectedPage('projets')}
        >{}
       </Anchorlink>
       <Anchorlink className={`${selectedPage === 'contact' ? 
        selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
        href="#contact"
        onClick={()=>setSelectedPage('contact')}
        >{}
       </Anchorlink>

    </div>
)


}


export default DotGroup;