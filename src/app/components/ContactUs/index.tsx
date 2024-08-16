"use client";

import { Box } from "@mui/material";
import React, { FormEvent, useState } from "react";
import BodyText from "../typeface/BodyText";
import Image from "next/image";
import SubHeading from "../typeface/SubHeading";
import { InputComponent } from "../common/InputComponent";
import ButtonComponent from "../common/ButtonComponent";
import toast, { Toaster } from "react-hot-toast";
import { toastOptions } from "@/app/data/toast";
import { showToast } from "@/app/utils/handleError";
import { Formik } from "formik";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export const ContactUsForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const initialValues = {
    name: "",
    email: "",
    code: "+95",
    phone: "",
    company: "",
    designation: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters long")
      .max(30, "Name must be at most 30 characters long"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    // designation: Yup.string()
    //   .required("Designation is required")
    //   .max(150, "Designation must be at most 150 characters long"),
    // company: Yup.string().required("Company name is required"),
  });

  return (
    <Box
      bgcolor="custom.cream"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={5}
      padding={5}
    >
      <Toaster toastOptions={toastOptions} />
      <SubHeading>
        Make a booking with us to
        <br />
        empower your businesses
      </SubHeading>

      {/* form  */}
      <Box
        bgcolor={"white"}
        sx={{ borderRadius: "16px" }}
        p={{ xs: "20px", sm: "20px", md: "40px" }}
        maxWidth={{ xl: "1000px", lg: "600px" }}
        position="relative"
      >
        <Image
          src="/assets/alarm.svg"
          width="45"
          height="45"
          alt="alarm icon"
          style={{ position: "absolute", top: "-25px", right: "60px" }}
        />
        <BodyText variant="large" weight="bold">
          Please fill up the following information
        </BodyText>

        <Box width={{ xs: "320px", sm: "450px", md: "520px" }}>
          <Formik
            initialValues={initialValues}
            validationSchema={ContactFormSchema}
            enableReinitialize
            onSubmit={async (values, { resetForm }) => {
              setLoading(true);
              const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}message/submit-form`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                },
              );

              if (response.ok) {
                showToast("Form submitted successfully", "success");
                resetForm();
                setLoading(false);
              } else {
                showToast("Something went wrong", "error");
                setLoading(false);
              }
            }}
          >
            {({
              values,
              handleSubmit,
              handleChange,
              errors,
              touched,
              setFieldValue,
            }) => (
              <form
                onSubmit={handleSubmit}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                <InputComponent
                  id="name"
                  label="Name"
                  value={values.name}
                  handleChange={handleChange}
                  required
                  errors={errors.name}
                  touched={touched.name}
                />
                <InputComponent
                  id="designation"
                  label="Designation"
                  value={values.designation}
                  handleChange={handleChange}
                  errors={errors.designation}
                  touched={touched.designation}
                />
                <InputComponent
                  type="email"
                  id="email"
                  label="Business email"
                  value={values.email}
                  handleChange={handleChange}
                  required
                  errors={errors.email}
                  touched={touched.email}
                />

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={1}
                  width={"100%"}
                >
                  <BodyText variant="medium" weight="medium">
                    Phone
                  </BodyText>
                  <PhoneInput
                    international
                    defaultCountry="SG"
                    value={values.phone}
                    onChange={(newVal) => setFieldValue("phone", newVal)}
                  />
                </Box>

                {/* <InputComponent
                  type="phone"
                  id="phone"
                  label="Phone number"
                  code={values.code}
                  value={values.phone}
                  handleChange={handleChange}
                  required
                  errors={errors.phone}
                  touched={touched.phone}
                /> */}

                <InputComponent
                  id="company"
                  label="Company Name"
                  value={values.company}
                  handleChange={handleChange}
                  required
                  errors={errors.company}
                  touched={touched.company}
                />

                <Box
                  display={"flex"}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                  gap={3}
                  width={"100%"}
                >
                  <ButtonComponent
                    width="auto"
                    height="45px"
                    label="Request a demo"
                    onClick={handleSubmit}
                    loading={loading}
                  />
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};
