export const getServerSideProps = async () => {
  const res = await fetch(
    `https://hypermetropic-pyram.000webhostapp.com/wp-json/wp/v2/tags?post=82`
  );
  const repo = await res.json();
  return { props: { repo } };
};
import { useEffect, useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
const ubuntu = Poppins({
  weight: "400",
  subsets: ["latin"],
});
import { Images, Gride, LatestPosts } from "@/json";
const Index = ({ repo }) => {
  const [imageId, setIamgeId] = useState(1);
  const [image, setImage] = useState("");

  //  function for change image
  useEffect(() => {
    const image = Images.find((Image) => Image.id === imageId);
    setImage(image);
    const interval = setInterval(() => {
      const nextImageId = imageId === 5 ? 1 : imageId + 1;
      setIamgeId(nextImageId);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [imageId]);

  return (
    <>
      <div className="p-2">
        <div className="  container justify-center drop-shadow-2xl">
          <div className="  lg:flex   ">
            <div className="lg:w-[60%] relative">
              <img
                src={image.src}
                className="w-full max-h-[300px] lg:max-h-[550px] brightness-75"
                alt=""
              />
              <div className="absolute bottom-7 left-4  text-white p-2">
                <p className=" font-mono">{image.date}</p>
                <h3 className="font-serif capitalize  text-2xl">
                  {image.title}
                </h3>
              </div>
            </div>
            <div className="lg:w-[40%] bg-[#fcf9f7] flex flex-col justify-around">
              {Images.map((ele, key) => (
                <button
                  key={key}
                  onClick={() => {
                    setIamgeId(ele.id);
                  }}
                  className={`${
                    ele.id === imageId
                      ? "border-[#eaa480]  scale-95 "
                      : "border-[#fcf9f7]"
                  } hover:scale-95 border-l-4   font-serif flex items-center  gap-4 p-4 transition duration-300 ease-in-out transform  focus:outline-none`}
                >
                  <span
                    className={`font-bold sm:text-4xl ${
                      ele.id === imageId ? "text-[#eaa480]" : ""
                    }`}
                  >
                    0{ele.id}
                  </span>
                  <span className="text-black text-xs text-start sm:text-xl ">
                    {ele.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className=" container lg:flex gap-10 ">
          <div className="xl:w-[70%]  ">
            {Gride.map((ele, key) => (
              <div key={key}>
                <div className="md:flex   gap-8 py-12 ">
                  <img
                    src={ele.src}
                    alt={ele.title}
                    className="md:max-w-[300px]  md:max-h-[250px]"
                  />
                  <div className=" flex flex-col pt-4  gap-4">
                    <span className="text-[#eaa480] font-mono">{ele.date}</span>
                    <Link
                      href="#"
                      className=" text-black text-xl font-serif hover:text-[#eaa480] duration-500"
                    >
                      {ele.title}
                    </Link>
                    <div className="flex gap-6 items-center">
                      <span className=" text-xs font-mono">
                        by{" "}
                        <Link
                          href="#"
                          className="text-black hover:text-[#eaa480] duration-500"
                        >
                          {ele.by}
                        </Link>
                      </span>
                      <span className="flex items-center gap-1 text-xs font-mono">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-eye"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        <span>
                          <Link
                            href="#"
                            className="text-black hover:text-[#eaa480] duration-500"
                          >
                            {" "}
                            {ele.view}
                          </Link>
                        </span>
                      </span>
                      <span className="flex items-center gap-1 text-xs  font-mono">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-message-circle"
                        >
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <Link
                          href="#"
                          className="text-black hover:text-[#eaa480] duration-500"
                        >
                          {ele.comment}
                        </Link>
                      </span>
                    </div>
                    <span className={`text-black  ${ubuntu.className}`}>
                      {ele.description}
                    </span>
                    <Link href="#" className="flex items-center gap-1 pt-6">
                      <span className=" hover:text-[#eaa480] hover:pr-2 duration-500 font-mono text-sm">
                        COUNTINUE READING
                      </span>
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
                        class=" text-[#eaa480] "
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
                <img
                  src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/foo-curve.png"
                  alt=""
                />
              </div>
            ))}
            <div className="flex justify-between pt-6">
              <button className="flex items-center gap-2 border p-2 py-2 px-4 hover:text-black duration-500 text-xs ">
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
                  class="feather feather-arrow-left"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                OLDER
              </button>
              <button className="flex items-center gap-2 border py-2 px-4 hover:text-black duration-500 text-xs">
                NEWER
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
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
          <div className="lg:w-[30%] py-12">
            <div>
              <div className=" flex flex-col items-center gap-8 pb-8">
                <div className="text-center font-mono text-black flex gap-7">
                  <img
                    src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/widget-curve.jpg"
                    alt="curve"
                    className=" max-w-[150px]"
                  />
                   <span className="text-xs font-semibold text-center">ABOUT ME</span>
                  <img
                    src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/widget-curve.jpg"
                    alt="curve"
                    className=" max-w-[150px]"
                  />
                </div>
                <div class="w-[200px] h-[200px] overflow-hidden">
                  <img
                    src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/about-1024x570.jpg"
                    alt=""
                    class="object-center object-cover w-full h-full rounded-full"
                  />
                </div>
                <div class="mt-4">
                  <img
                    src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/signa.png"
                    alt=""
                    class="mb-0"
                  />
                </div>
                <span className="text-center font-mono text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt
                </span>
              </div>
              <>
                <div className="flex flex-col items-center ">
                  <div className="flex gap-6">
                    <img
                      className="max-w-[100px]  "
                      src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/widget-curve.jpg"
                      alt=""
                    />
                    <span className="font-mono text-black text-xs font-semibold text-center ">
                      SUBSCRIBE & FOLLOW
                    </span>
                    <img
                      className="max-w-[100px] "
                      src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/widget-curve.jpg"
                      alt=""
                    />
                  </div>
                  <div className=" text-black  flex items-center justify-center gap-8 py-8 ">
                    <Link href="#">
                      <div className="flex items-center duration-500 transition-colors hover:text-[#eaa480]">
                        <svg
                          className=" "
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="flex items-center duration-500 transition-colors hover:text-[#eaa480]">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="flex items-center duration-500 transition-colors hover:text-[#eaa480]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="flex items-center duration-500 transition-colors hover:text-[#eaa480]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="flex items-center duration-500 transition-colors hover:text-[#eaa480]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="flex items-center duration-500 transition-colors hover:text-[#eaa480]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
              <>
                <div className="flex flex-col items-center ">
                  <div className="flex gap-6">
                    <img
                      className="max-w-[110px]  "
                      src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/widget-curve.jpg"
                      alt=""
                    />
                    <span className="font-mono text-black text-xs font-semibold text-center">LATEST POSTS</span>
                    <img
                      className="max-w-[110px]  "
                      src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/widget-curve.jpg"
                      alt=""
                    />
                  </div>
                  <div className=" flex flex-col gap-6 pt-10">
                    {LatestPosts.map((ele, key) => (
                      <div className="flex " key={key}>
                        <img
                          src={ele.src}
                          alt={ele.title}
                          className="max-w-[100px]  max-h-[100px]"
                        />
                        <div className="flex flex-col pl-4 gap-4">
                          <Link
                            href="#"
                            className="text-black font-serif hover:text-[#eaa480] duration-500"
                          >
                            {ele.title}
                          </Link>
                          <span className=" text-sm font-semibold">
                            by{" "}
                            <Link
                              href="#"
                              className="hover:text-[#eaa480] duration-500 text-black  "
                            >
                              {ele.by}
                            </Link>
                          </span>
                        </div>
                      </div>
                    ))}

                    <img
                      src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/add.png"
                      alt=""
                      className="max-h-[300px] "
                    />
                  </div>
                </div>
              </>
              <>
                <div className="flex flex-col items-center ">
                  <div className="flex  gap-6 pt-8">
                    <img
                      className="max-w-[100px]  "
                      src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/widget-curve.jpg"
                      alt=""
                    />
                    <span className="font-mono text-black text-xs font-semibold text-center">NEWSLETTER</span>
                    <img
                      className="max-w-[100px]   "
                      src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/widget-curve.jpg"
                      alt=""
                    />
                  </div>
                  <div className=" flex items-center flex-col text-center gap-2">
                    <span>
                      Subscribe our newsletter gor get notification about new
                      updates, information discount, etc.
                    </span>
                    <div className="flex items-center">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-[#f2f4f5] p-2 "
                        placeholder="Your email"
                      />
                      <div className="bg-[#eaa480]  p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              <>
                <div className="flex flex-col items-center ">
                  <div className="flex  gap-6 pt-8">
                    <img
                      className="max-w-[100px]  "
                      src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/widget-curve.jpg"
                      alt=""
                    />
                    <span className="font-mono text-black text-xs font-semibold text-center">POPULAR TAGS</span>
                    <img
                      className="max-w-[100px] "
                      src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/widget-curve.jpg"
                      alt=""
                    />
                  </div>
                  <div className="grid grid-cols-2 text-center gap-4 p-4">
      {repo?.map((ele, key) => (
        <Link
          key={key} // Make sure to add a unique key for each element in the array
          href="#" // Replace '#' with the actual link destination
          className="border px-4 py-2 uppercase text-black hover:text-[#eaa480] duration-500"
        >
          {ele.name}
        </Link>
      ))}
    </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
