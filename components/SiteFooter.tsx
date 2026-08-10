import Link from "next/link";
import { common, email, whatsapp, whatsappUrl, type Locale } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = common[locale];
  return <footer className="footer" id="contact"><div className="container footer-top">
    <div><Link href={`/${locale}`} className="brand"><span className="mark">L</span><span>辽宁联盛</span></Link><p>{t.footer}</p></div>
    <div><h4>{t.nav.product}</h4><ul><li><Link href={`/${locale}/product`}>Multi-frequency Crystal Core</Link></li><li>FR-DN25 - FR-DN350</li><li><Link href={`/${locale}/documents`}>{t.nav.documents}</Link></li></ul></div>
    <div><h4>{t.nav.contact}</h4><p>{t.inquiry}</p><p><a href={`mailto:${email}`}>{email}</a><br/><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: {whatsapp}</a></p></div>
  </div><div className="container footer-bottom">© {new Date().getFullYear()} 辽宁联盛. Product information is based on supplied company materials.</div></footer>;
}
