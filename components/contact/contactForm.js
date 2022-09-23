import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../constant/api";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(5, "Please enter your full name"),
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "Your message must be more then 10 characters"),
});

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    console.log(data);

    try {
      const response = await axios.post(BASE_URL + "messages/", { data });
      console.log("response", response.data);
      setSubmitSuccess("Thank you for your message!");
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    }
  }

  console.log(errors);

  return (
    <>
      {submitSuccess && (
        <span className="text-center py-20 text-2xl border-gray-500 border-b-2 w-full mb-5 xl:border-0">
          {submitSuccess}
        </span>
      )}
      {submitSuccess ? (
        ""
      ) : (
        <Form
          onSubmit={handleSubmit(onSubmit)}
          disabled={submitting}
          className="m-5"
        >
          {serverError && (
            <span className="text-center p-1 mb-5 w-full bg-red-400 border-red-600 border-2">
              {serverError}
            </span>
          )}
          <Form.Group
            className="mb-3"
            controlId="formGroupEmail"
            disabled={submitting}
          >
            <Form.Control
              className="mb-3"
              type="text"
              name="name"
              placeholder="Full name *"
              {...register("name", { required: true })}
            />
            {errors?.name && (
              <span className="text-center p-1 mb-5 w-full bg-yellow-400 border-yellow-600 border-2">
                {errors.name.message}
              </span>
            )}
            <Form.Control
              type="email"
              name="email"
              placeholder="Email *"
              {...register("email", { required: true })}
            />
            {errors?.email && (
              <span className="text-center p-1 mb-5 w-full bg-yellow-400 border-yellow-600 border-2">
                {errors.email.message}
              </span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="message"
              placeholder="Message... *"
              {...register("message", { required: true })}
            />
            {errors?.message && (
              <span className="text-center p-1 mb-5 w-full bg-yellow-400 border-yellow-600 border-2">
                {errors.message.message}
              </span>
            )}
          </Form.Group>
          <Button
            type="submit"
            className="w-full md:w-48 h-12 md:h-14 font-heading  text-white hover:text-blue-500 text-xl md:text-2xl bg-blue-500 hover:bg-transparent border-blue-500 border-2 tracking-widest transition ease-out duration-300"
          >
            {submitting ? "Sending..." : "SEND"}
          </Button>
        </Form>
      )}
    </>
  );
}

export default ContactForm;
