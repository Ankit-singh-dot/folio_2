import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1 className="text-strong">This page doesn&apos;t exist.</h1>
      <p className="mt-3">
        <Link href="/" className="link">
          Go back home
        </Link>
      </p>
    </>
  );
}
