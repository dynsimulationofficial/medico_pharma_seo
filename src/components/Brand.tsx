import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Medico Pharma home">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-mark-cross brand-mark-cross-v" />
        <span className="brand-mark-cross brand-mark-cross-h" />
      </span>
      <span className="brand-copy">
        <strong>Medico</strong>
        <span>Pharma</span>
      </span>
    </Link>
  );
}
