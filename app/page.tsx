import Link from "next/link";
import { EncryptedWord, SlidingWindowWord } from "@/components/living-words";
import { links, person } from "@/content/site";

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="link">
      {children}
    </a>
  );
}

function Page({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="link">
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-strong">I&apos;m Ankit.</h1>

      <p>
        I write things for machines, and they understand. Junior developer at{" "}
        <Ext href="https://thefounders.co.in/">The Founders</Ext>, previously{" "}
        <Page href="/work">Avionyz &amp; Peak AI</Page>. Still in college till 2028.
      </p>

      <p>
        Won{" "}
        <span className="count text-strong" aria-label="5" role="text">
          <span aria-hidden className="count-old count-3">
            3
          </span>
          <span aria-hidden className="count-old count-4">
            4
          </span>
          <span aria-hidden className="count-5">
            5
          </span>
        </span>{" "}
        <Page href="/achievements">hackathons</Page>. The best&mdash;Bennett University, 50+ teams,{" "}
        <Page href="/projects/flow-ai">Flow AI</Page> made live phone calls on stage, first place.
      </p>

      <p>Some things I&apos;ve built:</p>

      <p>
        <Page href="/projects/aegis">AEGIS</Page>&mdash;kills ransomware mid-
        <EncryptedWord />, restores your files.
        <br />
        <Page href="/projects/astrovault">AstroVault</Page>&mdash;reads every prompt before the AI
        model does.
        <br />
        <Page href="/projects/codepush">CodePush</Page>&mdash;auto-commits DSA practice. 66 users.
        <br />
        <Page href="/projects">A few more.</Page>
      </p>

      <p>
        I find where algorithms actually run&mdash;a <SlidingWindowWord /> is how an API
        rate-limits you, LCS is the idea behind <code>git diff</code>&mdash;and{" "}
        <Page href="/learning">make reels about it</Page>. I also ship{" "}
        <Page href="/websites">websites</Page>, send{" "}
        <Page href="/open-source">PRs to projects bigger than me</Page>, and I&apos;m currently
        building PostConnect.
      </p>

      <p>Inspired by Ye.</p>

      <p>
        <Ext href={links.github}>GitHub</Ext> &middot;{" "}
        <Ext href={links.linkedin}>LinkedIn</Ext> &middot;{" "}
        <Ext href={links.instagram}>Instagram</Ext> &middot;{" "}
        <Ext href={links.x}>X</Ext> &middot;{" "}
        <Ext href={links.resume}>Resume</Ext> &middot;{" "}
        <a href={`mailto:${person.email}`} className="link">
          {person.email}
        </a>
      </p>
    </div>
  );
}
