export const getServerSideProps = async (id) => {
    const res = await fetch(`https://hypermetropic-pyram.000webhostapp.com/wp-json/wp/v2/posts/1`)
    const repo = await res.json()
    return { props: { repo } }
  }

const Index = ({repo}) => {
    console.log(repo)
    return(
        <div>Home</div>
    ) ;
};

export default Index;