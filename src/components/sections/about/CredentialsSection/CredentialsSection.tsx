"use client";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import CredentialCard from "./CredentialCard";
import { credData, credentials } from "./CredentialsSection.data";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function CredentialsSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="rounded-[32px] bg-[#29302D] py-28 m-2 lg:m-4"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <Eyebrow variant="secondary">{credData.eyebrow}</Eyebrow>

          <Heading
            as="h2"
            className="mt-5 lg:text-[64px]"
            before={credData.before}
            highlight={credData.highlight}
          />

          <Description className="mx-auto mt-6 max-w-2xl">
            {credData.description}
          </Description>
        </div>

        <div
          data-reveal
          data-direction="left"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {credentials.map((credential) => (
            <CredentialCard key={credential.id} credential={credential} />
          ))}
        </div>
      </div>
    </section>
  );
}
