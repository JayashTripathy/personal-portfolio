"use client";

import React from "react";
import ContentParagraph from "../content-paragraph";

type ProfileDescriptionProps = {
  description?: React.ReactNode;
};

const ProfileDescription = ({
  description = (
    <span>
      <span className="font-medium text-foreground italic">
        I create products holistically
      </span>
      , working across frontend, backend, full-stack, and intelligent systems. I
      stay involved throughout the entire journey shaping the experience,
      shipping to production, and refining based on user feedback.{" "}
      <span className="font-medium text-foreground italic">
        What matters to me is impact, not tooling debates
      </span>
      .
    </span>
  ),
}: ProfileDescriptionProps) => {
  return (
    <div className="flex flex-row gap-6 items-center border-b border-dotted border-border py-12 px-6">
      <ContentParagraph>
        <span className="text-lg">{description}</span>
      </ContentParagraph>
    </div>
  );
};

export default ProfileDescription;
