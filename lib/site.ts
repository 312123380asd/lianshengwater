export const locales = ["en", "ru", "zh"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
export const email = "1445517864@wanweijx.cn";
export const whatsapp = "+86 173 0349 7606";
export const whatsappUrl = "https://wa.me/8617303497606";

export const common = {
  en: {
    nav: { home: "Home", product: "Product", applications: "Applications", documents: "Documents", partner: "Partners", contact: "Contact" },
    region: "China · Industrial Water Treatment", markets: "Russia · Europe · Central Asia",
    footer: "Industrial scale prevention solutions for industrial water systems.", inquiry: "Technical and partnership enquiries are welcome.",
  },
  ru: {
    nav: { home: "Главная", product: "Продукт", applications: "Применение", documents: "Документы", partner: "Партнёрам", contact: "Контакты" },
    region: "Китай · Промышленная водоподготовка", markets: "Россия · Европа · Центральная Азия",
    footer: "Промышленные решения для защиты водяных систем от накипи.", inquiry: "Принимаем технические запросы и предложения о партнёрстве.",
  },
  zh: {
    nav: { home: "首页", product: "产品", applications: "应用", documents: "技术资料", partner: "合作伙伴", contact: "联系我们" },
    region: "中国 · 工业水处理", markets: "俄罗斯 · 欧洲 · 中亚",
    footer: "面向工业水系统的水垢防护解决方案。", inquiry: "欢迎咨询技术资料与渠道合作。",
  },
} satisfies Record<Locale, unknown>;

export const specifications = [
  ["FR-DN25", "DN25", "45", "222", "0.01-7.20", "Thread / Flange", "1.0 / 1.6"],
  ["FR-DN40", "DN40", "80", "259", "7.21-13.70", "Thread / Flange", "1.0 / 1.6"],
  ["FR-DN80", "DN80", "120", "299", "13.71-41.40", "Thread / Flange", "1.0 / 1.6"],
  ["FR-DN100", "DN100", "220", "386", "41.41-50.30", "Flange", "1.0 / 1.6 / 2.5"],
  ["FR-DN150", "DN150", "285", "455", "50.31-124.90", "Flange", "1.0 / 1.6 / 2.5"],
  ["FR-DN200", "DN200", "340", "430", "124.91-242.30", "Flange", "1.0 / 1.6 / 2.5"],
  ["FR-DN250", "DN250", "405", "532", "242.31-389.80", "Flange", "1.0 / 1.6 / 2.5"],
  ["FR-DN300", "DN300", "460", "488", "389.81-539.90", "Flange", "1.0 / 1.6 / 2.5"],
  ["FR-DN350", "DN350", "520", "556", "539.91-667.90", "Flange", "1.0 / 1.6 / 2.5"],
] as const;
