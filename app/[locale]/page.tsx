import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { email, isLocale, locales, siteUrl, whatsapp, whatsappUrl, type Locale } from "@/lib/site";

const copy = {
  en: {
    title: "Industrial Scale Prevention Solutions for Industrial Water Systems",
    lead: "Chemical-free scale prevention technology for boilers, pipelines and heat exchangers.",
    introK: "Company introduction", introT: "A Chinese manufacturer focused on industrial water systems.",
    introP: "Liaoning Liansheng supplies physical scale prevention equipment for industrial circulating-water and heat-transfer systems, serving customers and engineering partners in Russia, Europe and Central Asia.",
    advantagesK: "Product advantages", advantagesT: "Simple integration. Long-term industrial operation.",
    advantages: [["No Chemicals", "Physical water treatment without adding chemical agents."], ["No Electricity", "The device operates without an external power supply."], ["Low Maintenance", "No routine personnel attendance or maintenance is described in the product materials."], ["Long Service Life", "The supplied documentation states at least 10 years under general conditions, depending on operation."]],
    appsK: "Application areas", appsT: "Designed around industrial heat and water circuits.",
    apps: [["Boiler Systems", "Scale prevention for boiler-water and heating circuits."], ["Heat Exchangers", "Protection for hot-water exchange and circulating systems."], ["Industrial Pipelines", "In-line treatment for industrial process-water pipelines."], ["Cooling Water Systems", "Physical treatment for industrial cooling-water circulation."], ["Manufacturing Industry", "Applications in power and heat, beverage, petrochemical, food, metallurgy, mining and pharmaceutical facilities."]],
    casesK: "Case studies", casesT: "Verified application records from the supplied company materials.", caseSource: "Based on supplied project materials",
    cases: [
      ["Heating company heat-exchange station", "Heat-exchange station · DN250 pipeline", "The supplied case page records an FR device installed on a DN250 line together with a Y-strainer, and includes a Y-strainer application comparison."],
      ["Commercial heating and cooling source system", "Commercial heating and cooling circuit", "The supplied materials document the installation location and provide post-use photographs of components from the system."],
      ["District heating station", "Heating circuit · Heat-exchange equipment", "The case record shows two device installation arrangements and a comparison photograph of heat-exchanger plates."],
      ["Shougang seawater desalination project", "Desalination system · Two DN600 units", "The materials state that two DN600 units were installed to address scaling in evaporators, heat exchangers and pipelines, with the stated aims of improving heat-transfer efficiency, reducing energy waste and supporting freshwater output."],
    ],
    partnerK: "Partner recruitment", partnerT: "Become our partner in Russia.", partnerP: "We are looking for distributors, water treatment companies, engineering companies and boiler equipment suppliers for industrial water treatment solutions.",
    explore: "Explore applications", technical: "View technical data", partner: "Become our partner", contact: "Send an enquiry",
  },
  ru: {
    title: "Промышленные решения для защиты водяных систем от накипи",
    lead: "Безреагентная технология защиты от накипи для котлов, трубопроводов и теплообменников.",
    introK: "О компании", introT: "Китайский производитель оборудования для промышленных водяных систем.",
    introP: "Liaoning Liansheng поставляет оборудование физической защиты от накипи для промышленных циркуляционных и теплообменных систем. Основные рынки — Россия, Европа и Центральная Азия.",
    advantagesK: "Преимущества", advantagesT: "Простая интеграция и длительная промышленная эксплуатация.",
    advantages: [["Без химических реагентов", "Физическая обработка воды без добавления реагентов."], ["Без электропитания", "Для работы устройства не требуется внешнее питание."], ["Низкие требования к обслуживанию", "В материалах указано, что постоянное присутствие персонала и регулярное обслуживание не требуются."], ["Длительный срок службы", "В документации указан срок службы не менее 10 лет при обычных условиях, в зависимости от эксплуатации."]],
    appsK: "Области применения", appsT: "Для промышленных тепловых и водяных контуров.",
    apps: [["Котельные системы", "Защита котловых и отопительных контуров от накипи."], ["Теплообменники", "Защита систем горячего водообмена и циркуляции."], ["Промышленные трубопроводы", "Встраиваемая обработка воды в промышленных трубопроводах."], ["Системы охлаждения", "Физическая обработка воды в промышленных контурах охлаждения."], ["Промышленное производство", "Энергетика, теплоснабжение, напитки, нефтехимия, пищевая промышленность, металлургия, горное дело и фармацевтика."]],
    casesK: "Проекты", casesT: "Подтверждённые записи о применении из предоставленных материалов.", caseSource: "По предоставленным проектным материалам",
    cases: [
      ["Теплообменная станция теплоснабжающей компании", "Теплообменная станция · трубопровод DN250", "В материалах зафиксирована установка устройства FR на линии DN250 вместе с Y-образным фильтром и приведено сравнение состояния фильтра."],
      ["Коммерческая система тепло- и холодоснабжения", "Коммерческий контур отопления и охлаждения", "В материалах показано место установки и приведены фотографии компонентов системы после эксплуатации устройства."],
      ["Станция теплоснабжения", "Контур теплоснабжения · теплообменное оборудование", "Запись содержит два варианта установки устройства и сравнительную фотографию пластин теплообменника."],
      ["Проект опреснения морской воды Shougang", "Система опреснения · два устройства DN600", "Согласно материалам, две установки DN600 применены для решения проблем накипи в испарителях, теплообменниках и трубопроводах с целью повышения теплоотдачи, снижения потерь энергии и поддержки производительности по пресной воде."],
    ],
    partnerK: "Партнёрская программа", partnerT: "Станьте нашим партнёром в России.", partnerP: "Мы ищем дистрибьюторов, водоподготовительные и инжиниринговые компании, а также поставщиков котельного оборудования.",
    explore: "Смотреть применения", technical: "Технические данные", partner: "Стать партнёром", contact: "Отправить запрос",
  },
  zh: {
    title: "工业水系统水垢防护解决方案",
    lead: "面向锅炉、管道和换热设备的无化学药剂水垢防护技术。",
    introK: "公司介绍", introT: "专注工业水系统的中国设备制造商。",
    introP: "辽宁联盛面向工业循环水和换热系统提供物理水垢处理设备，服务俄罗斯、欧洲及中亚市场的工业客户与工程合作伙伴。",
    advantagesK: "产品优势", advantagesT: "便于系统集成，适合长期工业运行。",
    advantages: [["无需化学药剂", "采用物理水处理方式，不向水中添加化学药剂。"], ["无需外接电源", "设备运行无需外部电源。"], ["低维护", "产品资料说明无需日常人员值守和维护。"], ["使用寿命长", "资料说明一般工况下使用寿命不低于10年，具体取决于运行条件。"]],
    appsK: "应用领域", appsT: "围绕工业热力与水循环系统设计。",
    apps: [["锅炉系统", "用于锅炉水与供热循环系统的水垢防护。"], ["换热设备", "用于热水交换和循环水系统。"], ["工业管道", "用于工业工艺水与循环水管道的在线处理。"], ["冷却水系统", "用于工业冷却水循环的物理水处理。"], ["制造业", "适用于电力热力、饮料、石化、食品、冶金矿山及制药等行业。"]],
    casesK: "项目案例", casesT: "以下为公司资料中可核实的项目应用记录。", caseSource: "依据公司提供的项目资料",
    cases: [
      ["某热力公司换热站", "换热站 · DN250管路", "资料记录在DN250管路加装FR设备及Y型过滤器，并提供了Y型过滤器应用效果对比。"],
      ["某商业冷热源系统", "商业供冷供热循环", "资料展示了设备安装位置，并收录系统部件在设备使用后的现场照片。"],
      ["某供热站", "供热循环 · 换热设备", "案例资料展示两处设备安装方式，并提供换热器板片的效果对比照片。"],
      ["首钢海水淡化项目", "海水淡化系统 · 两套DN600设备", "资料说明在海水淡化系统安装两套DN600设备，用于解决蒸发器、换热器及管道结垢问题，目标为提高换热效率、减少能源浪费并提升主体淡水产水效率。"],
    ],
    partnerK: "渠道合作", partnerT: "成为我们的俄罗斯市场合作伙伴。", partnerP: "我们正在寻找俄罗斯经销商、水处理公司、工程公司和锅炉设备供应商，共同拓展工业水处理市场。",
    explore: "查看应用", technical: "查看技术数据", partner: "成为合作伙伴", contact: "发送询盘",
  },
} satisfies Record<Locale, object>;

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; const l: Locale = isLocale(locale) ? locale : "en"; const t = copy[l];
  return { title: `${t.title} | 辽宁联盛`, description: t.lead, keywords: ["Industrial water treatment", "Scale prevention system", "Boiler water treatment", "Heat exchanger protection", "Защита от накипи", "Водоподготовка", "Промышленные котельные", "Теплообменники"], alternates: { canonical: `/${l}`, languages: { en: "/en", ru: "/ru", "zh-CN": "/zh" } }, openGraph: { title: t.title, description: t.lead, images: ["/og.webp"], locale: l === "ru" ? "ru_RU" : l === "zh" ? "zh_CN" : "en_US" } };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isLocale(locale)) notFound(); const t = copy[locale];
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: "辽宁联盛", url: `${siteUrl}/${locale}`, email, telephone: "+8617303497606", areaServed: ["Russia", "Europe", "Central Asia"], makesOffer: { "@type": "Offer", itemOffered: { "@type": "Product", name: "Multi-frequency Crystal Core Scale Prevention System", category: "Industrial water treatment equipment" } } };
  return <main className="site-shell"><SiteHeader locale={locale} active="home" />
    <section className="hero"><Image className="hero-media" src="/industrial-plant-hero.webp" alt="Industrial boiler room, pipelines and heat exchange equipment" fill priority sizes="100vw" unoptimized /><div className="container hero-copy"><span className="eyebrow">Multi-frequency Crystal Core System</span><h1>{t.title}</h1><p>{t.lead}</p><div className="buttons"><Link href={`/${locale}/product`} className="button primary">{t.technical}</Link><Link href={`/${locale}/partner`} className="button">{t.partner}</Link></div></div><div className="proof"><div className="container">{["No Chemicals", "No Electricity", "Low Maintenance", "Long Service Life"].map(x => <div className="proof-item" key={x}>{x}</div>)}</div></div></section>
    <section className="section"><div className="container intro"><div><div className="section-label">{t.introK}</div><h2 className="section-title">{t.introT}</h2></div><p>{t.introP}</p></div></section>
    <section className="section pale"><div className="container"><div className="section-label">{t.advantagesK}</div><h2 className="section-title">{t.advantagesT}</h2><div className="feature-grid">{t.advantages.map(([h,p]: string[], i: number) => <article className="feature" key={h}><span className="feature-number">0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>
    <section className="section applications"><div className="container"><div className="section-label">{t.appsK}</div><h2 className="section-title">{t.appsT}</h2><div className="application-grid five">{t.apps.map(([h,p]: string[], i: number) => <article className="application" key={h}><span>0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div><Link className="text-link" href={`/${locale}/applications`}>{t.explore} →</Link></div></section>
    <section className="section"><div className="container"><div className="section-label">{t.casesK}</div><h2 className="section-title">{t.casesT}</h2><div className="case-grid">{t.cases.map(([title, system, detail]: string[], i: number) => <article className="case-card detailed" key={title}><div className="case-head"><b>0{i+1}</b><span className="case-tag">{system}</span></div><div><h3>{title}</h3><p>{detail}</p><span className="case-source">{t.caseSource}</span></div></article>)}</div></div></section>
    <section className="section partner"><div className="container partner-box"><div><div className="section-label">{t.partnerK}</div><h2 className="section-title">{t.partnerT}</h2><p>{t.partnerP}</p></div><Link href={`/${locale}/partner`} className="button primary">{t.partner}</Link></div></section>
    <section className="contact-strip"><div className="container"><div><span className="eyebrow">Contact</span><h2>{t.contact}</h2></div><div className="contact-links"><a href={`mailto:${email}`}>{email}</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: {whatsapp}</a></div></div></section>
    <SiteFooter locale={locale} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
