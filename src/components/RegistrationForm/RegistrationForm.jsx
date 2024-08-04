import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm;
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form action="">
        <label htmlFor="name">
          Name:
          <Field type="text" name="name" />
        </label>
        <label htmlFor="email">
          Email:
          <Field type="email" name="email" />
        </label>
        <label htmlFor="password">
          Password:
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
