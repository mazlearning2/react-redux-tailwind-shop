import { toast } from "react-toastify";
import { FormInput, SubmitButton } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="Username" name="username" defaultValue='userTest' />
        <FormInput type="email" label="Email" name="email" defaultValue='userTest@gmail.com' />
        <FormInput type="password" label="Password" name="password" defaultValue='123456789' />
        <div className="mt-4">
          <SubmitButton text="REGISTER" />
        </div>
        <p className="text-center">
          Already member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
