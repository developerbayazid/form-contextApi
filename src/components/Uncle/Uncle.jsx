import Cousin from '../Cousin/Cousin';

const Uncle = ({ asset }) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={`Rakib`}></Cousin>
                <Cousin name={`Sadek`}></Cousin>
                <Cousin asset={asset} name={`Sazid`}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;
