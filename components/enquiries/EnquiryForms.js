import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../constant/api";
import { Button, Form } from "react-bootstrap";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(5, "Name must contain minimum 5 letters"),
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
  from: yup
    .date()
    .required("Please choose the required start date of your visit"),
  to: yup
    .date()
    .when(
      "from",
      (from, schema) =>
        from &&
        schema.min(from, "Your end date can not be before your start date")
    )
    .required("Please choose the required end date of your visit"),
});

function EnquiryForm({ hotelName }) {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const formOptions = { resolver: yupResolver(schema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    console.log(data);

    try {
      const response = await axios.post(BASE_URL + "enquiries/", { data });
      console.log("response", response.data);
      setSubmitSuccess("Thank you for your booking!");
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          {serverError && <span>{serverError}</span>}
          <div className="h5 py-4">
            Book your reservation at{" "}
            <abbr className="fw-bold">{hotelName}</abbr>
          </div>
          <Form.Control
            hidden
            name="hotel"
            type="text"
            defaultValue={hotelName}
            {...register("hotel", { required: true })}
          />
          {errors?.name && (
            <span className="warning">{errors.name.message}</span>
          )}
          <Form.Control
            className="w-64 focus:border-black focus:ring-black md:max-w-lg md:w-full mb-4"
            type="text"
            name="name"
            placeholder="Full name"
            {...register("name", { required: true })}
          />
          {errors?.email && (
            <span className="warning">{errors.email.message}</span>
          )}
          <Form.Control
            className="w-64 focus:border-black focus:ring-black md:max-w-lg md:w-full mb-4"
            type="email"
            name="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />

          <div className="flex flex-col md:flex-row justify-center items-start">
            <div className="flex flex-col justify-center items-start">
              <Form.Label className="font-heading">From</Form.Label>
              {errors?.from && (
                <span className="warning">{errors.from.message}</span>
              )}
              <Form.Control
                className="w-64 mb-4 md:mr-4 focus:border-black focus:ring-black md:w-56"
                type="date"
                name="from"
                {...register("from", { required: true })}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <Form.Label className="font-heading">To</Form.Label>
              {errors?.to && (
                <span className="warning">{errors.to.message}</span>
              )}
              <Form.Control
                className="w-64  mb-4 focus:border-black focus:ring-black md:w-56"
                type="date"
                name="to"
                {...register("to", { required: true })}
              />
            </div>
          </div>

          <Button type="submit" variant="primary">
            {submitting ? "Booking..." : "Book reservation"}
          </Button>
        </Form>
      )}
    </>
  );
}

export default EnquiryForm;
