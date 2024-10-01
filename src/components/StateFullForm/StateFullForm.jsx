import { useState } from 'react';

const StateFullForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
        // if (password.length < 5) {
        //     setError('Password must be 6 character or longer');
        // } else {
        //     setError('');
        //     console.log(password);
        // }
    };
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (password.length < 5) {
            setError('Password must be 6 character or longer');
        } else {
            setError('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleName} type="text" name="name" />
                <br />
                <input onChange={handleEmail} type="email" name="email" />
                <br />
                <input
                    onChange={handlePassword}
                    type="password"
                    name="password"
                />
                <br />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default StateFullForm;
