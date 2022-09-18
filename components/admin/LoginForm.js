import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "./FormError";
import { BASE_URL, TOKEN_PATH } from "../../constant/api";

import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

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
      console.log("response", response.data);

      if (response.data.jwt) {
        router.push("/admin");
      }

      setUser({ name: response.data.user_display_name });
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="px-5">
        {loginError && (
          <FormError>{"Username or password is uncorrect"}</FormError>
        )}
        <fieldset disabled={submitting}>
          <div>
            <input
              name="username"
              {...register("username", { required: true })}
              placeholder="Username"
              className="appearance-none rounded-none relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900   sm:text-sm"
            />
            {errors?.username && (
              <FormError>{errors.username.message}</FormError>
            )}
          </div>

          <div>
            <input
              name="password"
              placeholder="Password"
              {...register("password")}
              type="password"
              className="appearance-none rounded-none relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  sm:text-sm"
            />
            {errors?.password && (
              <FormError>{errors.password.message}</FormError>
            )}
          </div>
          <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium">
            {submitting ? "Loggin in..." : "Login"}
          </button>
        </fieldset>
      </form>
    </>
  );
}
