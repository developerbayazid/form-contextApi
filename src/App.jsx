import './App.css';
import Grandpa from './components/Grandpa/Grandpa';
// import ReusableForm from './components/ReusableForm/ReusableForm';
// import HookForm from './components/HookForm/HookForm';
// import RefForm from './components/RefForm/RefForm';
// import SimpleForm from './components/SimpleForm/SimpleForm';
// import StateFullForm from './components/StatefullForm/StatefullForm';

function App() {
    // const handleSignUpForm = (data) => {
    //     console.log('Sign Up form Data', data);
    // };
    // const handleProfileUpdate = (data) => {
    //     console.log('Update Profile', data);
    // };
    return (
        <>
            <h1>Form Master</h1>
            {/* <SimpleForm></SimpleForm> */}
            {/* <StateFullForm></StateFullForm> */}
            {/* <RefForm></RefForm> */}
            {/* <HookForm></HookForm> */}
            {/* <ReusableForm
                formTitle={`Sign Up Form`}
                handleSubmit={handleSignUpForm}
                btnTitle="Sign Up"
            >
                <div>
                    <h4>SignUp Now</h4>
                    <p>Sign Up now easily</p>
                </div>
            </ReusableForm>
            <ReusableForm
                formTitle={`Update Profile Form`}
                handleSubmit={handleProfileUpdate}
                btnTitle="Update Profile"
            >
                <div>
                    <h4>Profile Update</h4>
                    <p>Update Your Profile easily</p>
                </div>
            </ReusableForm> */}
            <Grandpa></Grandpa>
        </>
    );
}

export default App;
