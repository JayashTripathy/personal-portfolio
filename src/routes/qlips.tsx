import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/qlips")({
  beforeLoad: () => {
    throw redirect({ href: "https://qlips.pages.dev/", statusCode: 302 });
  },
});
