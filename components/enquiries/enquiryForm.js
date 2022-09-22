import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../constant/api";
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
  from: yup
    .date()
    .required("Please choose the date you wish to start your visit"),
  to: yup
    .date()
    .when(
      "from",
      (from, schema) =>
        from &&
        schema.min(from, "Your end date can not be before your start date")
    )
    .required("Please choose the date you wish to end your visit"),
});

function EnquiryForm({ hotelName }) {
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
      const response = await axios.post(BASE_URL + "enquiries/", { data });
      console.log("response", response.data);
      setSubmitSuccess("Thank you for your booking!");
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    }
  }

  console.log(errors);

  return (
    <>
      {submitSuccess && (
        <span className="text-center py-20 text-2xl">{submitSuccess}</span>
      )}
      {submitSuccess ? (
        ""
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center font-paragraph"
        >
          {serverError && (
            <span className="bg-red-400 border-red-600 border-2">
              {serverError}
            </span>
          )}
          <input
            className="hidden"
            name="hotel"
            defaultValue={hotelName}
            {...register("hotel", { required: true })}
          />
          <input
            className="w-64 focus:border-black focus:ring-black md:max-w-lg md:w-full mb-4"
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
          <input
            className="w-64 focus:border-black focus:ring-black md:max-w-lg md:w-full mb-4"
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
          <div className="flex flex-col md:flex-row justify-center items-start">
            <div className="flex flex-col justify-center items-start">
              <label className="font-heading">From *</label>
              <input
                className="w-64 mb-4 md:mr-4 focus:border-black focus:ring-black md:w-56"
                type="date"
                name="from"
                {...register("from", { required: true })}
              />
              {errors?.from && (
                <span className="w-64 md:w-56 bg-yellow-400 border-yellow-600 border-2">
                  {errors.from.message}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-center items-start">
              <label className="font-heading">To *</label>
              <input
                className="w-64  mb-4 focus:border-black focus:ring-black md:w-56"
                type="date"
                name="to"
                {...register("to", { required: true })}
              />
              {errors?.to && (
                <span className="w-64 md:w-56 text-center bg-yellow-400 border-yellow-600 border-2 mb-5">
                  {errors.to.message}
                </span>
              )}
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-64 h-12 text-white hover:text-greenColor text-xl bg-greenColor hover:bg-transparent border-greenColor border-2 tracking-widest transition ease-out duration-300"
          >
            {submitting ? "Booking..." : "Book reservation"}
          </Button>
        </form>
      )}
    </>
  );
}

export default EnquiryForm;
