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
   
    </>
  );
}
