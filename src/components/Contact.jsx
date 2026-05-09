import React from "react";
import {
  Box,
  Typography,
  Card,
  TextField,
  Button,
} from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit, reser] = useForm("mqengzoa");

  return (
    <Box className="min-h-screen px-6 md:px-20 py-20 bg-[#0f1720] text-[#dce6ee]">

      {/* Heading */}
      <Box className="flex flex-col items-center text-center gap-4 mb-15">
        <Typography
          variant="h3"
          className="font-bold text-[#dce6ee]"
        >
          Let’s Build Something Together
        </Typography>

        <Typography
          variant="body1"
          className="text-[#94a3b8] max-w-2xl"
        >
          Have a question, idea, or project in mind? Feel free to reach out.
          I’d love to hear from you and create something meaningful together.
        </Typography>
      </Box>

      {/* Main Section */}
      <Box className="flex flex-col lg:flex-row gap-10 justify-between items-start">

        {/* Left Side */}
        <Box className="flex flex-col gap-6 w-full lg:w-1/3">

          <Typography
            variant="h5"
            className="place-self-center text-[#f8fafc]"
          >
            You'll find me at
          </Typography>

          {/* Location */}
          <Card className="p-5 rounded-3xl shadow-md border border-[#dbe3ec] bg-[#d4dae2]">
            <Typography
              variant="h6"
              className="font-semibold text-[#374151] mb-2"
            >
              📍 Location
            </Typography>

            <Typography className="text-[#6b7280]">
              Pune, Maharashtra, India
            </Typography>
          </Card>

          {/* Email */}
          <Card className="p-5 rounded-3xl shadow-md border border-[#dbe3ec] bg-[#d4dae2]">
            <Typography
              variant="h6"
              className="font-semibold text-[#374151] mb-2"
            >
              📧 Email
            </Typography>

            <Typography className="text-[#6b7280]">
              gaurikatti2806@gmail.com
            </Typography>
          </Card>

          {/* Socials */}
          <Card className="p-5 rounded-3xl shadow-md border border-[#dbe3ec] bg-[#d4dae2]">
            <Typography
              variant="h6"
              className="font-semibold text-[#374151] mb-4"
            >
              🌐 Socials
            </Typography>

            <Box className="flex gap-3 text-[#6b7280]">
              <a
                href="https://www.linkedin.com/in/gauri-katti-099370210/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0f1720] transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/gauri2806"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0f1720] transition"
              >
                GitHub
              </a>

              <a
                href="https://www.instagram.com/__gauri_28_/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0f1720] transition"
              >
                Instagram
              </a>
            </Box>
          </Card>

          {/* Contact Number */}
          <Card className="p-5 rounded-3xl shadow-md border border-[#dbe3ec] bg-[#d4dae2]">
            <Typography
              variant="h6"
              className="font-semibold text-[#374151] mb-2"
            >
              📞 Phone
            </Typography>

            <Typography className="text-[#6b7280]">
              +91 80803 24256
            </Typography>
          </Card>
        </Box>

        {/* Contact Form */}
        <Card className="w-full lg:w-2/3 p-8 rounded-[32px] border border-[rgba(127,149,170,0.2)] shadow-xl shadow-black/5 bg-[#1b2635] mt-10">

          <Typography
            variant="h5"
            className="font-semibold text-[#f3f4f6] mb-8 text-center"
          >
            Send me a message
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full justify-center items-center"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#334155",
                borderRadius: "12px",
                color: "#f8fafc",

                "& fieldset": {
                  borderColor: "#475569",
                },

                "&:hover fieldset": {
                  borderColor: "#64748b",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#cbd5e1",
                },

                "& input": {
                  color: "#f8fafc",
                },

                "& textarea": {
                  color: "#f8fafc",
                },

                // Autofill Fix
                "& input:-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0 100px #334155 inset",
                  WebkitTextFillColor: "#f8fafc",
                  caretColor: "#f8fafc",
                  borderRadius: "12px",
                },
              },

              "& .MuiInputLabel-root": {
                color: "#94a3b8",
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "#cbd5e1",
              },
            }}
          >

            {/* Name + Email */}
            <Box className="flex flex-col md:flex-row gap-5 w-full">

              <TextField
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                fullWidth
                required
              />
            </Box>

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            {/* Subject */}
            <TextField
              name="subject"
              label="Subject"
              variant="outlined"
              fullWidth
            />

            {/* Message */}
            <TextField
              name="message"
              label="Message"
              multiline
              rows={6}
              variant="outlined"
              fullWidth
              required
            />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            {/* Button */}
            <Button
              variant="contained"
              type="submit"
              disabled={state.submitting}
              className="!mt-4 !py-3 !rounded-md w-fit"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Contact;