"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@radix-ui/react-select'

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: " 01538280537"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "muradchowdhury0077@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Dhaka Bangladesh"
  }
]
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
      className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-lg">
              <h3 className="text-4xl text-accent"> Let&apos;s go work together</h3> {/* Changed `'` to `&apos;` */}
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic repudiandae eum praesentium neque quod. Vel nam architecto soluta expedita.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="tel" placeholder="Phone number" />
              </div>
              <Textarea
                className="h-[280px]"
                placeholder="Type your message here"
              />
              <Button size="md" className="max-w-40"> Send Message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {
                info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
};

export default Contact;


{/*
  "use client"
  import React from 'react'
  import { Button } from '@/components/ui/button'
  import { Input } from '@/components/ui/input'
  import { Textarea } from '@/components/ui/textarea'
  import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@radix-ui/react-select'
  
  import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'
  
  const info = [
    {
      icon: <FaPhoneAlt/>,
      title: "Phone",
      description: " 01538280537"
    },
    {
      icon: <FaEnvelope/>,
      title: "Email",
      description: "muradchowdhury0077@gmail.com"
    },
    {
      icon: <FaMapMarkedAlt/>,
      title: "Address",
      description: "Dhaka Bangladesh"
    }
  ]
  import { motion } from "framer-motion";
  
  const Contact = () => {
  
    return (
      <motion.section initial={{ opacity:0}} animate = {{ opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
       }}
       className="py-6">
         <div className=" container mx-auto ">
           <div className="flex flex-col xl:flex-row gap-[30px]">
              <div className=" xl:w-[54%] order-2 xl:order-none">
                <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-lg "> 
                  <h3 className=" text-4xl text-accent"> Let's go work together</h3>
                  <p className=" text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic repudiandae eum praesentium neque quod. Vel nam architecto soluta expedita. </p>
                 <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                   <Input type="firstname" placeholder="Firstname"/>
                   <Input type="lastname" placeholder="Lastname"/>
                   <Input type="email" placeholder=" Emaill address"/>
                   <Input type="phone" placeholder="Phone number"/>
                 </div>
                   
                  <Textarea 
                    className= "h-[280px]"
                    placeholder="Type your message here"
                  />
                  <Button size="md" className=" max-w-40"> Send Message</Button>
                </form>
              </div>
              <div className=" flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                <ul className=" flex flex-col gap-10">
                  {
                    info.map((item, index) => {
                      return(
                        <li key={index} className=" flex items-center gap-6"> 
                          <div className=" w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                            <div className=" text-[28px]">{item.icon} </div>
                          </div>
                          <div className="flex-1">
                             <p className=" text-white/60">{item.title} </p>
                             <h3 className=" text-xl">{item.description} </h3>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
           </div>
         </div>
       </motion.section>
    )
  };
  
  export default Contact

*/}