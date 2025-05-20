import Hero from "./_components/hero";
import Metatag from "../../components/resusable/meta-tag";

const Home = () =>{
    return (
        <div>
            <Metatag title="Home | Leap Chanvuthy" description="" />
            <Hero />
            <h1>Home</h1>
            <p>This is the Home page.</p>
        </div>
    )
}

export default Home;