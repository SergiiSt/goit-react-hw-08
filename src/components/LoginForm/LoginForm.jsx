import { Field, Form, Formik } from "formik";
import { logIn } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(logIn(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="email">
          Email:
          <Field type="email" name="email" />
        </label>
        <label htmlFor="password">
          Password:
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
