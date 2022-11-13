// component réutilisable
import LineGradient from "../components/LineGradient";
// gestion responsive 
import useMediaQuery from "../hooks/useMediaQuery";
// librairie
import {motion} from "framer-motion"





const MySkills = () => {


  const isAboveLarge = useMediaQuery("(min-width: 1060px)");



     return(
          <section id="competences" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            Mes <span className="text-red">Compétences</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p>
        </motion.div>

        <div className="mt-10 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* compétence */}
      <div className="md:flex md:justify-between mt-16 gap-32  ">
        {/* EXPERIENCE */}
        {/* certification AEN */}
        <motion.div
           className="md:w-1/3 mt-10 "
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.5 }}
           variants={{
             hidden: { opacity: 0, y: 50 },
             visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative z-10 h-32">
            <div >
              <p className="font-playfair font-semibold text-5xl">2022</p>
              <p className="font-playfair font-semibold text-2xl mt-4">
                Titre Professionel développeur Web 
              </p>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"/></div>
            </div>
            
            
                <p className="mt-5 text-[15px] font-playfair mb-2  ">
                Dans le cadre de ma reconversion Professionel
                </p>
              <ul className="flex-col flex justify-between ">
                <li>-Front-end : HTML, CSS/Twitter Bootstrap, responsive webdesign, JavaScript ,Angular</li>
                <li>-- Back-end : PHP/POO, SQL/PDO, MVC, Symfony</li>
                <li>-dév mobile : Cordova/IONIC</li>
                <li>-Git/Gitlab, initiation WordPress et SEO</li>
                <li>-gestion de projet, méthodes Agile</li>
                <li>-- cours de français (application Voltaire) et d'anglais technique (english4IT)</li>
                <li>-Apprendre à debuger son code </li>
              </ul>
        </motion.div>

        <motion.div
           className="md:w-1/3 mt-10  "
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           variants={{
             hidden: { opacity: 0, y: 50 },
             visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative z-10 h-32 ">
            <div >
              <p className="font-playfair font-semibold text-5xl">2021</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
                PHP 
              </p>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0  z-[-1] " /></div>
            </div>
                
                <p className="mt-5 text-[15px] font-playfair mb-2  ">
                Apprentissage en autodidacte avec la formation Dyma 
                </p>
              <ul className="flex-col flex justify-between h-[175px] ">
                <li>-Apprendre PHP version moderne 8</li>
                <li>-POO avec les classes, les traits et les interfaces</li>
                <li>-Les bases du langage avec les tableaux,types,function</li>
                <li>-Apprendre la mise en production avec Nginx</li>
                <li>-MySQl</li>
                <li>-Composer et l'autoloading</li>
              </ul>
              
        </motion.div>


        
        <motion.div
           className="md:w-1/3 mt-16 "
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.4, duration: 0.5 }}
           variants={{
             hidden: { opacity: 0, y: 50 },
             visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative z-10 h-32 ">
            <div>
              <p className="font-playfair font-semibold text-5xl">2021</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
                Javascript
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1] " /></div>
                
                <p className="mt-5 text-[15px] font-playfair mb-2  ">
                Apprentissage en autodidacte avec la formation Dyma 
                </p>
              <ul className="flex-col flex justify-between ">
                <li>-Connaissance du Javascript moderne ES5 à ES11</li>
                <li>-Envoie de requête Ajax approche moderne de gestion de  l'asyncrone</li>
                <li>-Utilisation d'environnement avec webpack et Babel</li>
                <li>-Projet réel de Blog réalisation du CRUD</li>
                <li>-Bonne pratique de programmation</li>
                <li>-POO dû à l'évolution du Javascript</li>
                <li>-Gestion des événement(Dom)</li>
                <li>-Apprendre à debuger son code </li>
              </ul>
        </motion.div>


        
         
            

       
      </div>
    </section>
                 




     )



}



export default MySkills;