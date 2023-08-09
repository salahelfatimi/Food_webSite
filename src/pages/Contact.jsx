import Link from "next/link";
export const getServerSideProps = async (id) => {
  const res = await fetch(
    `https://hypermetropic-pyram.000webhostapp.com/wp-json/wp/v2/posts/55`
  );
  const repo = await res.json();
  return { props: { repo } };
};
export default function Contact({ repo }) {
  return (
    <>
    <div dangerouslySetInnerHTML={{ __html: repo.content.rendered }} />
    {/* <div class="">
      <div class="text-sm breadcrumbs container  py-6">
        <ul class=" font-medium text-base px-3">
          <li class=" space-x-1 text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-home"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <a href="/">Home</a>
          </li>

          <li>Contact</li>
        </ul>
      </div>
      <div class="relative w-full h-96 ">
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8829.481718946325!2d-7.994081773104437!3d31.63355027918627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee51028d33b7%3A0xd2c7530c07060fd5!2sJardin%20Majorelle!5e0!3m2!1sen!2sma!4v1651758907823!5m2!1sen!2sma"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <div class=" px-4 lg:px-[10rem]  ">
      <div class="bg-[#ffffff] drop-shadow-xl relative bottom-24 p-12 ">
          <div class=" grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="pb-4">
              <span class="text-black font-serif text-xl ">GET IN TOUCH</span>

              </div>
              <div class="flex justify-between gap-4">
                <input type="text" name="Name" id="Name" class="bg-[#ffffff] h-8 w-1/2 border p-4 font-mono text-xs" placeholder="Name"/>
                <input type="email" name="Email" id="Email" class="bg-[#ffffff] w-1/2 h-8 border p-4 font-mono text-xs"  placeholder="Email"/>
              </div>
              <textarea class="form-control bg-[#ffffff] border py-2 px-4 w-full font-mono text-xs" name="message" id="message"  rows="6" placeholder="Message"></textarea>
              <button class=" border px-12 py-1 rounded border-black text-black font-light">SEND</button>
            </div>
            <div class=" space-y-3">
              <div class="pb-4">
                  <span class="text-black font-serif text-xl ">INFORMATION</span>
              </div>
              <div class="space-y-6">
                    <div class="flex gap-2 items-center text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <a href="https://maps.google.com/maps?q=31.607086822890583,-7.959932486506519" class=" text-sm md:text-base">LOT NAKHIL BLOC 22 NR 359 SYBA, 40000 Marrakech, MAROC</a>
                    </div>
                    <div class="flex gap-2 items-center text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <a href="tel:+212602314804" class="  text-sm md:text-base">+212602314804</a>
                    </div>
                    <div class="flex gap-2 items-center text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> 
                    <a href = "mailto: salahfatimi16@gmail.com" class="  text-sm md:text-base">salahfatimi16@gmail.com</a>
                    </div>
                    <div class="flex gap-2 items-center text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <a href="https://github.com/salahelfatimi" class="  text-sm md:text-base">https://github.com/salahelfatimi</a>
                    </div>
              </div>
              <div class="flex items-center gap-8 pt-8 text-black">
              <Link href={`#`}><svg  class='hover:text-[#eaa480] duration-500 transition-colors'  xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>     </Link>               
                        <Link href={`#`}><svg class='hover:text-[#eaa480] duration-500 transition-colors'  xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></Link>
                        <Link href={`#`}><svg class='hover:text-[#eaa480] duration-500 transition-colors'  xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></Link>
                        <Link href={`#`}><svg class='hover:text-[#eaa480] duration-500 transition-colors' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>        </Link>  

              </div>
             
              </div>
                
          </div>
      </div>
      
      </div>
      </div> */}
    </>
  );
}
