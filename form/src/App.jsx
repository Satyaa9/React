import React, { useState } from "react";
import { Formik, Field, Form } from "formik";

function App() {
  console.log("in app");

  const handleSubmit = (values) => {
    console.log("submitted Name :", values.name);
    console.log("submitted pass :", values.pass);
    console.log("submitted email :", values.email);
  };

  return (
    <div style={{ padding: "10px", margin: "10px", width: "15rem"  }}>
      <Formik
        initialValues={{ name: "", pass: "", email: "" }}
        onSubmit={handleSubmit}
      >
        <Form style={{ display: "flex", flexDirection: "column" }}>
          <Field
            type="text"
            name="name"
            placeholder="Enter Name"
            style={{ marginBottom: "10px", padding: "8px" }}
          />

          <Field
            type="password"
            name="pass"
            placeholder="Enter Pass"
            style={{ marginBottom: "10px", padding: "8px" }}
          />
          <Field
            type="email"
            name="email"
            placeholder="Enter Email"
            style={{ marginBottom: "10px", padding: "8px" }}
          />
          <button type="submit" style={{ padding: "8px" }}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
