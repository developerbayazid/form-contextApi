import { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <h4>Money: {money} TK</h4>
            <section className="flex">
                <Cousin name={`Sabiha`}></Cousin>
                <Cousin name={`Sadika`}></Cousin>
                <Cousin name={`Belatunnesa`}></Cousin>
            </section>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 Tk</button>
        </div>
    );
};

export default Aunty;
