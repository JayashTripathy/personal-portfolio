"use client";

import ContentParagraph from "../content-paragraph";

type ProfileDescriptionProps = {
  description?: string;
};

const ProfileDescription = ({
  description = `
        I create products holistically, working across frontend, backend,
        full-stack, and intelligent systems. I stay involved throughout the
        entire journey shaping the experience, shipping to production, and
        refining based on user feedback. What matters to me is impact, not
        tooling debates.
  `,
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
