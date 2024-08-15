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

export const ContactUsForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    code: "+95",
    phone: "",
    company: "",
    designation: "",
  });

  const isBtnDisabled = !(
    formData.customerName.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.phone.trim().length > 0
  );

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string) => {
    const phonePattern = /^\d+$/;
    return phonePattern.test(phone) && phone.length >= 6 && phone.length <= 15;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!isValidEmail(formData.email)) {
      showToast("Please enter a valid email address", "error");
      setLoading(false);
      return;
    }

    if (!validatePhoneNumber(formData.phone)) {
      showToast("Please enter a valid phone number", "error");
      setLoading(false);
      return;
    }

    const response = await fetch("/api/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      showToast("Form submitted successfully", "success");
      setFormData({
        customerName: "",
        email: "",
        code: "+95",
        phone: "",
        company: "",
        designation: "",
      });
      setLoading(false);
    } else {
      showToast("Something went wrong", "error");
      setLoading(false);
    }
  };

  return (
    <Box
      bgcolor="secondary.main"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={5}
      padding={5}
    >
      <Toaster toastOptions={toastOptions} />
      <SubHeading color="white">
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

        <Box width={{ xs: "300px", sm: "450px", md: "520px" }}>
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
              id="customerName"
              label="Name"
              value={formData.customerName}
              handleChange={handleChange}
              required
            />
            <InputComponent
              id="designation"
              label="Designation"
              value={formData.designation}
              handleChange={handleChange}
            />
            <InputComponent
              type="email"
              id="email"
              label="Business email"
              value={formData.email}
              handleChange={handleChange}
              required
            />
            <InputComponent
              type="phone"
              id="phone"
              label="Phone number"
              code={formData.code}
              value={formData.phone}
              handleChange={handleChange}
              required
            />

            <InputComponent
              id="company"
              label="Company Name"
              value={formData.company}
              handleChange={handleChange}
            />

            <ButtonComponent
              width="180px"
              label="Request a demo"
              onClick={handleSubmit}
              loading={loading}
              disabled={isBtnDisabled}
            />
          </form>
        </Box>
      </Box>
    </Box>
  );
};
