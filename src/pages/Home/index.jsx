import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

// Components
import Game from "../Game";

const Home = () => {
  const [isGameStarted, setIsGameStared] = useState(false);

  const validationSchema = yup.object().shape({
    username: yup.string().required("This field is required!"),
    email: yup
      .string()
      .required("This field is required!")
      .email("Invalid email!"),
    phone: yup
      .string()
      .required("This field is required!")
      .matches(/^[0-9]{10}$/g, "Invalid phone!"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    validateOnMount: true,
  });

  const setAllTouched = () => {
    Object.keys(formik.values).forEach((key) => {
      formik.setFieldTouched(key);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setAllTouched();

    if (!formik.isValid) return;

    setIsGameStared(true);
  };

  return (
    <>
      {isGameStarted ? (
        <Game />
      ) : (
        <div
          className="text-center"
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="diplay-4 mb-5"> Welcome to Pocker Center</h1>
          <h3>Fill your info and start</h3>
          <form className="w-25 mx-auto" onSubmit={handleSubmit}>
            <div class="form-group">
              <input
                type="input"
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="username"
                className="w-100 form-control mb-3"
              />
              {formik.touched.username && (
                <p className="text-left text-danger">
                  {formik.errors.username}
                </p>
              )}
            </div>
            <div class="form-group">
              <input
                type="input"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="email"
                className="w-100 form-control mb-3"
              />
              {formik.touched.email && (
                <p className="text-left text-danger">{formik.errors.email}</p>
              )}
            </div>
            <div class="form-group">
              <input
                type="input"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="phone"
                className="w-100 form-control mb-3"
              />
              {formik.touched.phone && (
                <p className="text-left text-danger">{formik.errors.phone}</p>
              )}
            </div>
            <button className="btn btn-success">Start new Game</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Home;
