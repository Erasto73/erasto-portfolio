
import { AiFillLinkedin,
         AiFillInstagram,
         AiFillTwitterCircle,
       } from "react-icons/ai";

import Image from 'next/image';

export default function Home() {

   return (
 
  
  <main className = "bg-white md:px-20 lg: px-40 w-full justify-center" >
    <div className = " absolute right-0 bg-teal-500 text-white px-4 py-2 border-none rounded-md ">
     <button>
          <a target = "_blank" rel = "noreferrer" href = "https://drive.google.com/uc?id=1fB4-Jx9N7UdYVMM-2s_qLn5Pc00w9v91">
           Resume
          </a>
        </button>
    </div>
    
      <div className = "text-center p-10 py-10">
        <h2 className = "text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Eng. Erasto Kasuguru
        </h2>
        <h3 className = "text-2xl py-2 md:text-3xl">
         Telecommunications and Front End Developer
        </h3>
        <p className = "text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl">
         Specialize in creating engaging user interface and seamless user experiences that bring digital concepts
         to life. My expertise lies in transforming design mockups into interactive websites and applications
         using latest technologies: React, Next and Tailwind CSS.
        </p>
      </div>
      <div className= "text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <button>
          <a target = "_blank" rel = "noreferrer" href = "https://twitter.com/ekasuguru">
           <AiFillTwitterCircle/>
          </a>
        </button>
        <button>
          <a target = "_blank" rel = "noreferrer" href = "https://www.linkedin.com/in/erasto-m-kasuguru-11058a25/">
           <AiFillLinkedin/>
          </a>
        </button>
        <button>
          <a target = "_blank" rel = "noreferrer" href = "https://instagram.com/erastokasuguru?utm_source=qr&igshid=OGUOMmVIOjOQS">
           <AiFillInstagram/>
          </a>
        </button>

      </div>
       <div className= "mx-auto bg-gradient-to-b from-teal-500 rounded-full w-8 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96 ">
         <Image src = "/erasto.png" alt='photo' fill  style = "cover" />
      </div>
    
    
      <div>
        <h3 className = "text-3xl py-1">Service I offer</h3>
        <p className = "text-md py-2 leading-8 text-gray-800">
         Since the beginning of my journey as freelarnce design and developer, I have done remote work for <span className = "text-teal-500">
         agencies</span>consulted for <span className = "text-teal-500">Startups</span>and collaborated people to create digital
         products for both business and consumer use.
        </p>
      </div>
      <div className = "lg:flex gap-10">
        <div className = "text-center shadow-lg p-10 rounded-xl my-10 flex-1">
          <Image src = "/design.png" alt="design" width={100} height={100} />
          <h3 className= "text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
          <p className= "py-2">
            Creating elegant designs suited for your needs following core design theory.
          </p>
        </div>
        <div className= "text-center p-10 shadow-lg rounded-xl my-10 flex-1">
         <Image src = "/code.png" alt="code" width={100} height={100} />
         <h3 className= "text-lg font-medium pt-8 pb-2">Code your dream project</h3>
         <p className= "py-2">
          Do you have an idea for your next website lets make it a reality.
         </p>
        </div>
        <div className= "text-center shadow-lg p-10 rounded-xl my-10 flex-1">
         <Image src = "/consulting.png" alt="consulting" width={100} height={100} />
         <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
         <p className="py-2">
          Are you interested in feedback for your curent project I can give tips and tricks
          to level it up.
         </p>
        </div>
      </div>
    <div className= "py-10">
     <h3 className= "text-3xl py-1">Projects</h3>
     <p className= "text-md py-2 leading-g text-gray-800">
      Worked with design product with back end teams to create efficient and reusable front end
      system to drive web applications to the market place, particitated in product releases and code reviews with team leaders.
     </p>
     <p className= "text-md py-2 leading-g text-gray-800">
      Some of projects I developed at defferent times:
     </p>
     <h3>
      <a target = "_blank" rel = "noreferrer" href = "https://signaxcom-birthday-project.netlify.app/" >
      <span className = "text-teal-500">Birthday-app</span>
      </a>
     </h3>
     <p className = "text-md py-2 leading-g text-gray-800">
      Birthday app display list of friends with birthday at psrticular day from database with image and age.
     </p>
     <h3>
      <a target = "_blank" rel = "noreferrer" href = "https://next-events-teal.vercel.app/" >
      <span className = "text-teal-500">Event web app</span>
      </a>
     </h3>
     <p className = "text-md py-2 leading-g text-gray-800">
      Event web app enable people to search for events available in Europe this year and get the opportunity to
      select and register for the event and get more informations.
     </p>
     <h3>
      <a target = "_blank" rel = "noreferrer" href = "https://next-quiz-app-zeta.vercel.app/" >
      <span className = "text-teal-500">Quiz-app</span>
      </a>
     </h3>
      <p className = "text-md py-2 leading-g text-gray-800">
       Quiz app allow you to participate to answer questions and at the end get the total scored results.
      </p>
    </div>
    <div className = " gap-10 py-10 flex flex-row rounded-xl">
     <div className = {'image-container'} >
      <a target = "_blank" rel = "noreferrer" href = "https://signaxcom-birthday-project.netlify.app/">
      <Image className = " rounded-g object-cover"
       src = "/pic1.png" alt = "pic1" fill className = {'image'}
       />
      </a>
     </div>
     <div className = {"image-container"} >
     <a target = "_blank" rel = "noreferrer" href = "https://next-events-teal.vercel.app/">
      <Image className = "  rounded-g object-cover"
       src = "/pic2.png"alt = "pic2" fill className = {'image'} />
     </a>
     </div>
     <div className = {'image-container'} >
     <a target = "_blank" rel = "noreferrer" href = "https://next-quiz-app-zeta.vercel.app/">
      <Image className = " rounded-g object-cover"
       src = "/pic3.png" alt = "pic3" fill className = {'image'} />
      
     </a>
     </div>
    </div>

    
  </main>
  
  )
}