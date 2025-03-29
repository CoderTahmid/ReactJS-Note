import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {

    const navigation = useNavigation();
    const location = useLocation(); // ei hook muloto show kore user kon route e geseh 

    console.log(location);
        /*
        when home button e click kora hoy tokhon 
        {pathname: '/', search: '', hash: '', state: null, key: '5o3sirkn'}
        eta output ashe
        mane ekhane show kora hocche je eta kon route e ache
        */

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