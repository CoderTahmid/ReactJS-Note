import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = () => {

    const gift = useContext(AssetContext)
    /*
    ekhane AssetContext'r value "gold" arki
    er karon sobche highest parent component e er value gold hishabe dewa hoise
    and that's why gift'r value gold
    */

    return (
        <div>
            <h2>Special Person</h2>
            <p>Has : {gift}</p>
        </div>
    );
};

export default Special;