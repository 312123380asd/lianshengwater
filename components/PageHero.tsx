import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead: string; children?: ReactNode }) {
  return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{lead}</p>{children}</div></section>;
}
