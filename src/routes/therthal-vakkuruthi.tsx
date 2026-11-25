import { createFileRoute } from "@tanstack/react-router";
import { TherthalVakkuruthiPage, siteMeta } from "@/components/ainnmkk/site";

export const Route = createFileRoute("/therthal-vakkuruthi")({
  head: () => ({
    meta: [
      { title: siteMeta.therthalVakkuruthi.title },
      { name: "description", content: siteMeta.therthalVakkuruthi.description },
      { property: "og:title", content: siteMeta.therthalVakkuruthi.title },
      { property: "og:description", content: siteMeta.therthalVakkuruthi.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TherthalVakkuruthiPage,
});

