import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);
/*
eta ke must export korte hbeh
naile onno jayga theke import kora jabe nah
*/
const Grandpa = () => {

    const [money, setMoney] = useState(1000);

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net money : {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
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
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;