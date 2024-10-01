import useInputState from '../../hooks/useInputState';

const HookForm = () => {
    // const [name, handleName] = useInputState('');
    const emailState = useInputState('hasan@live.com');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailState.value);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input
                    value={name}
                    onChange={handleName}
                    type="text"
                    name="name"
                /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="text" name="password" />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default HookForm;
