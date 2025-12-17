import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

// Validation Schema using Yup
const validation = Yup.object({
  name: Yup.string().required("Name is required"),
  pass: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function App() {
  const handleSubmit = (values) => {
    console.log("submitted Name :", values.name);
    console.log("submitted pass :", values.pass);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "20px",
      }}
    >
      <div
        style={{
          padding: "20px",
          margin: "20px",
          width: "20rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Formik
          initialValues={{ name: "", pass: "" }}
          validationSchema={validation}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form style={{ display: "flex", flexDirection: "column" }}>
              <Field
                type="text"
                name="name"
                placeholder="Enter Name"
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
              {errors.name && touched.name && (
                <div
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  {errors.name}
                </div>
              )}

              <Field
                type="password"
                name="pass"
                placeholder="Enter Password"
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
              {errors.pass && touched.pass && (
                <div
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  {errors.pass}
                </div>
              )}

              <button
                type="submit"
                style={{
                  padding: "10px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
