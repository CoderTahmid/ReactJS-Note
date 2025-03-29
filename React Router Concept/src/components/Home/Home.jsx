import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {

    const navigation = useNavigation();

    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? 
                <p>Loading...</p> : 
                <Outlet></Outlet>
                /*
                ekhane ja kora hocche muloto 
                useNavigation use kore 
                loading screen ke handle kora
                jodi status loading hoy tahole
                "Loading..." likha ashbe
                ar statsu loading na hoile <outlet/> component ta show korbe arki
                */
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;