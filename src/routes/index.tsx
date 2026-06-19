import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  MessageCircle,
  Send,
  ChevronDown,
  FileText,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Shield,
  Award,
  Clock,
  Scale,
} from "lucide-react";
import portrait from "@/assets/lawyer-portrait.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const WHATSAPP = "https://wa.me/79141234567";
const TELEGRAM = "https://t.me/sysuev_lawyer";
const PHONE = "+7 (914) 123-45-67";
const PHONE_HREF = "tel:+79141234567";

// Placeholder for future Yandex.Metrika goal integration
function handleGoalTrigger(goal: string) {
  if (typeof window !== "undefined") {
    // window.ym?.(XXXXX, 'reachGoal', goal);
    console.log("[goal]", goal);
  }
}

const NAV = [
  { id: "razvod", label: "Развод" },
  { id: "alimenty", label: "Алименты" },
  { id: "imushchestvo", label: "Раздел имущества" },
  { id: "deti", label: "Споры о детях" },
  { id: "zemlya", label: "Земля и недвижимость" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between gap-6">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-display text-[17px] tracking-tight text-foreground">
            Артём Сысуев
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Юрист · Хабаровск
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => handleGoalTrigger(`nav_${n.id}`)}
              className="text-[13px] text-muted-foreground transition-colors hover:text-sage-dark"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            onClick={() => handleGoalTrigger("header_whatsapp")}
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-sage hover:text-sage active:scale-95"
          >
            <MessageCircle size={16} />
          </a>
          <a
            href={PHONE_HREF}
            onClick={() => handleGoalTrigger("header_call")}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/80 px-4 py-2 text-[13px] font-medium text-foreground transition-all hover:bg-foreground hover:text-background active:scale-[0.98]"
          >
            <Phone size={14} />
            Позвонить
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
          aria-label="Меню"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-[15px] text-foreground transition-colors hover:bg-paper"
                >
                  {n.label}
                </a>
              ))}
              <div className="mt-3 flex gap-2">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-sage px-4 py-3 text-[14px] font-medium text-background"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <a
                  href={PHONE_HREF}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-foreground px-4 py-3 text-[14px] font-medium text-foreground"
                >
                  <Phone size={14} /> Позвонить
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const triggers = [
    { icon: Award, label: "Опыт 11+ лет" },
    { icon: Clock, label: "Анализ за 15 минут" },
    { icon: Scale, label: "Фиксированная стоимость" },
    { icon: Shield, label: "Суд до результата" },
  ];

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-px mx-auto max-w-7xl pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-paper/50 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Частная практика · Хабаровск
            </div>

            <h1 className="font-display text-[36px] leading-[1.08] tracking-tight text-foreground md:text-[56px] lg:text-[64px]">
              Семейный и земельный юрист
              <span className="block text-muted-foreground/80 italic"> в Хабаровске.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground md:text-[17px]">
              Развод, алименты, раздел имущества и оформление земельных участков —
              сопровождение под ключ. Спокойное решение деликатных вопросов с
              предсказуемым результатом.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {triggers.map((t) => (
                <div
                  key={t.label}
                  className="flex flex-col gap-2 rounded-lg border border-border bg-background/50 p-3 transition-colors hover:border-sage/40"
                >
                  <t.icon size={16} className="text-sage" strokeWidth={1.5} />
                  <span className="text-[12px] leading-tight text-foreground md:text-[13px]">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener"
                onClick={() => handleGoalTrigger("hero_whatsapp")}
                className="inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3.5 text-[14px] font-medium text-background transition-all hover:bg-sage-dark active:scale-[0.98]"
              >
                <MessageCircle size={16} /> Написать в WhatsApp
              </a>
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noopener"
                onClick={() => handleGoalTrigger("hero_telegram")}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/70 px-6 py-3.5 text-[14px] font-medium text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background active:scale-[0.98]"
              >
                <Send size={14} /> Задать вопрос в Telegram
              </a>
              <button
                onClick={() => handleGoalTrigger("hero_callback")}
                className="text-[14px] text-muted-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:text-sage-dark hover:decoration-sage"
              >
                Заказать обратный звонок
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-paper" />
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-paper">
                <img
                  src={portrait}
                  alt="Юрист Артём Сысуев"
                  className="h-full w-full object-cover grayscale-[15%]"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-background px-4 py-3 shadow-sm">
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Стаж</div>
                <div className="font-display text-2xl text-foreground">11+ лет</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="border-y border-border bg-paper/40">
      <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-sage">Опыт в цифрах</div>
            <div className="mt-8 space-y-10">
              <div>
                <div className="font-display text-6xl text-foreground md:text-7xl">11<span className="text-sage">+</span></div>
                <div className="mt-2 text-[14px] text-muted-foreground">лет частной практики</div>
              </div>
              <div className="h-px w-16 bg-border" />
              <div>
                <div className="font-display text-6xl text-foreground md:text-7xl">200<span className="text-sage">+</span></div>
                <div className="mt-2 text-[14px] text-muted-foreground">успешно завершённых дел</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 md:pl-10 md:border-l md:border-border">
            <blockquote className="font-display text-[24px] leading-[1.4] text-foreground md:text-[32px]">
              «Семейные споры — это всегда больше, чем юридические формулировки.
              Моя задача — провести вас через процесс
              <span className="text-sage italic"> спокойно, конфиденциально</span> и
              с понятным результатом. Я веду небольшое количество дел одновременно,
              чтобы каждое получило полное внимание».
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-10 bg-foreground" />
              <div>
                <div className="text-[14px] font-medium text-foreground">Артём Сысуев</div>
                <div className="text-[12px] text-muted-foreground">Юрист, частная практика · Хабаровск</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceProps {
  id: string;
  number: string;
  title: string;
  description: string;
  price: string;
  cta: string;
  ctaLink: string;
  goal: string;
  extras: string[];
}

function ServiceCard({ s }: { s: ServiceProps }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      id={s.id}
      className="scroll-mt-24 border-t border-border py-12 md:py-16"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <div className="font-display text-[13px] text-muted-foreground">{s.number}</div>
          <h3 className="mt-3 font-display text-[28px] leading-tight text-foreground md:text-[36px]">
            {s.title}
          </h3>
          <div className="mt-6 inline-flex items-baseline gap-2">
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">от</span>
            <span className="font-display text-2xl text-sage">{s.price}</span>
          </div>
        </div>

        <div className="md:col-span-8">
          <p className="text-[16px] leading-relaxed text-muted-foreground md:text-[17px]">
            {s.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={s.ctaLink}
              target="_blank"
              rel="noopener"
              onClick={() => handleGoalTrigger(s.goal)}
              className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-3 text-[14px] font-medium text-background transition-all hover:bg-sage-dark active:scale-[0.98]"
            >
              <MessageCircle size={15} />
              {s.cta}
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center gap-2 text-[14px] text-foreground transition-colors hover:text-sage-dark"
            >
              <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={16} />
              </motion.span>
              {open ? "Скрыть сопутствующие услуги" : "Показать сопутствующие услуги"}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ul className="mt-6 grid grid-cols-1 gap-2 border-t border-border pt-6 sm:grid-cols-2">
                  {s.extras.map((e) => (
                    <li
                      key={e}
                      className="flex items-start gap-3 rounded-md bg-paper/60 px-4 py-3 text-[14px] text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage" />
                      {e}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}

function Services() {
  const services: ServiceProps[] = [
    {
      id: "razvod",
      number: "01",
      title: "Развод",
      description:
        "Расторжение брака без присутствия клиента в суде. Развод без согласия второго супруга, при наличии несовершеннолетних детей, дистанционно из любого региона.",
      price: "20 000 ₽",
      cta: "Рассчитать стоимость развода",
      ctaLink: WHATSAPP,
      goal: "service_razvod",
      extras: [
        "Признание брака недействительным",
        "Составление брачного договора",
        "Развод со спором о месте жительства детей",
        "Расторжение брака с иностранным гражданином",
      ],
    },
    {
      id: "alimenty",
      number: "02",
      title: "Алименты",
      description:
        "Взыскание алиментов, увеличение или уменьшение размера выплат — в твёрдой денежной сумме или процентах от дохода. Работа со скрытыми доходами плательщика.",
      price: "20 000 ₽",
      cta: "Узнать перспективы по алиментам",
      ctaLink: WHATSAPP,
      goal: "service_alimenty",
      extras: [
        "Взыскание задолженности по алиментам",
        "Алименты на содержание супруги",
        "Освобождение от уплаты задолженности",
        "Изменение порядка взыскания",
      ],
    },
    {
      id: "imushchestvo",
      number: "03",
      title: "Раздел имущества",
      description:
        "Раздел недвижимости, автотранспорта, бизнеса, ипотечных обязательств и долгов. Поиск скрытых активов, оспаривание сделок, выделение долей.",
      price: "20 000 ₽",
      cta: "Оценить доли имущества в Telegram",
      ctaLink: TELEGRAM,
      goal: "service_imushchestvo",
      extras: [
        "Раздел ипотечной квартиры",
        "Раздел бизнеса и долей в ООО",
        "Оспаривание брачного договора",
        "Признание имущества личной собственностью",
      ],
    },
    {
      id: "deti",
      number: "04",
      title: "Споры о детях",
      description:
        "Определение места жительства ребёнка, установление графика общения с отдельно проживающим родителем, установление и оспаривание отцовства.",
      price: "20 000 ₽",
      cta: "Проконсультироваться по спору о детях",
      ctaLink: WHATSAPP,
      goal: "service_deti",
      extras: [
        "Лишение и ограничение родительских прав",
        "Усыновление и опека",
        "Вывоз ребёнка за границу",
        "Взаимодействие с органами опеки",
      ],
    },
    {
      id: "zemlya",
      number: "05",
      title: "Земля и недвижимость",
      description:
        "Регистрация и приватизация земельных участков, оформление земли под жилым домом, межевание и согласование границ, разрешения на строительство.",
      price: "30 000 ₽",
      cta: "Задать вопрос земельному юристу",
      ctaLink: WHATSAPP,
      goal: "service_zemlya",
      extras: [
        "Перевод земель из одной категории в другую",
        "Споры с соседями о границах участка",
        "Оспаривание кадастровой стоимости",
        "Узаконивание самовольных построек",
      ],
    },
  ];

  return (
    <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
      <div className="mb-12 max-w-2xl md:mb-16">
        <div className="text-[11px] uppercase tracking-[0.22em] text-sage">Направления практики</div>
        <h2 className="mt-4 font-display text-[36px] leading-tight text-foreground md:text-[48px]">
          Пять ключевых направлений с фиксированной стоимостью
        </h2>
      </div>
      <div>
        {services.map((s) => (
          <ServiceCard key={s.id} s={s} />
        ))}
      </div>
    </section>
  );
}

function PriceList() {
  const rows = [
    { label: "Устная и письменная консультация", price: "от 1 000 ₽" },
    { label: "Составление исков и претензий", price: "от 2 000 ₽" },
    { label: "Представительство на одном заседании", price: "от 5 000 ₽" },
    { label: "Досудебное урегулирование споров", price: "от 10 000 ₽" },
  ];
  return (
    <section id="uslugi" className="scroll-mt-24 border-y border-border bg-paper/40">
      <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-sage">Прайс-лист</div>
            <h2 className="mt-4 font-display text-[32px] leading-tight text-foreground md:text-[40px]">
              Разовые и дополнительные услуги
            </h2>
            <p className="mt-4 text-[15px] text-muted-foreground">
              Прозрачные тарифы без скрытых платежей. Точная стоимость
              определяется после анализа ситуации.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="overflow-hidden rounded-xl border border-border bg-background">
              {rows.map((r, i) => (
                <div
                  key={r.label}
                  className={`flex items-baseline justify-between gap-6 px-6 py-5 ${i !== 0 ? "border-t border-border" : ""}`}
                >
                  <span className="text-[15px] text-foreground">{r.label}</span>
                  <span className="font-display text-[18px] text-sage shrink-0">{r.price}</span>
                </div>
              ))}
            </div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleGoalTrigger("download_pricelist"); }}
              className="mt-6 inline-flex items-center gap-2 text-[14px] text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-sage-dark hover:decoration-sage"
            >
              <FileText size={15} />
              Скачать полный прайс-лист в PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cases() {
  const cases = [
    {
      caseNo: "Дело № 2-1847/2024",
      before: "Супруг скрыл от раздела два автомобиля и долю в ООО, переоформив их на родителей за полгода до развода.",
      after: "Оспорены сделки как мнимые. Активы возвращены в общую массу, клиентке присуждено 50% стоимости — 3,2 млн ₽.",
    },
    {
      caseNo: "Дело № 2-0932/2023",
      before: "Отец на протяжении 3 лет не платил алименты, формально получая «серую» зарплату 15 000 ₽.",
      after: "Установлены реальные доходы, алименты переведены в твёрдую сумму. Взыскана задолженность — 870 000 ₽.",
    },
    {
      caseNo: "Дело № 2А-0418/2024",
      before: "Администрация отказала в оформлении участка под жилым домом, ссылаясь на отсутствие правоустанавливающих документов.",
      after: "Право собственности признано в судебном порядке. Участок 12 соток оформлен в собственность клиента.",
    },
  ];

  return (
    <section id="cases" className="scroll-mt-24 container-px mx-auto max-w-7xl py-20 md:py-28">
      <div className="mb-12 max-w-2xl md:mb-16">
        <div className="text-[11px] uppercase tracking-[0.22em] text-sage">Практика</div>
        <h2 className="mt-4 font-display text-[36px] leading-tight text-foreground md:text-[48px]">
          Реальные кейсы: было → стало
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cases.map((c, i) => (
          <motion.div
            key={c.caseNo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="overflow-hidden rounded-xl border border-border bg-background"
          >
            <div className="border-b border-border bg-paper/50 px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {c.caseNo}
            </div>
            <div className="grid grid-cols-1">
              <div className="border-b border-border px-6 py-6">
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Было</div>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground">{c.before}</p>
              </div>
              <div className="bg-paper/30 px-6 py-6">
                <div className="text-[11px] uppercase tracking-[0.18em] text-sage">Стало</div>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground">{c.after}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Documents() {
  const docs = [
    { title: "Диплом о высшем юридическом образовании", subtitle: "ДВФУ, 2013" },
    { title: "Свидетельство о повышении квалификации", subtitle: "Семейное право, 2021" },
    { title: "Удостоверение о членстве в профессиональной ассоциации", subtitle: "2018" },
    { title: "Отзыв клиента · Яндекс.Услуги", subtitle: "Раздел имущества" },
    { title: "Отзыв клиента · Профи.ру", subtitle: "Земельный спор" },
    { title: "Благодарственное письмо", subtitle: "Сопровождение развода" },
  ];
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % docs.length);
  const prev = () => setIdx((i) => (i - 1 + docs.length) % docs.length);

  return (
    <section className="border-t border-border bg-paper/40">
      <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-sage">Доказательства</div>
            <h2 className="mt-4 font-display text-[32px] leading-tight text-foreground md:text-[40px]">
              Документы и отзывы
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} aria-label="Назад" className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-sage hover:text-sage active:scale-95">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} aria-label="Вперёд" className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-sage hover:text-sage active:scale-95">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `calc(${-idx * 100}% / 3)` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-5"
            style={{ width: `${(docs.length * 100) / 3}%` }}
          >
            {docs.map((d) => (
              <div
                key={d.title}
                className="shrink-0 basis-full sm:basis-1/2 lg:basis-1/3"
                style={{ width: `calc(100% / ${docs.length})` }}
              >
                <div className="group flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-xl border border-border bg-background p-6">
                  <div className="flex flex-1 items-center justify-center">
                    <FileText size={40} strokeWidth={1} className="text-border transition-colors group-hover:text-sage" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{d.subtitle}</div>
                    <div className="mt-2 text-[14px] leading-snug text-foreground">{d.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 flex justify-center gap-1.5">
          {docs.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Слайд ${i + 1}`}
              className={`h-1 rounded-full transition-all ${i === idx ? "w-6 bg-sage" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaStrip() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
      <div className="rounded-2xl bg-foreground px-8 py-14 text-background md:px-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h2 className="font-display text-[32px] leading-tight md:text-[44px]">
              Обсудим вашу ситуацию <span className="italic text-background/60">конфиденциально</span>
            </h2>
            <p className="mt-4 max-w-lg text-[15px] text-background/70">
              Первый разбор — 15 минут. Я скажу честно, есть ли судебная
              перспектива и какой план действий подходит именно вам.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              onClick={() => handleGoalTrigger("cta_whatsapp")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 text-[14px] font-medium text-foreground transition-all hover:bg-sage hover:text-background active:scale-[0.98]"
            >
              <MessageCircle size={16} /> Написать в WhatsApp
            </a>
            <a
              href={PHONE_HREF}
              onClick={() => handleGoalTrigger("cta_call")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 px-6 py-3.5 text-[14px] font-medium text-background transition-colors hover:border-background"
            >
              <Phone size={14} /> {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-paper/30">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-[18px] text-foreground">Артём Сысуев</div>
            <div className="mt-1 text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
              Юрист · Хабаровск
            </div>
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-muted-foreground">
              Частная юридическая практика. Семейные споры, раздел имущества,
              земельные вопросы. Работа с клиентами по всему Хабаровскому краю.
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Контакты</div>
            <div className="mt-4 space-y-2 text-[14px] text-foreground">
              <div><a href={PHONE_HREF} className="hover:text-sage-dark">{PHONE}</a></div>
              <div className="text-muted-foreground">г. Хабаровск, ул. Муравьёва-Амурского</div>
              <div className="text-muted-foreground">Пн–Сб · 9:00–20:00</div>
            </div>
            <div className="mt-5 flex gap-2">
              <a href={WHATSAPP} target="_blank" rel="noopener" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-sage hover:text-sage">
                <MessageCircle size={14} />
              </a>
              <a href={TELEGRAM} target="_blank" rel="noopener" aria-label="Telegram" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-sage hover:text-sage">
                <Send size={14} />
              </a>
              <a href={PHONE_HREF} aria-label="Телефон" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-sage hover:text-sage">
                <Phone size={14} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Правовая информация</div>
            <ul className="mt-4 space-y-2 text-[13px]">
              <li><a href="#" className="text-muted-foreground hover:text-sage-dark">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sage-dark">Согласие на обработку данных</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sage-dark">Публичная оферта</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-[12px] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Артём Сысуев. Все права защищены.</div>
          <div>Информация на сайте не является публичной офертой.</div>
        </div>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <PriceList />
        <Cases />
        <Documents />
        <CtaStrip />
      </main>
      <Footer />
    </div>
  );
}
