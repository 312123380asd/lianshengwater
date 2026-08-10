import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { isLocale, locales, type Locale } from "@/lib/site";

const copy={
  en:{title:"Technical Documents",lead:"Download product and installation information for project review.",download:"Download PDF",docs:[["Product Catalogue","Company and product information from the supplied catalogue."],["Technical Manual","Working principle, operating conditions and FR-series specifications."],["Installation Guide","Selection, installation position and flow-direction guidance."]]},
  ru:{title:"Технические документы",lead:"Загрузите материалы о продукте и монтаже для рассмотрения проекта.",download:"Скачать PDF",docs:[["Каталог продукции","Информация о компании и продукции из предоставленного каталога."],["Техническое руководство","Принцип работы, условия применения и характеристики серии FR."],["Инструкция по монтажу","Подбор, место установки и направление потока."]]},
  zh:{title:"技术资料",lead:"下载产品与安装资料，用于项目评估。",download:"下载 PDF",docs:[["产品目录","来自公司所提供目录的企业与产品信息。"],["技术手册","工作原理、应用条件与FR系列规格。"],["安装指南","选型、安装位置与流向说明。"]]},
} satisfies Record<Locale,object>;
const files=["product-catalogue.pdf","technical-manual.pdf","installation-guide.pdf"];
export function generateStaticParams(){return locales.map(locale=>({locale}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const{locale}=await params;const l:Locale=isLocale(locale)?locale:"en";return{title:`${copy[l].title} | 辽宁联盛`,description:copy[l].lead,alternates:{canonical:`/${l}/documents`}};}
export default async function Documents({params}:{params:Promise<{locale:string}>}){const{locale}=await params;if(!isLocale(locale))notFound();const t=copy[locale];return <main className="site-shell"><SiteHeader locale={locale} active="documents"/><PageHero eyebrow="Downloads · PDF" title={t.title} lead={t.lead}/><section className="section"><div className="container document-grid">{t.docs.map(([h,p]:string[],i:number)=><article className="document-card" key={h}><span>PDF · 0{i+1}</span><h2>{h}</h2><p>{p}</p><a className="button document-button" href={`/documents/${files[i]}`} download>{t.download} ↓</a></article>)}</div></section><SiteFooter locale={locale}/></main>}
