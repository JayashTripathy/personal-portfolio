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
        I build software where AI models meet real products.
      </span>{" "}
      At Intozi, I work with vision AI and vision-language models, building the
      pipelines, evaluation and product features that turn raw model output
      into something people can rely on. This is my second stint here. I
      started out building real-time video infrastructure for our
      computer-vision systems, spent a year shipping product at Plane, and came
      back to work closer to the models.{" "}
      <span className="font-medium text-foreground italic">
        What matters to me is impact, not tooling debates.
      </span>
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
