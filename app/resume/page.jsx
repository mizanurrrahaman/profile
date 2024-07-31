"use client";

import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { ScrollArea } from '@radix-ui/react-scroll-area';
//import { ScrollArea } from '@/components/ui/scroll-area';
import { TableRowsSplitIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const about = {
  title: "About me",
  description: "I am a dedicated and skilled front-end web developer and app developer with 3 years of experience in the tech industry. My expertise lies in creating dynamic, user-friendly web and mobile applications using a wide array of technologies. Technologies: React.js, Next.js, Tailwind CSS, Sass (SCSS), CSS, HTML, and JavaScript.",
  info: [
    { fieldName: "Name", fieldValue: ": Murad Hossain Chowdhury" },
    { fieldName: "Phone", fieldValue: ": 01538280537" },
    { fieldName: "Experience", fieldValue: ": 3 years" },
    { fieldName: "Skype", fieldValue: ": Murad0077" },
    {fieldName: "Email ", fieldValue: " : muradchowdhury0077@gmail.com"},
    { fieldName: "Nationality", fieldValue: ": Bangladesh" },
    // { fieldName: "Email ", fieldValue: " : muradchowdhury0077@gmail.com" },
    { fieldName: "Profession", fieldValue: ": Freelancer" },
    { fieldName: "Languages", fieldValue: ": Bangla, English, Urdu" },
  ],
};

const experience = {
  icon: " ",
  title: "My experience",
  description: "Front-End Web Developer: As a skilled Front-End Web Developer with over 2.5 years of experience, I specialize in creating visually appealing, user-friendly, and responsive websites and web applications. I have a strong command of modern web technologies, including HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, and SCSS. My expertise lies in translating UI/UX designs into high-quality code, ensuring cross-browser compatibility, and optimizing web performance. I have a keen eye for design, a passion for improving user experiences, and a commitment to staying current with the latest industry trends. My experience extends to collaborating with designers, back-end developers, and stakeholders to deliver seamless and functional digital solutions.",
  items: [
    { marketplace: "Upwork", position: "Front end web developer with app development", duration: "2020 to present" },
    { marketplace: "Fiverr", position: "Front end web developer with app development", duration: "2020 to present" },
    { marketplace: "Remote job", position: "Front end web developer", duration: "2021 to 2023" },
  ],
};

const skills = {
  title: "My skills",
  description: "I am passionate about creating engaging user experiences and continuously learning new technologies to enhance my development skills. Whether working on a team or independently, I am dedicated to delivering high-quality solutions that meet client needs and exceed expectations.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <TbBrandReactNative />, name: "React Native" },
  ],
};

const Resume = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex items-center py-12 xl:py-0">
        <div className="container mx-auto">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About Me</TabsTrigger>
            </TabsList>
             <div className=" min-h-[70vh] w-full "> 
                <TabsContent value="experience" className="w-full">
                   <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className=" text-4xl font-bold"> {experience.title} </h3>
                       <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0"> 
                         {experience.description}
                       </p>
                        <ScrollArea className=" h-[400px]">
                           <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                              { experience.items.map((item, index) => {
                                return(
                                   <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" key={index}>
                                     <span className=" text-accent">{item.duration} </span>
                                     <h3 className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position} </h3>
                                     <div className=" flex items-center gap-3">
                                        <span className=" w-[6px] h-[6px] rounded-full bg-accent"> </span>
                                         <p className=" text-white/60">{item.marketplace} </p>
                                     </div>
                                   </li>
                                )
                              })}
                           </ul>
                        </ScrollArea>
                   </div>
                </TabsContent>
                <TabsContent value="skills" className="w-full h-full">
                   <div className="flex flex-col gap-[30px]">
                   <div className=" flex flex-col gap-[36px] text-center xl:text-left">
                       <h3 className=" text-4xl font-bold">{skills.title}</h3>
                       <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0"> 
                         {skills.description}
                       </p>
                    </div>
                     <ul className=" grid grid-cols-2 gap-4 sm:grid-cols-4 xl:gap-[30px]">
                      {
                        skills.skillList.map((skill, index) => {
                          return(
                            <li key={index}> 
                           <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className=" w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className=" text-6xl group-hover:text-accent transition-all duration-500"> {skill.icon} </div> 
                              </TooltipTrigger>
                               <TooltipContent>
                                <p className=" capitalize">{skill.name} </p>
                               </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          </li>
                          )
                        })
                      }
                     </ul>
                   </div>
                </TabsContent>
               
                <TabsContent value="about" className=" w-full text-center xl:text-left">
                  <div className=" flex flex-col gap-[30px]">
                     <h3 className=" text-4xl font-bold">{about.title} </h3>
                     <p className=" max-w-[608px] text-white/60 mx-auto xl:mx-0">{about.description} </p>
                     <ul className=" grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">

                      {
                        about.info.map((item, index) => {
                          return(
                            <li className=" flex items-center justify-center xl:justify-start gap-4" key={index}>
                              <span className=" text-white/60 capitalize text-[20px] ">{item.fieldName} </span>
                               <span className=" text-wrap">{item.fieldValue} </span>
                            </li>
                          )
                        })
                      }
                     </ul>
                  </div>
                </TabsContent>
             </div>
            {/* <TabsContent value="experience">
              <div>
                <h2>{experience.title}</h2>
                <p>{experience.description}</p>
                <ul>
                  {experience.items.map((item, index) => (
                    <li key={index}>
                      <strong>{item.marketplace}</strong>: {item.position} ({item.duration})
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="skills">
              <div>
                <h2>{skills.title}</h2>
                <p>{skills.description}</p>
                <ul className="grid grid-cols-2 gap-4">
                  {skills.skillList.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      {skill.icon}
                      <span className="ml-2">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about">
              <div>
                <h2>{about.title}</h2>
                <p>{about.description}</p>
                <ul>
                  {about.info.map((infoItem, index) => (
                    <li key={index}>
                      <strong>{infoItem.fieldName}:</strong> {infoItem.fieldValue}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent> */}
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;








