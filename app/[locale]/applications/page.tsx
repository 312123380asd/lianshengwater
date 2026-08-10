import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { isLocale, locales, type Locale } from "@/lib/site";

const copy = {
  en: { title: "Industrial Applications", lead: "Physical scale prevention for boiler rooms, heat-transfer equipment, pipelines and manufacturing water circuits.", labels: ["Customer problem", "Solution", "Benefits"], items: [
    ["Boiler Systems", "Scale can form in boiler-water and heating circuits, affecting routine operation and maintenance.", "Install the in-line system at the protected equipment inlet or after the pump outlet shut-off valve, matched to pipe diameter.", "Reduce scale formation without chemical dosing or an external power supply."],
    ["Heat Exchangers", "Mineral deposition can build up on heat-transfer surfaces in hot-water exchange systems.", "Apply physical treatment upstream of the protected heat exchanger, with the device arrow aligned to flow.", "Support heat-exchange equipment protection and reduce routine descaling work."],
    ["Industrial Pipelines", "Scale deposition can accumulate inside process-water and circulation pipelines.", "Integrate the correctly sized FR-series device directly into the industrial pipeline.", "Reduce deposition while avoiding chemical addition to the water."],
    ["Cooling Water Systems", "Circulating and make-up water can introduce scale-forming minerals into cooling loops.", "Install on return-water and make-up-water lines, treating make-up water before it enters the circuit.", "Chemical-free treatment with low routine maintenance requirements."],
    ["Manufacturing Industry", "Industrial facilities need a scalable approach across different circulating-water and heat-transfer systems.", "Select and customize the device according to actual pipe size, flow, pressure and water conditions.", "A physical treatment option for power and heat, beverage, petrochemical, food, metallurgy, mining and pharmaceutical applications."],
  ]},
  ru: { title: "Промышленное применение", lead: "Физическая защита от накипи для котельных, теплообменного оборудования, трубопроводов и водяных контуров предприятий.", labels: ["Проблема заказчика", "Решение", "Преимущества"], items: [
    ["Котельные системы", "В котловых и отопительных контурах может образовываться накипь, усложняющая эксплуатацию и обслуживание.", "Установить устройство перед защищаемым оборудованием или после запорного клапана насоса, подобрав модель по диаметру трубы.", "Снижение образования накипи без химического дозирования и внешнего питания."],
    ["Теплообменники", "На теплообменных поверхностях систем горячего водообмена могут накапливаться минеральные отложения.", "Применить физическую обработку перед теплообменником и совместить стрелку устройства с направлением потока.", "Защита теплообменного оборудования и сокращение регулярных работ по удалению накипи."],
    ["Промышленные трубопроводы", "В трубопроводах технологической и циркуляционной воды могут накапливаться отложения.", "Встроить устройство серии FR соответствующего размера непосредственно в трубопровод.", "Снижение отложений без добавления химических реагентов в воду."],
    ["Системы охлаждения", "Циркуляционная и подпиточная вода приносит в контур накипеобразующие минералы.", "Установить устройства на обратной и подпиточной линиях, обрабатывая подпиточную воду до ввода в контур.", "Безреагентная обработка с низкими требованиями к регулярному обслуживанию."],
    ["Промышленное производство", "Предприятиям требуется масштабируемое решение для разных водяных и теплообменных систем.", "Подобрать или адаптировать устройство по фактическому диаметру, расходу, давлению и условиям воды.", "Физическая обработка для энергетики, теплоснабжения, напитков, нефтехимии, пищевой промышленности, металлургии, горного дела и фармацевтики."],
  ]},
  zh: { title: "工业应用", lead: "面向锅炉房、换热设备、管道和制造业水循环系统的物理水垢防护。", labels: ["客户问题", "解决方案", "客户收益"], items: [
    ["锅炉系统", "锅炉水和供热循环中可能形成水垢，增加运行与维护工作。", "按安装处管径选型，在被保护设备入口或水泵出口截止阀后安装。", "无需化学加药和外接电源，减少水垢形成。"],
    ["换热设备", "热水交换系统的换热表面可能出现矿物沉积。", "在换热设备上游进行物理处理，并确保设备箭头与水流方向一致。", "支持换热设备防护，减少日常除垢工作。"],
    ["工业管道", "工艺水和循环水管道内部可能累积水垢沉积。", "将匹配管径的FR系列设备直接安装在工业管道中。", "在不向水中添加化学药剂的情况下减少沉积。"],
    ["冷却水系统", "循环水与补水会将成垢矿物带入冷却回路。", "在回水管和补水管安装，补水进入循环前先处理。", "无化学药剂处理，日常维护需求低。"],
    ["制造业", "工业企业需要适配多种循环水和换热系统的处理方案。", "根据实际管径、流量、压力和水质条件进行选型或定制。", "适用于电力热力、饮料、石化、食品、冶金矿山及制药领域的物理处理。"],
  ]},
} satisfies Record<Locale, object>;
export function generateStaticParams() { return locales.map(locale => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const {locale}=await params; const l:Locale=isLocale(locale)?locale:"en"; return { title: `${copy[l].title} | 辽宁联盛`, description: copy[l].lead, alternates: { canonical: `/${l}/applications` } }; }
export default async function Applications({ params }: { params: Promise<{locale:string}> }) { const {locale}=await params; if(!isLocale(locale)) notFound(); const t=copy[locale]; return <main className="site-shell"><SiteHeader locale={locale} active="applications"/><PageHero eyebrow="Boilers · Heat Exchangers · Pipelines" title={t.title} lead={t.lead}/><section className="section"><div className="container scenario-list">{t.items.map(([title,problem,solution,benefits]:string[],i:number)=><article className="scenario" key={title}><div className="scenario-index">0{i+1}</div><div><h2>{title}</h2><div className="scenario-grid">{[problem,solution,benefits].map((body,j)=><div key={body}><h3>{t.labels[j]}</h3><p>{body}</p></div>)}</div></div></article>)}</div></section><SiteFooter locale={locale}/></main>; }
