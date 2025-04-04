import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const AssetContext = createContext("Gold");
    /*
    eta ke must export korte hbeh
    naile onno jayga theke import kora jabe nah
    */
const Grandpa = () => {
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <AssetContext.Provider value="gold">
                    {/*
                    according to Jhankar bhai ekhane provider boshano mane hocche
                    tower boshano
                    mane think it like e network system
                    tower boshano hoise ekhn shei tower theke signal recieve korbe bibhinno phone
                    I mean bibhinno childs
                    */}
                <section className="flex">
                    <Dad></Dad>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;