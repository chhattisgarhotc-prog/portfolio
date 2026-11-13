import { DocPage, docMetadata } from "@/components/doc-page";

export const metadata = docMetadata("about");

export default function Page() {
  return <DocPage slug="about" />;
}
