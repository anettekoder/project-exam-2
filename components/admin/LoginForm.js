import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "./FormError";
import { BASE_URL, TOKEN_PATH } from "../../constant/api";

import AuthContext from "../../context/AuthContext";
import { Button, Form, FormControl } from "react-bootstrap";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  identifier: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const formOptions = { resolver: yupResolver(schema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const [_, setUser] = useContext(AuthContext);
  const router = useRouter();

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(url, data);

      if (response.data.jwt) {
        setUser(response.data);
        router.push("/admin");
      }
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="px-5">
        {loginError && (
          <FormError>{"Username or password is uncorrect"}</FormError>
        )}
        <fieldset disabled={submitting}>
          <div>
            {errors?.identifier && (
              <FormError>{errors.identifier.message}</FormError>
            )}
            <FormControl
              name="identifier"
              {...register("identifier", { required: true })}
              placeholder="Username"
              className="appearance-none rounded-none relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900   sm:text-sm"
            />
          </div>

          <div>
            {errors?.password && (
              <FormError>{errors.password.message}</FormError>
            )}
            <FormControl
              name="password"
              placeholder="Password"
              {...register("password")}
              type="password"
              className="appearance-none rounded-none relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  sm:text-sm"
            />
          </div>
          <Button type="submit" variant="primary" className="mt-3">
            {submitting ? "Loggin in..." : "Login"}
          </Button>
        </fieldset>
      </Form>
    </>
  );
}
