import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { credits } from "@/lib/domains";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms for using the Impact Matrix website, including photo credits.",
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms & Conditions", description: "The terms for using the Impact Matrix website, including photo credits.", url: "/terms" },
};

const mail = <a href="mailto:info@gryffindorlab.com">info@gryffindorlab.com</a>;

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="8 November 2026"
      intro="These terms apply to your use of the Impact Matrix website. By using it, you agree to them. If you do not agree, please do not use the website."
      sections={[
        { title: "About the website", body: <p>Impact Matrix is a platform that helps projects across six domains of social responsibility in Bangladesh find support. The website describes the platform and lets you contact us. It is operated by Gryffindor Lab.</p> },
        { title: "Using the website", body: (
          <>
            <p>You agree to use the website lawfully and not to:</p>
            <ul>
              <li>send false, misleading or abusive messages</li>
              <li>try to disrupt, probe or gain unauthorised access to the website or its systems</li>
              <li>copy or scrape the website in bulk without our written permission</li>
            </ul>
          </>
        ) },
        { title: "Information on this website", body: <p>We aim to keep the content accurate, but it is provided for general information. The domains, project types and descriptions shown describe the kinds of work the platform supports. They are not offers, guarantees or promises of funding, and listing a project area does not mean any particular project has been approved or funded.</p> },
        { title: "Messages you send us", body: <p>When you contact us, you confirm that the details you give are accurate and that you are allowed to share them. How we handle your information is described in our <a href="/privacy">Privacy Policy</a>.</p> },
        { title: "Intellectual property", body: <p>The Impact Matrix name, logo, text and design belong to Impact Matrix and Gryffindor Lab. You may view and share pages of the website for personal, non-commercial purposes, but you may not reproduce or reuse our material without our permission.</p> },
        { title: "Photo credits", body: (
          <>
            <p>Photographs on this website come from <a href="https://www.pexels.com">Pexels</a> and <a href="https://unsplash.com">Unsplash</a>, plus one from Wikimedia Commons, and are used under their free licences. The photographers are credited here:</p>
            <ul>
              {credits.map(([title, author, url]) => (
                <li key={url}><a href={url}>{title}</a> by {author}</li>
              ))}
            </ul>
          </>
        ) },
        { title: "Third-party links", body: <p>The website may link to other websites, such as Pexels and photographers’ pages. We do not control them and are not responsible for their content or policies.</p> },
        { title: "Availability", body: <p>We try to keep the website available, but we do not promise that it will always be uninterrupted or free of errors. We may change or remove content at any time.</p> },
        { title: "Limit of liability", body: <p>To the extent the law allows, Impact Matrix and Gryffindor Lab are not liable for any loss arising from your use of the website or from relying on its content. Nothing in these terms limits any liability that cannot be limited by law.</p> },
        { title: "Governing law", body: <p>These terms are governed by the laws of Bangladesh, and the courts of Bangladesh have jurisdiction over any dispute arising from them.</p> },
        { title: "Changes to these terms", body: <p>We may update these terms from time to time. Continuing to use the website after a change means you accept the updated terms. The date at the top shows when they last changed.</p> },
        { title: "Contact", body: <p>Questions about these terms? Email {mail}.</p> },
      ]}
    />
  );
}
