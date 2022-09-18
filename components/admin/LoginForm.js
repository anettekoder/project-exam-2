// import { useState, useContext } from "react";
// import { useRouter } from "next/router";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";

// import AuthContext from "../../context/AuthContext";
// import { BASE_URL } from "../../constant/api";

// const schema = yup.object().shape({
//   identifier: yup.string().required("Please enter your username"),
//   password: yup.string().required("Please enter your password"),
// });

// function LoginForm() {
//   const [submitting, setSubmitting] = useState(false);
//   const [loginError, setLoginError] = useState(null);
//   const router = useRouter();

//   const { register, handleSubmit, errors } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const [auth, setAuth] = useContext(AuthContext);

//   async function onSubmit(data) {
//     setSubmitting(true);
//     setLoginError(null);

//     try {
//       const response = await axios.post(BASE_URL + "auth/local", data);
//       setAuth(response.data);
//       router.push("/admin");
//     } catch (error) {
//       console.log("error", error);
//       setLoginError("Wrong username or password");
//     }
//   }

//   return (
//     <form
//       className="flex justify-center items-center flex-col w-4/5 font-heading"
//       onSubmit={handleSubmit(onSubmit)}
//       disabled={submitting}
//     >
//       {loginError && (
//         <span className="text-center p-1 mb-5 w-full bg-red-400 border-red-600 border-2">
//           {loginError}
//         </span>
//       )}
//       <fieldset
//         className="flex justify-center items-center flex-col w-full"
//         disabled={submitting}
//       >
//         <div className="relative flex w-full flex-wrap items-stretch mb-3">
//           <input
//             className="bg-transparent placeholder-white border-white border-2 w-full mb-2 relative"
//             type="text"
//             name="identifier"
//             placeholder="Username"
//             ref={register}
//           />
//           <span className="z-10 h-full  font-normal absolute text-center  text-base items-center justify-center w-8 right-0 pr-3 py-3"></span>
//           {errors.identifier && (
//             <span className="text-center p-1 mb-5 w-full  border-2">
//               {errors.identifier.message}
//             </span>
//           )}
//         </div>
//         <div className="relative flex w-full flex-wrap items-stretch mb-3">
//           <input
//             className="bg-transparent placeholder-white border-white border-2 w-full mb-2"
//             type="password"
//             name="password"
//             placeholder="Password"
//             autoComplete="on"
//             ref={register}
//           />
//           <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"></span>
//           {errors.password && (
//             <span className="text-center p-1 mb-5 w-full bg-yellow-400 border-yellow-600 border-2">
//               {errors.password.message}
//             </span>
//           )}
//         </div>
//         <button
//           className="bg-blue-500 placeholder-white border-blue-500 border-2 w-full py-2 text-xl"
//           type="submit"
//         >
//           {submitting ? "Logging in..." : "Login"}
//         </button>
//       </fieldset>
//     </form>
//   );
// }

// export default LoginForm;

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
  username: yup.string().required("Please enter your username"),
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

      if (response.data.token) {
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
