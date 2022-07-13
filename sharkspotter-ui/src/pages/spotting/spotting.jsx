import React, { useState } from "react";
import "./spotting.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { useAuth0 } from "@auth0/auth0-react";

function Spotting() {
  const { logout } = useAuth0();
  const sharks = [
    { value: "Great White Shark", label: "Great White" },
    { value: "Whale Shark", label: "Whale Shark" },
    { value: "Tiger Shark", label: "Tiger Shark" },
  ];

  const beachOptions = [
    { value: "Thompsons Bay", label: "Thompsons Bay" },
    { value: "Camps Bay", label: "Camps Bay" },
    { value: "Muizenberg", label: "Muizenberg" },
  ];

  const selectStyles = {
    control: (base) => ({
      ...base,
      fontSize: "16px",
      borderRadius: "4px",
      background: "none",
      text: "#F1F3F8",
      border: "1px solid #F1F3F8 !important",
    }),
    singleValue: (base) => ({
      ...base,
      color: "white",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "white",
    }),
  };

  const formik = useFormik({
    initialValues: {
      beach: "",
      sharkType: "",
      date: "",
      comment: "",
    },
    validationSchema: Yup.object({
      beach: Yup.string().required("Required"),
      date: Yup.string().required("Required"),
      comment: Yup.string().max(250, "Must be 250 characters or less"),
    }),
    onSubmit: (values) => {
      // SEND values
      console.log(values);
    //   logout({ returnTo: window.location.origin });
    },
  });
  return (
    <main className="form-main">
      <h1>Have you spotted a shark ?</h1>
      <form onSubmit={formik.handleSubmit} id="login" className="form-section">
        <label className="lbl">
          Beach
          <i className="required">
            {formik.touched.beach && formik.errors.beach ? (
              <span>{formik.errors.beach}</span>
            ) : null}
          </i>
        </label>
        <div style={{ width: "100%", color: "#18A0FB" }}>
          <Select
            options={beachOptions}
            placeholder=""
            value={
              beachOptions
                ? beachOptions.find(
                    (beachOptions) => beachOptions.value === formik.values.beach
                  )
                : ""
            }
            onChange={(beachOptions) => {
              formik.setFieldValue("beach", beachOptions.value);
            }}
            onBlur={formik.handleBlur}
            styles={selectStyles}
          />
        </div>

        <label className="lbl">Shark Type</label>
        <div style={{ width: "100%", color: "#18A0FB" }}>
          <Select
            options={sharks}
            placeholder=""
            value={
              sharks
                ? sharks.find(
                    (sharks) => sharks.value === formik.values.sharkType
                  )
                : ""
            }
            onChange={(sharks) => {
              formik.setFieldValue("sharkType", sharks.value);
            }}
            styles={selectStyles}
          />
        </div>

        <label className="lbl">
          Date
          <i className="required">
            {formik.touched.date && formik.errors.date ? (
              <span>{formik.errors.date}</span>
            ) : null}
          </i>
        </label>
        <input
          id="date"
          name="date"
          type="date"
          onKeyDown={(e) => e.preventDefault()}
          className="control"
          placeholder=""
          onChange={formik.handleChange}
          value={formik.values.date}
          onBlur={formik.handleBlur}
        />

        <label className="lbl">
          Comment
          <i>
            {formik.errors.comment ? (
              <span>{formik.errors.comment}</span>
            ) : null}
          </i>
        </label>
        <textarea
          rows="8"
          cols="50"
          id="comment"
          name="comment"
          type="textfield"
          className="control"
          placeholder=""
          onChange={formik.handleChange}
          value={formik.values.comment}
          onBlur={formik.handleBlur}
        ></textarea>

        <button type="submit" className="btn btn-white">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Spotting;
