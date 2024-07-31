"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "web design",
    description: "I am a dedicated and experienced web developer with over 3 years in the industry. I specialize in front-end development, utilizing a strong skill set in technologies such as React.js, Next.js, Tailwind CSS, SCSS, CSS, HTML, and JavaScript. I am currently engaged in a MERN stack project, focusing on creating dynamic and user-friendly real estate applications. My background in web design complements my development skills, allowing me to deliver visually appealing and highly functional websites and applications. I am passionate about building efficient, scalable, and maintainable code, and I continually seek to stay updated with the latest industry trends and best practices.",
    href: "/web-design"
  },
  {
    num: "02",
    title: "app developer",
    description: "I am a proficient app developer with extensive experience in building mobile applications using React Native. With over 2.5 years in the tech industry, I have developed a keen eye for creating intuitive and high-performance mobile apps. My expertise lies in leveraging React Native's capabilities to deliver cross-platform applications that provide seamless user experiences on both iOS and Android devices. My background in front-end web development with technologies like React.js, Next.js, Tailwind CSS, SCSS, CSS, HTML, and JavaScript enhances my ability to build cohesive and responsive mobile interfaces. I am committed to writing clean, maintainable code and staying current with the latest advancements in mobile app development.",
    href: "/app-development"
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index}
               className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className=" text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href}
                   className=" w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className=" text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className=" text-[42px] text-white font-bold leading-none  group-hover: text-accent capitalize transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;









{/*
  "use client";
  import { BsArrowDownRight } from "react-icons/bs";
  
  const services = [
    {
      num: "01",
      title: "web design ",
      description: "I am a dedicated and experienced web developer with over 3 years in the industry. I specialize in front-end development, utilizing a strong skill set in technologies such as React.js, Next.js, Tailwind CSS, SCSS, CSS, HTML, and JavaScript. I am currently engaged in a MERN stack project, focusing on creating dynamic and user-friendly real estate applications. My background in web design complements my development skills, allowing me to deliver visually appealing and highly functional websites and applications. I am passionate about building efficient, scalable, and maintainable code, and I continually seek to stay updated with the latest industry trends and best practices."
    },
    {
      num: "02",
      title: "app developer ",
      description: "I am a proficient app developer with extensive experience in building mobile applications using React Native. With over 2.5 years in the tech industry, I have developed a keen eye for creating intuitive and high-performance mobile apps. My expertise lies in leveraging React Native's capabilities to deliver cross-platform applications that provide seamless user experiences on both iOS and Android devices. My background in front-end web development with technologies like React.js, Next.js, Tailwind CSS, SCSS, CSS, HTML, and JavaScript enhances my ability to build cohesive and responsive mobile interfaces. I am committed to writing clean, maintainable code and staying current with the latest advancements in mobile app development."},
  ]
  
  import { motion } from "framer-motion";
  
  
  
  const Services = () => {
    return (
     <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className=" container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate = {{
              opacity:1,
              transition: { delay: 2.4, duration:0.4, ease:"easeIn" },
            }}
            className=" grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
           {
            services.map((service, index) => {
              return (
                <div key={index}>
                   <div>
                     <div>{service.num} </div>
  
                     <BsArrowDownRight />
                    
                      
                       
                   </div>
                     <h2>{service.title} </h2>
                     <p>{service.description}</p> 
                     <div className=" border-b border-white/20 w-full ">
  
                     </div>
                </div>
              )
            })
           }
          </motion.div>
        </div>
     </section>
    )
  }
  
  export default Services

*/}