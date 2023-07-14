 "use client"

import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { motion } from "framer-motion";
import  Menu from "@/pages/menu"
import AnimatedCharacters from "@/public/animate/animeChar";

 

export default function IndexPage() {

  const [replay, setReplay] = useState(true);
   const placeholderText = [
    { type: "heading1", text: "Do you want to know more about the greatest anime of all time?" },
    {
      type: "heading2",
      text: "You have definately come to the right place"
    }
  ];


  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  const item = {
    hidden: {
      y: "200%",
      
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
  
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };


  const letterAnimate = {
    initial: {
        y : 400
    },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1
        }
    }
}  
  return (
    <Layout>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <motion.div className="text-xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl text-purple-700"

            initial="hidden"
            // animate="visible"
            animate={replay ? "visible" : "hidden"}
            variants={container}
          >
            <div className="container">
              {placeholderText.map((item, index) => {
                return <AnimatedCharacters {...item} key={index} />;
        })}
      </div>
          </motion.div>
          {/* <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Do you want to know more about the greatest anime of all time?
            This is the best encyclopedia you will get.
          </p> */}
        </div>

      </section>
    </Layout>
  )
}


//  <motion.h1 className="text-xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl text-purple-700"
//              initial = {{opacity: 0, y:80}}
//               animate = {{opacity:1, y:0}}
//               transition = {{ 
//                   ease: "easeOut",
//                   duration:1,
//                   delay: 0.4,
//     }}  
//           >
//              Do you want to know more about the greatest anime of all time?<br className="hidden sm:inline" />
//              You have definately come to the right place
//           </motion.h1>
