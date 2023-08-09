import Image from "next/image";

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://hypermetropic-pyram.000webhostapp.com/wp-json/wp/v2/posts/1`
  );
  const repo = await res.json();
  return { props: { repo } };
};
export default function About({ repo }) {
  return (
    <>
     
      <div dangerouslySetInnerHTML={{ __html: repo.content.rendered }} />
      {/* <div class="bg-[#ffffff] p-8">
        <div class="container mx-auto">
          <div class="flex justify-center">
            <div class="w-full md:w-10/12">
              <div class="text-center">
                <h2 class="text-xl font-semibold">About Us</h2>
                <p class="text-gray-600">New unique project about food</p>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="w-full md:w-10/12">
              <div class="mt-4">
                <img
                  src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/about-1024x570.jpg"
                  alt=""
                  class="w-full"
                />
                <p class="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p class="mt-4 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi chitecto beatae
                  vitae dicta sunt explicabo.
                </p>
                <blockquote class="mt-4 italic border-l-4 border-gray-400 pl-4">
                  <p class="text-gray-600">
                    “That’s not to say you’ll have the exact same thing if you
                    stop by: the restaurant’s menus change constantly, based on
                    seasonal ingredients.”
                  </p>
                </blockquote>
                <p class="mt-4 text-gray-700">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem.
                </p>
                <div class="flex flex-col md:flex-row mt-4 gap-2">
                  <div class="w-full md:w-6/12">
                    <img
                      src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/19.jpg"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="w-full md:w-6/12 mt-4 md:mt-0">
                    <img
                      src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/20.jpg"
                      alt=""
                      class="w-full"
                    />
                  </div>
                </div>
                <p class="mt-4 text-gray-700">
                  Quisque nunc erat, pharetra ut cursus quis, tristique eu enim.
                  Maecenas elementum dolor vel erat vestibulum malesuada.
                  Pellentesque sed magna porta, finibus elit et, mollis lacus.
                  Proin elementum metus nec tincidunt iaculis. Donec ut
                  vulputate sem, venenatis ultricies felis. Praesent convallis
                  mauris leo, a dignissim lorem bibendum eget. Duis sodales urna
                  sed odio maximus egestas. Nulla molestie consequat mattis.
                </p>
                <p class="mt-4 text-gray-700">
                  Vestibulum non tristique metus. Morbi tempus nibh sed quam
                  fringilla fringilla a a neque. In aliquet ex vitae eros
                  convallis dictum. Suspendisse vulputate mauris id tincidunt
                  rhoncus. Vestibulum sit amet nibh nisi.{" "}
                </p>
                <ul class="list-disc list-inside mt-4 pl-8 text-gray-600">
                  <li>
                    Quisque bibendum justo aliquet, aliquam mauris condimentum.
                  </li>
                  <li>Sed malesuada neque tempus, euismod magna ut.</li>
                  <li>Vivamus lacinia nibh ac lorem mattis.</li>
                  <li>Phasellus malesuada dolor eget velit cursus.</li>
                  <li>
                    Donec finibus ipsum a turpis volutpat, et tempor enim
                    varius.
                  </li>
                  <li>Maecenas laoreet nunc sed odio placerat.</li>
                </ul>
                <p class="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div class="mt-4 flex justify-center">
                  <img
                    src="https://hypermetropic-pyram.000webhostapp.com/wp-content/uploads/2023/08/signa.png"
                    alt=""
                    class="mb-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
