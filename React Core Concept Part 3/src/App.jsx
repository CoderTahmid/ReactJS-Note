import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  const handleSignUpSubmit = data => {
    // e.preventDefault();
    console.log("Sign up data", data);
  };

  const handleUpdateProfile = data => {
    // e.preventDefault();
    console.log("Update form data", data);
  };

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm
        formTitle={"Sign Up"}
        handleSubmit={handleSignUpSubmit}>
          <div>
            <h2>Sign Up</h2>
            <p>Please Sign up right now</p>
          </div>
      </ReuseableForm>
      <ReuseableForm
        formTitle={"Profile Update"}
        submitBtnText={"Update"}
        handleSubmit={handleUpdateProfile}>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated</p>
          </div>
      </ReuseableForm>
    </>
  )
}

export default App
