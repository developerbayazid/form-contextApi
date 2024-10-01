import { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const AssetContext = createContext('Gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const asset = 'Diamond';
    const [money, setMoney] = useState(1000);

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <h4>Net Money: {money} TK</h4>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="Gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;
