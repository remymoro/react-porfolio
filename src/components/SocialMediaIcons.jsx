import {
  FaGithub,
  FaLinkedin,
  FaTwitch,
  FaTwitterSquare
} from 'react-icons/fa';






const SocialMediaIcons = ()=>{

    return(
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a href='https://www.linkedin.com/in/r%C3%A9my-moro-58732aab/'>
               <FaLinkedin size={30} />
            </a>
            <a
              className=''
              href='https://github.com/remymoro'
            >
               <FaGithub size={30} />
            </a>
            <a
              className=''
              href='https://www.twitch.tv/blenderfuturama'
            >
               <FaTwitch size={30} />
            </a>
            
         
      
      
         </div>
       )
}
       











export default SocialMediaIcons;