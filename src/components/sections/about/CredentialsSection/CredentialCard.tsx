import Image from "next/image";
import { Credential } from "./CredentialsSection.data";

interface Props {
  credential: Credential;
}

export default function CredentialCard({ credential }: Props) {
  return (
    <div className="group flex h-48 items-center justify-center rounded-3xl border border-white/10 bg-[#313936] transition-all duration-300 hover:border-primary hover:bg-[#3b4440]">
      <div className="relative h-20 w-40">
        <Image
          src={credential.image}
          alt={credential.name}
          fill
          className="object-contain transition duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
}
