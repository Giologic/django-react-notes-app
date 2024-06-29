import Form from "../components/Form";
import FormWrapper from "../components/FormWrapper";

function Login() {
  
  return (
    <FormWrapper>
      <Form route='/api/token/' method='login' />
    </FormWrapper>
  )
}

export default Login;
