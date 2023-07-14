import { Separator } from "@/components/ui/separator"
import ServerIcon  from "@/styles/ServerIcon"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from  "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {  useSupabaseClient } from '@supabase/auth-helpers-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

    
const Page = () => {
  const supabase = useSupabaseClient()
  const router = useRouter()

// async function signOut() {
//   const { error } = await supabase.auth.signOut();
//   if (error) console.log('Error signing out:', error.message);
  
// }
 

    return (
 <section className=''>
  <div className="flex">
    <aside id="separator-sidebar" className="fixed top-0 left-0 z-40 h-screen w-[4.5rem] -translate-x-full transition-transform sm:translate-x-0" aria-label="Sidebar">
      {/* First Sidebar */}
      <div className="h-full overflow-y-auto bg-stone-800 px-3 py-4 dark:bg-gray-800">
        <div className="pt-2 pb-14">
          <Image
            src="/images/discord_violet.svg"
            alt=" "
            width={50}
            height={50} 
            className="bg-transparent"
          />
        </div>
        <div className="grid-row-4 grid gap-6">
          <ServerIcon image="/images/uzumaki.jpg" />
          <ServerIcon image="/images/uchiha.jpg" />
          <ServerIcon image="/images/nagato.jpg" />
          {/* <logoutButton className = ""/> */}
         <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
        </div>
        <div className='pl-6 pt-32'>
          
        </div>
      </div>
    </aside>

    <aside className="fixed top-0 z-40 h-screen w-[10rem] translate-x-[-15rem] bg-gray-100 transition-transform sm:left-[19.5rem] sm:w-[12rem]  ">
      {/* Second Sidebar */}
      <div className="h-full  overflow-y-auto bg-neutral-700 px-3 py-4 dark:bg-gray-800"> 
        {/* <div className="flex">          
        <h1 className=" scroll-m-20 text-sm font-semibold tracking-tight text-gray-200">Official Server...</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-10 h-5 w-5 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg> 
        </div> */}
        {/* <Separator />  */}

         <Accordion type="single" collapsible className="w-full text-white">
          <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"  
             viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-[146px] h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
            </svg>

          <Separator className=" w-[192px] -translate-x-3"/>
          <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>
    </aside>
  </div>
  <div className="h-screen bg-neutral-600">

   
  </div>
     
</section>


    
    
    )
} 
export default Page 

