import Form from "../components/Form";
import FormWrapper from "../components/FormWrapper";

function Register() {
  return (
      <FormWrapper>
        <Form route='/api/user/register/' method='register' />
      </FormWrapper>
  );
}

export default Register;