{/*

  "use client";
  
  import React from 'react'
  import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs,} from "react-icons/fa";
  import {SiTailwindcss, SiNextdotjs } from "react-icons/si";
  import { TbBrandReactNative } from "react-icons/tb";
  const about = {
    title: "About me",
    description: " I am a dedicated and skilled front-end web developer and app developer with 3 years of experience in the tech industry. My expertise lies in creating dynamic, user-friendly web and mobile applications using a wide array of technologies. Technologies: React.js, Next.js, Tailwind CSS, Sass (SCSS), CSS, HTML, and JavaScript.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Murad Hossain Chowdhury"
      },
      {
        fieldName: "Phone",
        fieldValue: " 01538280537"
      },
      {
        fieldName: "Experience",
        fieldValue: " 3 years"
      },
      {
        fieldName: "Skype",
        fieldValue: "Murad0077"
      },
      {
        fieldName: "Nationality",
        fieldValue: "Bangladesh"
      },
      {
        fieldName: "Email",
        fieldValue: "muradchowdhury0077@gmail.com"
      },
      {
        fieldName: "Skype",
        fieldValue: "Murad0077"
      },
      {
        fieldName: "profession",
        fieldValue: "Freelancer"
      },
      {
        fieldName: "Languages",
        fieldValue: "Bangla English urdu"
      },
    ],
  };
  
  const experience = {
    icon: " ",
    title: " My experience",
    description: "Front-End Web Developer : As a skilled Front-End Web Developer with over 2.5 years of experience, I specialize in creating visually appealing, user-friendly, and responsive websites and web applications. I have a strong command of modern web technologies, including HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, and SCSS. My expertise lies in translating UI/UX designs into high-quality code, ensuring cross-browser compatibility, and optimizing web performance.I have a keen eye for design, a passion for improving user experiences, and a commitment to staying current with the latest industry trends. My experience extends to collaborating with designers, back-end developers, and stakeholders to deliver seamless and functional digital solutions.",
  
    items: [
       {
        marketplace: " Upwork",
        position : " Front end web developer with app development",
        duration: "2020 to end ",
       },
       {
        marketplace: " Fiverr",
        position : " Front end web developer with app development",
        duration: "2020 to end ",
       },
       {
        marketplace: "Remote job",
        position : " Front end web developer",
        duration: "2021 to 2023 ",
       },
    ]
  
  };
  
  const skills ={
    title: "My skills",
    description:"I am passionate about creating engaging user experiences and continuously learning new technologies to enhance my development skills. Whether working on a team or independently, I am dedicated to delivering high-quality solutions that meet client needs and exceed expectations. React.js: Proficient in building single-page applications (SPAs) with seamless user interfaces and efficient state management.",
    skillList: [
      {
        icon: <FaHtml5/>,
        name: "html 5",
      },
      {
        icon: <FaCss3/>,
        name: "css 3",
      },
      {
        icon: <FaJs/>,
        name: "javascript",
      },
      {
        icon: <FaReact/>,
        name: "react js",
      },
      {
        icon: <SiNextdotjs/>,
        name: "naxt js",
      },
      {
        icon: <SiTailwindcss/>,
        name: "tailwind.css",
      },
      {
        icon: <FaNodeJs/>,
        name: "Node.js",
      },
      {
        icon: <FaFigma/>,
        name: "Figma",
      },
      {
        icon: <TbBrandReactNative />,
        name: "React Native",
      }
    ]
  };
  
  
  import {Tabs, TabsContent,  TabsList, TabsTrigger} from "@/components/ui/tabs";
  
  import { ScrollArea } from "@/components/ui/scroll-area";
  import { motion } from 'framer-motion';
  
  const Resume = () => {
    return (
      <div> 
          <motion.div initial={{ opacity: 0}} animate={{opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: " easeIn"}}} className="min-h-[80vh] flex items-center py-12 xl:py-0">
           <div className=" container mx-auto">
              <Tabs defaultValue="experience" className=" flex flex-col xl:flex-row gap-[60px]">
                 <TabsList>
                    <TabsTrigger>Experience </TabsTrigger>
                    <TabsTrigger>Education </TabsTrigger>
                    <TabsTrigger>About me </TabsTrigger>
                 </TabsList>
                 <div>
                    container
                 </div>
              </Tabs>
           </div>
          </motion.div>
      </div>
    )
  };
  
  export default Resume
*/}