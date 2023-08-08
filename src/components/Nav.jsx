"use client"
import { Roboto  } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const roboto = Roboto ({ subsets: ['latin'],weight: '500', })
export default function Nav(){
    const [visible,setVisible]=useState(false)
    const [open ,setOpen]=useState(false)
    
    // get oathname in lien
    const router=useRouter().pathname

    // click to hide nav in resolition in phone 
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
      const handleClickOutside = () => {
 if (!event.target.closest('.nav-container')) {
      setOpen(false);
    }      };

    // Scrool to show other nav 
    
    useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 80) {
          setVisible(true)
        } else {
            setVisible(false)
        }
      })},[])

    return(
        <>  
            <header className='md:block hidden'>
            <div className={`${visible===false?"":" relative -top-80"} `}>
                <div className={`bg-[#ffffff]  drop-shadow-xl p-3 ${roboto.className}`}>
                    <div className=" container flex  items-center justify-between">
                        <div className="flex  items-center ">
                            <input type="text" placeholder="Search and hit enter..." name="search" id="search"  className="focus:border-none p-1 outline-none text-black text-xs font-medium" />
                            <svg  xmlns="http://www.w3.org/2000/svg" width="16" className="text-black hover:text-[#eaa480] duration-500 transition-colors" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                        <div className="text-black flex gap-4">
                        <Link href={`#`}><svg  className='hover:text-[#eaa480] duration-500 transition-colors'  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>     </Link>               
                        <Link href={`#`}><svg className='hover:text-[#eaa480] duration-500 transition-colors'  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></Link>
                        <Link href={`#`}><svg className='hover:text-[#eaa480] duration-500 transition-colors'  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></Link>
                        <Link href={`#`}><svg className='hover:text-[#eaa480] duration-500 transition-colors' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>        </Link>  
                        </div>
                    </div>
                    
                </div>
                <div className={`bg-[#ffffff] pt-6 pb-10 ${roboto.className}  `}>
                    <div className=' container flex flex-col items-center  gap-4'>
                        <Image src="/logo.png"   width={100} height={500}  alt='logo'/>
                        <div className='  text-black font-medium text-xs flex  gap-14 '>
                            <Link className={`hover:text-[#eaa480] duration-500 ${router === '/' ? 'text-[#eaa480]' : ''}`} href={`/`}>HOME</Link>
                            <Link className={`hover:text-[#eaa480] duration-500 ${router === '/Pages' ? 'text-[#eaa480]' : ''}`} href={`#`}>PAGES</Link>
                            <Link className={`hover:text-[#eaa480] duration-500 ${router === '/Categories' ? 'text-[#eaa480]' : ''}`} href={`#`}>CATEGORIES</Link>
                            <Link className={`hover:text-[#eaa480] duration-500 ${router === '/Travel' ? 'text-[#eaa480]' : ''}`} href={`#`}>TRAVEL</Link>
                            <Link className={`hover:text-[#eaa480] duration-500 ${router === '/About' ? 'text-[#eaa480]' : ''}`} href="/About">ABOUT</Link>
                            <Link className={`hover:text-[#eaa480] duration-500 ${router === '/Contact' ? 'text-[#eaa480]' : ''}`} href={`/Contact`}>CONTACT</Link>

                        </div>
                    </div>
                </div>
            </div>
            <div className={`bg-[#ffffff]  drop-shadow-xl  p-3 fixed top-0  w-full z-[999] ${roboto.className} ${visible===true?"duration-700":"hidden"}`} >
                <div className='container flex justify-between items-center'>
                    <Image src="/logo.png" width={100} height={500} alt='logo' />
                    <div className='text-black  font-medium text-xs flex gap-10'>
                            <Link className={`hover:text-[#eaa480] duration-500 ${router === '/' ? 'text-[#eaa480]' : ''}`} href={`/`}>HOME</Link>
                            <Link className={`hover:text-[#eaa480] duration-500 ${router === '/Pages' ? 'text-[#eaa480]' : ''}`} href={`#`}>PAGES</Link>
                            <Link className={`hover:text-[#eaa480] duration-500 ${router === '/Categories' ? 'text-[#eaa480]' : ''}`} href={`#`}>CATEGORIES</Link>
                            <Link className={`hover:text-[#eaa480] duration-500 ${router === '/Travel' ? 'text-[#eaa480]' : ''}`} href={`#`}>TRAVEL</Link>
                            <Link className={`hover:text-[#eaa480] duration-500 ${router === '/About' ? 'text-[#eaa480]' : ''}`} href="/About">ABOUT</Link>
                            <Link className={`hover:text-[#eaa480] duration-500 ${router === '/Contact' ? 'text-[#eaa480]' : ''}`} href={`/Contact`}>CONTACT</Link>
                    </div>
                </div>
            </div>
            </header>
            <header className='md:hidden block pb-16'>
                <div className={`bg-[#ffffff]  drop-shadow-xl   p-3 fixed top-0  w-full z-[999]   ${roboto.className} nav-container`} >
                    <div className='container flex justify-between items-center'>
                        <Image src="/logo.png" width={100} height={500} alt='logo' />
                        <div className='flex gap-2'>
                            <div className="flex  items-center  ">
                                <input type="text" placeholder="Search and hit enter..." name="search" id="search"  className="focus:border-none  p-1 outline-none text-black text-xs font-medium" />
                            </div>
                            <button onClick={()=>{setOpen(!open)}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>

                        </div>

                    </div>
                </div>
                <div className={`bg-[#ffffff]  drop-shadow-xl fixed  top-0 z-50 w-full  p-3 pt-8  ${roboto.className} nav-container ${open? "duration-700  " : "-translate-y-96 duration-700 "} `} >
                <div className={`container text-black pt-8  font-medium text-xs flex flex-col items-center  gap-8   `}>
                                    
                                    <Link onClick={() => setOpen(false)} className={`hover:text-[#eaa480] duration-500 ${router === '/' ? 'text-[#eaa480]' : ''}`} href={`/`}>HOME</Link>
                                    <Link onClick={() => setOpen(false)} className={`hover:text-[#eaa480] duration-500 ${router === '/Pages' ? 'text-[#eaa480]' : ''}`} href={`#`}>PAGES</Link>
                                    <Link onClick={() => setOpen(false)} className={`hover:text-[#eaa480] duration-500 ${router === '/Categories' ? 'text-[#eaa480]' : ''}`} href={`#`}>CATEGORIES</Link>
                                    <Link onClick={() => setOpen(false)} className={`hover:text-[#eaa480] duration-500 ${router === '/Travel' ? 'text-[#eaa480]' : ''}`} href={`#`}>TRAVEL</Link>
                                    <Link onClick={() => setOpen(false)} className={`hover:text-[#eaa480] duration-500 ${router === '/About' ? 'text-[#eaa480]' : ''}`} href="/About">ABOUT</Link>
                                    <Link onClick={() => setOpen(false)} className={`hover:text-[#eaa480] duration-500 ${router === '/Contact' ? 'text-[#eaa480]' : ''}`} href={`/Contact`}>CONTACT</Link>
                </div>
                </div>
            </header>
        
        </>
    )
}