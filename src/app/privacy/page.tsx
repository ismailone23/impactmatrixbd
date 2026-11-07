import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Impact Matrix collects, uses and protects the information you send through this website.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy Policy", description: "How Impact Matrix collects, uses and protects the information you send through this website.", url: "/privacy" },
};

const mail = <a href="mailto:info@gryffindorlab.com">info@gryffindorlab.com</a>;

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="8 November 2026"
      intro="Impact Matrix is a platform that helps projects across six domains in Bangladesh find support. This policy explains what information we collect through this website, why, and the choices you have."
      sections={[
        { title: "Who we are", body: <p>Impact Matrix is an initiative of Gryffindor Lab. In this policy, “we” and “us” mean Impact Matrix and Gryffindor Lab. You can reach us at {mail}.</p> },
        { title: "Information we collect", body: (
          <>
            <p>We collect only what you choose to send us through the contact form:</p>
            <ul>
              <li>your name and email address</li>
              <li>the domain you are interested in, if you pick one</li>
              <li>the message you write, including anything about your project</li>
            </ul>
            <p>We do not ask you to create an account, and we do not collect payment details on this website.</p>
          </>
        ) },
        { title: "How we use it", body: (
          <>
            <p>We use your details to read and reply to your message, to understand which projects and supporters we can connect, and to keep a record of the conversation. We do not sell your information and we do not use it for advertising.</p>
          </>
        ) },
        { title: "Who handles it", body: (
          <>
            <p>Contact form messages are delivered by email through Resend, an email delivery service, to our inbox at {mail}. Resend processes the message on our behalf to deliver it.</p>
            <p>This website loads its typeface from Fontshare. When a page loads, your browser contacts Fontshare, which can receive technical data such as your IP address. The photographs on this site are served from our own servers.</p>
          </>
        ) },
        { title: "Cookies and tracking", body: <p>This website does not set advertising or analytics cookies. If we add analytics in the future, we will update this policy and, where the law requires it, ask for your consent first.</p> },
        { title: "How long we keep it", body: <p>We keep contact messages for as long as we need them to respond and to follow up on any project or partnership you discuss with us. You can ask us to delete your message at any time.</p> },
        { title: "Your choices", body: (
          <>
            <p>You can ask us to:</p>
            <ul>
              <li>tell you what information we hold about you</li>
              <li>correct or delete it</li>
              <li>stop contacting you</li>
            </ul>
            <p>Write to {mail} and we will respond as soon as we reasonably can.</p>
          </>
        ) },
        { title: "Security", body: <p>We take reasonable steps to protect the information you send us. No method of sending data over the internet is completely secure, so please avoid putting sensitive personal details in the contact form.</p> },
        { title: "Children", body: <p>This website is not directed at children, and we do not knowingly collect information from anyone under 16.</p> },
        { title: "Changes to this policy", body: <p>We may update this policy from time to time. The date at the top shows when it last changed.</p> },
        { title: "Contact", body: <p>Questions about this policy? Email {mail}.</p> },
      ]}
    />
  );
}
