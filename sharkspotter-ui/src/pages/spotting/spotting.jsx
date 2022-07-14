import React, { useEffect, useState } from 'react';
import './spotting.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Select from 'react-select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../services';
import { useAuth0 } from "@auth0/auth0-react";
import Error from '../error/error';

function Spotting()  {
    const { getAccessToken } = useAuth();
    const [beachNames, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const Navigate = useNavigate();
    const { isAuthenticated } = useAuth0();

  const sharkTypes = [
    { value: "thresher", label: "Thresher" },
    { value: "white", label: "White" },
    { value: "sand", label: "Sand" },
    { value: "basking", label: "Basking" },
    { value: "rough", label: "Rough" },
  ];

  const postSpotting = async (values) => {
      const token = await getAccessToken();
      const config = {
          headers: {
              authorization: `Bearer ${token}`
          }
      }
      const resp = axios.post('https://localhost:7213/api/v1/spottings', values, config);
  }

  useEffect(() => {
      const getPost = async () => {
          setLoading(true);
          const token = await getAccessToken();
          const config = {
              headers: {
                  authorization: `Bearer ${token}`
              }
          }
          axios.get('https://localhost:7213/api/v1/beaches', config).then((response) => {
              setData(response.data);
          }).catch((err) => {
              setError(err);
          }).finally(() => {
              setLoading(false);
          });
      }
      getPost();
  }, ['https://localhost:7213/api/v1/beaches']);

    const arr = beachNames.map((beachNames, index) => {
        return (
            { value: beachNames.beach_name, label: beachNames.beach_name , bID: beachNames.beachid }
        )
    })

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
            userid: 13,
            beachid: null,
            sharkType: "",
            spottingAt: "",
            comment: ""
        },
        validationSchema: Yup.object({
            beachid: Yup.number().typeError("Required").required("Required"),
            spottingAt: Yup.string().required("Required"),
            comment: Yup.string().max(250, "Must be 250 characters or less")
        }),
        onSubmit: async (values) => {
            values.beachid = parseInt(values.beachid);
            await postSpotting(values);
            Navigate('/');
            alert('Your shark sighting has been captured successfully. Log out to return to home page.');
            
        }
    })
    return (
      isAuthenticated ? (<main className='spotting-main'>
      <h1>Have you spotted a shark ?</h1>
      <form onSubmit={formik.handleSubmit} className="form-section">
          <label className="lbl">Beach<i className="required">{formik.touched.beachid && formik.errors.beachid ? <span>{formik.errors.beachid}</span> : null}</i></label>
          <div style={{width: '100%', color: '#18A0FB'}}>
          <Select options={arr} placeholder="" value={arr ? arr.find((option) => option.value === formik.values.beach) : ""} onChange={(option) => {formik.setFieldValue("beachid", option.bID);}} onBlur={formik.handleBlur} styles={selectStyles}/>
          </div>
          
          <label className="lbl">Shark Type</label>
          <div style={{width: '100%', color: '#18A0FB'}}>
          <Select options={sharkTypes} placeholder="" value={sharkTypes ? sharkTypes.find((option) => option.value === formik.values.sharkType) : ""} onChange={(option) => {formik.setFieldValue("sharkType", option.value);}} styles={selectStyles}/>
          </div>

      <label className="lbl">
        Date
        <i className="required">
          {formik.touched.spottingAt && formik.errors.spottingAt ? (
            <span>{formik.errors.spottingAt}</span>
          ) : null}
        </i>
      </label>
      <input
        id="spottingAt"
        name="spottingAt"
        type="date"
        onKeyDown={(e) => e.preventDefault()}
        className="control"
        placeholder=""
        onChange={formik.handleChange}
        value={formik.values.spottingAt}
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
  </main>): (
  <Error />
    )
        
  );
}

export default Spotting;
