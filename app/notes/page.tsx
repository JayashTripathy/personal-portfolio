import SectionTitle from "@/components/ui/sectionTitle";
import SectionContainer from "@/components/utils/SectionContainer";
import { getAllNotes } from "@/lib/services/content/notes";
import React from "react";

type Props = {};

function Page({}: Props) {
  const notes = getAllNotes();
  return (
    <SectionContainer>
      <SectionTitle title="Notes" className="text-left w-full text-4xl mb-1" />
      <p className="text-sm">A collection of my personal brief notes or snippets I found while development</p>
    </SectionContainer>
  );
}

export default Page;
