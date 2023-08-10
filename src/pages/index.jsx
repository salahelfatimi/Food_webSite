import { useEffect, useState } from "react";
import Link from "next/link";
// export const getServerSideProps = async (id) => {
//   const res = await fetch(
//     `https://hypermetropic-pyram.000webhostapp.com/wp-json/wp/v2/posts/82`
//   );
//   const repo = await res.json();
//   return { props: { repo } };
// };
const Index = ({ repo }) => {
  const [imageId, setIamgeId] = useState(1);
  const [srcImage, setSrcImage] = useState("");
  const Images = [
    {
      id: 1,
      title: " FOODY A Closer Look At Our Front Porch Items From Lowe s",
      date: "MAY 8, 2018 /FOODY ",
      src: "https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/1-e1691678752306.jpg",
    },
    {
      id: 2,
      title: " FOODY  12 Beautiful Vegan Panna Cottas",
      date: "MAY 8, 2018 /FOODY ",
      src: "https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/6.jpg",
    },
    {
      id: 3,
      title: " FOODY  Quick Vegan Enchiladas with Sweet Potato Sauce",
      date: "MAY 8, 2018 /FOODY ",
      src: "https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/2.jpg",
    },
    {
      id: 4,
      title: " FOODY  Instant Pot Mushroom Stroganoff with Vodka",
      date: "MAY 8, 2018 /FOODY ",
      src: "https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/3.jpg",
    },
    {
      id: 5,
      title: " The Most Popular Recipe Last Month",
      date: "MAY 8, 2018 /FOODY",
      src: "https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/5.jpg",
    },
  ];
  useEffect(() => {
    const image = Images.find((Image) => Image.id === imageId);
    setSrcImage(image.src);
    const interval = setInterval(() => {
      const nextImageId = imageId === 4 ? 1 : imageId + 1;
      setIamgeId(nextImageId);
    }, 5000); 

    return () => {
      clearInterval(interval); 
    };
  }, [imageId]);

  return (
    <>
      <div class="  p-4">
        <div class="  container justify-center drop-shadow-2xl">
          <div class="  lg:flex   ">
            <div class="lg:w-[60%] ">
              <img src={srcImage} class="w-full max-h-[300px]  lg:max-h-[550px]" alt="" />
            </div>
            <div class="lg:w-[40%] bg-[#fcf9f7] flex flex-col justify-around">
              {Images.map((ele, key) => (
                <button
                  key={key}
                  onClick={() => {
                    setIamgeId(ele.id);
                  }}
                  class="font-serif flex items-center  gap-2 p-4 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
                >
                  <span class="font-bold sm:text-4xl">0{ele.id}</span>
                  <span class="text-black text-xs text-start sm:text-xl">{ele.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
