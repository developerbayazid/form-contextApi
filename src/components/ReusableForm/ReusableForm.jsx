import PropTypes from 'prop-types';

const ReusableForm = ({
    formTitle = '',
    handleSubmit,
    btnTitle = 'Submit',
    children,
}) => {
    const handleLocalSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };
        handleSubmit(data);
    };

    return (
        <div>
            <span>{children}</span>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" placeholder="Enter Your Name" />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                />
                <br />
                <br />
                <button type="submit">{btnTitle}</button>
            </form>
        </div>
    );
};
ReusableForm.propTypes = {
    formTitle: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    btnTitle: PropTypes.string,
    children: PropTypes.node,
};
export default ReusableForm;
