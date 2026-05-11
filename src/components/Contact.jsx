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
  const [state, handleSubmit] = useForm("mqengzoa");

  return (
    <Box className="min-h-screen px-6 md:px-20 py-20 bg-[#0f1720] text-primary-text">

      {/* Heading */}
      <Box className="flex flex-col items-center text-center gap-4 mb-8 md:mb-15">

        <Typography
          variant="h3"
          className="font-bold text-primary-text"
        >
          Let’s Build Something Together
        </Typography>

        <Typography
          variant="body1"
          className="text-muted-text max-w-2xl"
        >
          Have a question, idea, or project in mind? Feel free to reach out.
          I’d love to hear from you and create something meaningful together.
        </Typography>
      </Box>

      {/* Main Section */}
      <Box className="flex flex-col lg:flex-row gap-6 md:gap-10 justify-between items-start">

        {/* Left Side */}
        <Box className="flex flex-col gap-6 w-full lg:w-1/3">

          <Typography
            variant="h5"
            className="place-self-center text-heading-text"
          >
            You'll find me at
          </Typography>

          {/* Location */}
          <Card className="p-5 rounded-3xl shadow-md border border-light-border bg-light-card">

            <Typography
              variant="h6"
              className="font-semibold text-dark-text mb-2"
            >
              📍 Location
            </Typography>

            <Typography className="text-muted-dark-text">
              Pune, Maharashtra, India
            </Typography>
          </Card>

          {/* Email */}
          <Card className="p-5 rounded-3xl shadow-md border border-light-border bg-light-card">

            <Typography
              variant="h6"
              className="font-semibold text-dark-text mb-2"
            >
              📧 Email
            </Typography>

            <Typography className="text-muted-dark-text">
              gaurikatti2806@gmail.com
            </Typography>
          </Card>

          {/* Socials */}
          <Card className="p-5 rounded-3xl shadow-md border border-light-border bg-light-card">

            <Typography
              variant="h6"
              className="font-semibold text-dark-text mb-4"
            >
              🌐 Socials
            </Typography>

            <Box className="flex gap-3 text-muted-dark-text">

              <a
                href="https://www.linkedin.com/in/gauri-katti-099370210/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-dark-text transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/gauri2806"
                target="_blank"
                rel="noreferrer"
                className="hover:text-dark-text transition"
              >
                GitHub
              </a>

              <a
                href="https://www.instagram.com/__gauri_28_/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-dark-text transition"
              >
                Instagram
              </a>
            </Box>
          </Card>

          {/* Phone */}
          <Card className="p-5 rounded-3xl shadow-md border border-light-border bg-light-card">

            <Typography
              variant="h6"
              className="font-semibold text-dark-text mb-2"
            >
              📞 Phone
            </Typography>

            <Typography className="text-muted-dark-text">
              +91 80803 24256
            </Typography>
          </Card>
        </Box>

        {/* Contact Form */}
        <Card
          className="
            w-full lg:w-2/3
            p-4 md:p-8
            rounded-[32px]
            border
            border-dark-border
            shadow-xl shadow-black/5
            bg-dark-card
          "
        >

          <Typography
            variant="h5"
            className="font-semibold text-heading-text mb-8 text-center"
          >
            Send me a message
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:gap-6 w-full justify-center items-center"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "var(--color-input-bg)",
                borderRadius: "12px",
                color: "var(--color-heading-text)",

                "& fieldset": {
                  borderColor: "var(--color-input-border)",
                },

                "&:hover fieldset": {
                  borderColor: "var(--color-input-hover)",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "var(--color-input-focus)",
                },

                "& input": {
                  color: "var(--color-heading-text)",
                },

                "& textarea": {
                  color: "var(--color-heading-text)",
                },

                "& input:-webkit-autofill": {
                  WebkitBoxShadow:
                    "0 0 0 100px var(--color-input-bg) inset",

                  WebkitTextFillColor:
                    "var(--color-heading-text)",

                  caretColor:
                    "var(--color-heading-text)",

                  borderRadius: "12px",
                },
              },

              "& .MuiInputLabel-root": {
                color: "var(--color-muted-text)",
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "var(--color-input-focus)",
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
              className="
                !mt-4
                !py-2 md:!py-3
                !px-4 md:!px-6
                !rounded-xl
                !bg-light-card
                hover:!bg-primary-text
                !text-dark-text
                !shadow-none
                !font-medium
              "
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