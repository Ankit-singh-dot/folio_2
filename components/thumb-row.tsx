import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  proof?: string;
  thumb: string;
  href: string;
  external?: boolean;
  preload?: boolean;
};

export function ThumbRow({
  title,
  description,
  proof,
  thumb,
  href,
  external = false,
  preload = false,
}: Props) {
  const content = (
    <>
      <Image
        src={thumb}
        alt=""
        width={320}
        height={200}
        preload={preload}
        sizes="(min-width: 640px) 160px, 112px"
        className="aspect-[8/5] w-28 shrink-0 rounded-md bg-tile object-cover object-left-top outline outline-1 -outline-offset-1 outline-black/10 sm:w-40"
      />
      <span className="min-w-0">
        <span className="block text-strong underline decoration-transparent decoration-1 underline-offset-[0.2em] transition-colors group-hover:decoration-current">
          {title}
        </span>
        <span className="mt-1.5 block text-quiet">{description}</span>
        {proof && <span className="date mt-1.5 block">{proof}</span>}
      </span>
    </>
  );

  const className = "group flex items-start gap-4 sm:gap-7";

  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
