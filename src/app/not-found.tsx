import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found-inner">
        <span className="eyebrow">404</span>
        <h1>This page is not available.</h1>
        <p>The page may have moved, or the link may be incorrect.</p>
        <Link href="/" className="button">Back to home <span>→</span></Link>
      </div>
    </section>
  );
}
