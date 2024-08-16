import { Metadata } from "next";
import { ContactUsForm } from "../components/ContactUs";

export const metadata: Metadata = {
  title: "Atenxion | No Code Gen AI for Enterprise",
  description: "Atenxion | No Code Gen AI for Enterprise",
  icons: "/assets/atenxion-small.svg",
};

export default function ContactUs() {
  return <ContactUsForm />;
}
