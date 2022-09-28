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

  const formOptions = { resolver: yupResolver(schema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    try {
      const response = await axios.post(BASE_URL + "messages/", { data });
      setSubmitSuccess("Thank you for your message!");
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    }
  }

  return (
    <>
      {submitSuccess && (
        <span className="success-message">{submitSuccess}</span>
      )}
      {submitSuccess ? (
        ""
      ) : (
        <Form
          onSubmit={handleSubmit(onSubmit)}
          disabled={submitting}
          className="m-5"
        >
          {serverError && <span>{serverError}</span>}
          <Form.Group
            className="mb-3"
            controlId="formGroupEmail"
            disabled={submitting}
          >
            {errors?.name && (
              <span className="warning">{errors.name.message}</span>
            )}
            <Form.Control
              className="mb-3"
              type="text"
              name="name"
              placeholder="Full name"
              {...register("name", { required: true })}
            />
            {errors?.email && (
              <span className="warning">{errors.email.message}</span>
            )}
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ContactForm.ControlTextarea1">
            {errors?.message && (
              <span className="warning">{errors.message.message}</span>
            )}
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="message"
              placeholder="Message..."
              {...register("message", { required: true })}
            />
          </Form.Group>
          <Button type="submit">{submitting ? "Sending..." : "SEND"}</Button>
        </Form>
      )}
    </>
  );
}

export default ContactForm;
