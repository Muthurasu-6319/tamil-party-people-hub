import { createFileRoute } from "@tanstack/react-router";
import { HomePage, siteMeta } from "@/components/ainnmkk/site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: siteMeta.index.title }, { name: "description", content: siteMeta.index.description }, { property: "og:title", content: siteMeta.index.title }, { property: "og:description", content: siteMeta.index.description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: HomePage,
});