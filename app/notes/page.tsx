import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionTitle from "@/components/ui/sectionTitle";
import SectionContainer from "@/components/utils/SectionContainer";
import { getAllNotes } from "@/lib/services/content/notes";
import { Search } from "lucide-react";
import React from "react";

type Props = {};

function Page({}: Props) {
  const notes = getAllNotes();

  return (
    <SectionContainer>
      <SectionTitle title="Notes" className="text-left w-full text-4xl mb-3" />
      <p className="text-sm">
        A collection of my personal brief notes or snippets I found while
        development
      </p>

      <div className="w-full my-8 border  bg-muted rounded-xl flex items-center p-3 focus-within:border-primary/50 transition-all ease-in-out">
        <Search />
        <Input
          className="w-full border-0 focus-visible:ring-0"
          placeholder="Search notes"
        />
        <Button className="ml-3">Search</Button>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        {notes.map((note) => (
          <div key={note.title} className="border p-4 bg-muted rounded-3xl flex flex-col gap-2 ">
            <h3 className="text-xl font-semibold">{note.title}</h3>
            <p className="text-sm text-foreground">{note.summary}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export default Page;
