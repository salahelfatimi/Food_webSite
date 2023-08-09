import Image from "next/image";

export const getServerSideProps = async () => {
  const baseURL = process.env.NEXT_PUBLIC_API_WORDPRESS;
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
      
    </>
  );
}
