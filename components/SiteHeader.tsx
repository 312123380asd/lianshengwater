import Link from "next/link";
import { common, type Locale } from "@/lib/site";

export function SiteHeader({ locale, active }: { locale: Locale; active?: string }) {
  const t = common[locale];
  const items = [
    ["home", `/${locale}`, t.nav.home], ["product", `/${locale}/product`, t.nav.product],
    ["applications", `/${locale}/applications`, t.nav.applications], ["documents", `/${locale}/documents`, t.nav.documents],
    ["partner", `/${locale}/partner`, t.nav.partner], ["contact", `/${locale}#contact`, t.nav.contact],
  ];
  return <>
    <div className="topbar"><div className="container"><span>{t.region}</span><span>{t.markets}</span></div></div>
    <header className="nav"><div className="container nav-inner">
      <Link href={`/${locale}`} className="brand" aria-label="辽宁联盛"><span className="mark">L</span><span>辽宁联盛</span></Link>
      <nav className="nav-links" aria-label="Main navigation">{items.map(([key, href, label]) => <Link className={active === key ? "active" : ""} href={href} key={key}>{label}</Link>)}<LocaleLinks /></nav>
      <details className="mobile-menu"><summary aria-label="Open menu">MENU</summary><div>{items.map(([key, href, label]) => <Link href={href} key={key}>{label}</Link>)}<LocaleLinks /></div></details>
    </div></header>
  </>;
}

function LocaleLinks() { return <span className="language-links"><Link href="/ru">RU</Link><Link href="/en">EN</Link><Link href="/zh">中文</Link></span>; }
