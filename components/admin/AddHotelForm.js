import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthContext from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BASE_URL } from "../../constant/api";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter hotel name")
    .min(4, "Hotel name must contain minimum 4 letter"),
  price: yup
    .number()
    .required("Please enter hotel price")
    .typeError("Price must be a number")
    .positive()
    .integer(),
  images: yup.mixed().test("file", "Please add a hotel image", (value) => {
    if (value.length > 0) {
      return true;
    }
    return false;
  }),
  description: yup
    .string()
    .required("Please enter your description")
    .min(10, "Your description must be more then 10 characters"),
});

function AddHotelForm() {
  const [auth, setAuth] = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [file, setFile] = useState(null);

  const formOptions = { resolver: yupResolver(schema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const http = useAxios();

  const handleChange = (data) => {
    setFile(data.images[0]);
  };

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        name: data.name,
        price: data.price,
        description: data.description,
      })
    );
    formData.append("files.images", data.images[0]);

    try {
      const response = await http.post(
        BASE_URL + "accomodations/?populate=*",
        formData
      );

      setSubmitSuccess("Hotel Added!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {submitSuccess && <span>{submitSuccess}</span>}
      {submitSuccess ? (
        ""
      ) : (
        <Form
          onSubmit={handleSubmit(onSubmit)}
          disabled={submitting}
          className="flex flex-col w-72 md:w-9/12 lg:w-1/2 lg:my-10"
        >
          {serverError && <span>{serverError}</span>}
          <Form.Group className="flex flex-col w-full" disabled={submitting}>
            <Form.Control
              className="border-2 focus:border-black focus:ring-black w-full md:text-xl md:h-14"
              type="text"
              name="name"
              placeholder="Hotel name *"
              {...register("name", { required: true })}
            />
            {errors?.name && (
              <span className="warning">{errors.name.message}</span>
            )}

            <Form.Control
              className="border-2 focus:border-black focus:ring-black w-full md:text-xl md:h-14 mt-3"
              type="text"
              name="price"
              placeholder="Price *"
              {...register("price", { required: true })}
            />
            {errors?.price && (
              <span className="warning">{errors.price.message}</span>
            )}
            <br />
            <Form.Label className="mt-3">Upload image</Form.Label>

            <Form.Control
              className="w-full md:text-xl md:h-14 "
              onChange={handleChange}
              type="file"
              accept="image/*"
              name="images"
              {...register("images", { required: true })}
            />

            {errors?.images && (
              <span className="warning">{errors.images.message}</span>
            )}

            <Form.Control
              className="mt-3"
              as="textarea"
              rows={3}
              type="text"
              name="description"
              placeholder="Description *"
              {...register("description", { required: true })}
            />
            {errors?.description && (
              <span className="warning">{errors.description.message}</span>
            )}
          </Form.Group>
          <Button type="submit" variant="primary" className="mt-3">
            {submitting ? "Adding hotel..." : "Add Hotel"}
          </Button>
        </Form>
      )}
    </>
  );
}

export default AddHotelForm;
