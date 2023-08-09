import Link from "next/link";
export const getServerSideProps = async () => {
  const baseURL = process.env.NEXT_PUBLIC_API_WORDPRESS;
  const res = await fetch(
    `${baseURL}/55`
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
