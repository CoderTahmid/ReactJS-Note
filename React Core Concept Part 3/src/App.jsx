import './App.css'
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
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm
        formTitle={"Sign Up"}
        handleSubmit={handleSignUpSubmit}>
      </ReuseableForm>
      <ReuseableForm
        formTitle={"Profile Update"}
        submitBtnText={"Update"}
        handleSubmit={handleUpdateProfile}>
      </ReuseableForm>
    </>
  )
}

export default App
