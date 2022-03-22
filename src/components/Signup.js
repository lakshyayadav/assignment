import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import datagrokr from "./datgrokr.jpg";
import { register } from "../services/api.service";

export default function Signup() {
  const [storage, setStorage] = useState();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      bank: "",
      ifsc: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      email: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      mobile: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      bank: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      ifsc: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (storage === "cloud") {
        register(values).then(() => {
          alert("Data saved");
          resetForm();
        });
      } else {
        const element = document.createElement("a");
        element.setAttribute(
          "href",
          "data:text/plain;charset=utf-8," +
            encodeURIComponent(JSON.stringify(values))
        );
        element.setAttribute("download", `${values.firstName}${values.email}.txt`);
        element.click();
      }
    },
  });
  return (
    <div className=" h-screen bg-white flex">
      <div className=" h-full bg-slate-900 w-2/5 flex justify-end">
        <div className="flex flex-col h-3/4 w-3/4 justify-center bg-slate-900 mt-20 shadow-2xl items-center ">
          <img className="rounded-full" src={datagrokr} alt="" />

          <h1 className="text-white text-5xl subpixel-antialiased italic hover:not-italic">
            Make It Happen
          </h1>
        </div>
      </div>
      <div className=" h-screen bg-white w-3/5 ">
        <div className=" h-3/4 w-3/4 float-left bg-white mt-20 shadow-2xl">
          <div className="">
            <form
              action="#"
              className="flex flex-col w-full items-center"
              onSubmit={formik.handleSubmit}
            >
              <div className="mt-10">
                <h1 className="text-black text-xl ">Contacts</h1>
              </div>
              <div className="flex flex-row mt-5">
                <div className="form-group w-1/2  ">
                  <input
                    type="text"
                    label="FirstName"
                    name="firstName"
                    className="form-control"
                    placeholder="FirstName"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <p>{formik.errors.firstName}</p>
                  ) : null}
                </div>
                <div className="flex flex-col form-group w-1/2   ">
                  <input
                    type="text"
                    label="LastName"
                    name="lastName"
                    className="form-control"
                    placeholder="LastName"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <p>{formik.errors.lastName}</p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-row mt-5">
                <div className="flex flex-col form-group w-1/2 ">
                  <input
                    type="email"
                    label="Email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p>{formik.errors.email}</p>
                  ) : null}
                </div>
                <div className="form-group w-1/2  ">
                  <input
                    type="text"
                    label="Mobile"
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.mobile}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.mobile && formik.errors.mobile ? (
                    <p>{formik.errors.mobile}</p>
                  ) : null}
                </div>
              </div>
              <div className=" mt-10">
                <h1 className="text-black text-xl ">Accounts Details</h1>
              </div>
              <div className="flex flex-row mt-5">
                <div className="form-group w-1/2 ">
                  <input
                    type="text"
                    label="Bank"
                    name="bank"
                    className="form-control"
                    placeholder="Bank"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.bank}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.bank && formik.errors.bank ? (
                    <p>{formik.errors.bank}</p>
                  ) : null}
                </div>
                <div className="flex flex-col form-group w-1/2  ">
                  <input
                    type="text"
                    label="IFSC"
                    name="ifsc"
                    className="form-control"
                    placeholder="IFSC"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.ifsc}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.ifsc && formik.errors.ifsc ? (
                    <p>{formik.errors.ifsc}</p>
                  ) : null}
                </div>
              </div>
              <div className="form-group flex flex-col mt-10">
                <label htmlFor="storage" name="Storage">
                  Storage Medium
                </label>
                <select
                  className="form-control mt-2"
                  id="exampleFormControlSelect1"
                  onChange={(value) => setStorage(value.target.value)}
                >
                  <option value={"local"}>Local Storage</option>
                  <option value={"cloud"}>Database</option>
                </select>
              </div>
              <div className="form-group mt-10 ">
                <button
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
