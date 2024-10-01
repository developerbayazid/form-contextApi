import { useContext } from 'react';
import Brother from '../Brother/Brother';
import { MoneyContext } from '../Grandpa/Grandpa';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Dad = ({ asset }) => {
    const money = useContext(MoneyContext);
    return (
        <div className="grandpa">
            <h2>Dad</h2>
            <section className="flex">
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
            <h4>Money: {money} TK</h4>
        </div>
    );
};

export default Dad;
