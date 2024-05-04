import {
  React,
  motion,
  useState,
  RiMailSendLine,
  transition,
} from "@/app/imports/Imports";
import { successToast, errorToast } from "../utils/toastify_util";

export const Contact: React.FC = () => {
  type STATE_UNION = string | boolean | any;
  const [email, setEmail] = useState<STATE_UNION>("");
  const [subject, setSubject] = useState<STATE_UNION>("");
  const [message, setMessage] = useState<STATE_UNION>("");
  const [emailError, setEmailError] = useState<STATE_UNION>("");
  const [subjectError, setSubjectError] = useState<STATE_UNION>("");
  const [messageError, setMessageError] = useState<STATE_UNION>("");

  const emailValidatorHandler: (input: string) => boolean = (input: string) => {
    const emailReg: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    return emailReg.test(input);
  };

  const emailValidatorErrorHandler: () => void = () => {
    if (!emailValidatorHandler(email)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const subjectValidatorErrorHandler: () => void = () => {
    if (subject.length <= 5) {
      setSubjectError("subject should be more than 5 characters");
    } else {
      setSubjectError("");
    }
  };

  const messageValidatorErrorHandler: () => void = () => {
    if (message.length <= 5) {
      setMessageError("Message should be more than 5 characters");
    } else {
      setMessageError("");
    }
  };

  const onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    try {
      e.preventDefault();
      emailValidatorErrorHandler();
      messageValidatorErrorHandler();
      subjectValidatorErrorHandler();

      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message, subject }),
      });

      if (!res.ok) {
        return errorToast(`Request failed with status: ${res.status}`);
      }

      const data = await res.json();

      if (data?.messageID && !messageError && !subjectError && !emailError) {
        successToast(data.message);
      } else {
        errorToast(data.error);
      }
    } catch (error) {
      errorToast("Internal Server error😭😭");
    }
  };


  return (
    <motion.section
      className="text-center about-container px-[1.5rem] mb-[70px]"
      id="contact"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        Contact Me
      </motion.h1>

      <motion.div className="">
        <motion.p
          className="max-w-[35rem] text-sm opacity-30 font-[300] mx-auto my-10"
          initial={{ opacity: 0, y: -30, scale: 0.1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={transition}
        >
          Please contact me directly at{" "}
          <motion.a
            className="underline"
            href="mailto:phumudzomaphari57@gmail.com"
          >
            phumudzomaphari57@gmail.com
          </motion.a>{" "}
          or through this form, and i will also appreciate your feedback to
          improve my portfolio.
        </motion.p>

        <motion.form
          className="flex flex-col gap-3 justify-start max-w-[35rem] mx-auto text-white opacity-60"
          onSubmit={(e) => onSubmitHandler(e)}
        >
          <motion.input
            initial={{ opacity: 0, y: -30, scale: 0.1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
            type="email"
            placeholder="Enter your email address"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
              emailValidatorErrorHandler();
            }}
            value={email}
            className={`p-3 text-sm outline-none rounded-lg send-input-email ${
              emailError && "border-[0.5px] border-red-500"
            }`}
          />
          <motion.input
            initial={{ opacity: 0, y: -30, scale: 0.1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
            type="text"
            placeholder="Enter your Subject"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSubject(e.target.value);
              subjectValidatorErrorHandler();
            }}
            value={subject}
            className={`p-3 text-sm outline-none rounded-lg send-input-email ${
              subjectError && "border-[0.5px] border-red-500"
            }`}
          />
          <motion.textarea
            initial={{ opacity: 0, y: -30, scale: 0.1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={transition}
            cols={2}
            rows={5}
            placeholder="Enter your message"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setMessage(e.target.value);
              messageValidatorErrorHandler();
            }}
            value={message}
            className={`p-3 text-sm outline-none rounded-lg send-input-message ${
              messageError && "border-[0.5px] border-red-500"
            }`}
          />
          <motion.button
            type="submit"
            disabled={
              emailError ||
              subjectError ||
              messageError ||
              !email ||
              !subject ||
              !message
            }
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            className="btn-send p-3 text-sm flex items-center justify-center gap-3 rounded-lg text-white font-[200]"
          >
            <motion.span>Send message</motion.span>{" "}
            <motion.span className="text-white text-sm">
              <RiMailSendLine />
            </motion.span>
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};
