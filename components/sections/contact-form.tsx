"use client";
import { useForm, ValidationError,useFormspree } from "@formspree/react";
import React from "react";
import SectionTitle from "../ui/sectionTitle";
import { Mail, Phone, Send, SendHorizonal } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/constants/personal-info";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type Props = {};

function ContactForm({}: Props) {
  const [state, handleSubmit] = useForm("movawnak");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  

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

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col text-muted-foreground text-sm gap-6"
    >
      <div className=" rounded-2xl  flex gap-5 items-center">
        {info.map((item, i) => (
          <div key={item.label} className="flex gap-1">
            {item.icon} <Link href={item.link} target="_self">{item.label}</Link>
          </div>
        ))}
      </div>
      <br/>
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
      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-yellow-400" />
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
      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-yellow-400"/>
      </LabelInputContainer>
      <Button type="submit" disabled={state.submitting} className="flex gap-2 justify-center items-center">
        Send Message <SendHorizonal size={15} />
      </Button>
    </form>
  );
}

export default ContactForm;
