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
  const [image, setImage] = useState("");
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
      <div className="  p-4">
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
                <h3 className="font-serif capitalize  text-2xl">{image.title}</h3>
              </div>
            </div>
            <div className="lg:w-[40%] bg-[#fcf9f7] flex flex-col justify-around">
              {Images.map((ele, key) => (
                <button
                  key={key}
                  onClick={() => {
                    setIamgeId(ele.id);
                  }}
                  className={`${ele.id===imageId?"border-[#eaa480]  scale-95":"border-[#fcf9f7]"} hover:scale-95 border-l-4   font-serif flex items-center  gap-4 p-4 transition duration-300 ease-in-out transform  focus:outline-none`}
                >
                  <span className={`font-bold sm:text-4xl ${ele.id===imageId?"text-[#eaa480]":""}`}>0{ele.id}</span>
                  <span className="text-black text-xs text-start sm:text-xl">
                    {ele.title}
                  </span>
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
