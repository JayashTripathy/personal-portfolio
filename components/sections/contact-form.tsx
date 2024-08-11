"use client";
import { useForm, ValidationError, useFormspree } from "@formspree/react";
import React, { useEffect } from "react";
import SectionTitle from "../ui/sectionTitle";
import { Mail, Phone, Send, SendHorizonal } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/constants/personal-info";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { AnimatePresence, AnimationProps, motion } from "framer-motion";

type Props = {};

const sendMessageDefaultPosition = 65;

function ContactForm({}: Props) {
  const [state, handleSubmit] = useForm("movawnak");

  const [succeeded, setSucceeded] = React.useState(false);
  const buttonText = succeeded ? "Sent" : "Send Message";
  const info = [
    {
      icon: <Mail />,
      link: `mailto:${personalInfo.email}`,
      label: personalInfo.email,
    },
    {
      icon: <Phone />,
      link: `tel:${personalInfo.phone}`,
      label: personalInfo.phone,
    },
  ];

  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };

  const bounceAnimation = {
    x: state.submitting
      ? [
          sendMessageDefaultPosition,
          sendMessageDefaultPosition + 10,
          sendMessageDefaultPosition,
        ]
      : succeeded
      ? 1000
      : sendMessageDefaultPosition,
  };

  const transitionValues: AnimationProps["transition"] = {
    duration: (!state.submitting || succeeded) ? 0.5 : 2,
    repeat: state.submitting && !succeeded ? Infinity : 0,
    ease: "easeInOut",
  };

  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => {
        setSucceeded(true);
        setTimeout(() => {
          setSucceeded(false);
        }, 3000);
      }, 500);
    }
  }, [state.succeeded, state.submitting]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col text-muted-foreground text-sm gap-6"
    >
      <div className=" rounded-2xl  flex gap-5 items-center">
        {info.map((item, i) => (
          <div key={item.label} className="flex gap-1">
            {item.icon}{" "}
            <Link href={item.link} target="_self">
              {item.label}
            </Link>
          </div>
        ))}
      </div>
      <br />
      <LabelInputContainer>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          name="email"
          className="bg-muted text-foreground"
          placeholder="Type your email here..."
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-yellow-400"
        />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="email">Message</Label>

        <Textarea
          id="message"
          name="message"
          className="bg-muted text-foreground"
          placeholder="Type your message here..."
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-yellow-400"
        />
      </LabelInputContainer>
      <Button
        type="submit"
        disabled={state.submitting}
        className="flex gap-2 justify-center items-center overflow-hidden"
      >
        <div className="relative flex w-full justify-center items-center">
          <AnimatePresence>
            <motion.span
              className="text-background absolute top-0 left-0  text-center flex justify-center items-center w-full h-full"
              key={buttonText}
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              exit={{ y: -30 }}
              transition={{ duration: 0.25, delay: .5 }}
            >
              {buttonText}
            </motion.span>
          </AnimatePresence>

          <motion.span
            initial={{ x: 30 }}
            animate={bounceAnimation}
            transition={{
              x: transitionValues,
            }}
          >
            <SendHorizonal size={15} />
          </motion.span>
        </div>
      </Button>
    </form>
  );
}

export default ContactForm;
