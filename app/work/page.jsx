
  "use client";
  import { motion } from "framer-motion";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/css";
  import { BsArrowUpRight, BsGithub } from "react-icons/bs";
  import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
  import React, { useState } from "react";
  import Image from "next/image";
  import Link from "next/link";
  import WorkSliderButton from "@/components/ui/WorkSliderButton";
  
  const projects = [
    {
      num: "01",
      category: "frontend",
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      stack: ["Html 5", "Css 3", "Javascript", "React.js"],
      images: "https://magesolution.com/wp-content/uploads/2022/07/ecommerce-website-design-examples-1024x768.jpg",
      live: "https://animated-dolphin-f125f6.netlify.app/", // Replace with actual live URL
      github: "/project1/github" // Replace with actual GitHub URL
    },
    {
      num: "02",
      category: "frontend",
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      stack: ["Next.js", "Tailwind CSS", "Javascript", "Node.js"],
      images: "https://repository-images.githubusercontent.com/486573989/d76fb931-0182-4511-b98c-6dc099c5dfe5",
      live: "https://websitedemos.net/custom-printing-02/?customize=template", // Replace with actual live URL
      github: "/project2/github" // Replace with actual GitHub URL
    },
    {
      num: "03",
      category: "frontend",
      title: "Project 3",
      description: "Professional and modern WordPress business website designed to showcase your brand, attract customers, and drive growth.",
      stack: ["WordPress"],
      images: "https://img.freepik.com/premium-photo/responsive-layout-web-with-adaptive-design-effect-profession-america-polictic-concept-idea-figma_655090-3192917.jpg",
      live: "https://bussiness-website-three.vercel.app/", // Replace with actual live URL
      github: "/project3/github" // Replace with actual GitHub URL
    },
  ];
  
  const Work = () => {
    const [project, setProject] = useState(projects[0]);
  
    const handleSliderChange = (swiper) => {
      const currentIndex = swiper.activeIndex;
      setProject(projects[currentIndex]);
    };
  
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
           
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} project
                </h2>
                 <p>{project.description} </p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => (
                    <li key={index}>
                      {item}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/60"></div>
                <div className="flex items-center gap-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
           
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={36}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSliderChange}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.images}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <WorkSliderButton
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_ - _22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    );
  };
  
  export default Work;





