import Header from "../components/common/Header";
import Gallery from "../components/Pages/gallery/Gallery";
import Techniques from "../components/Pages/home/Techniques";
import JoiningSafeCare from "../components/Pages/home/joining";
import Footer from "../components/common/Footer";

const page = () => {
    return ( <>
        <Header/>
        <Gallery />
        <Techniques />
        <JoiningSafeCare />
        <Footer />
    </> );
}
 
export default page;