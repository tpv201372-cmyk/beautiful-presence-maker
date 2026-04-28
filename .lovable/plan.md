## Add new section "НЕО-закупки в Китае 2.0 — новые маркетплейсы"

A standalone landing section placed **before** the "Беспроцентная рассрочка" (Installment) block, in the same visual style as the rest of the site (cream/beige/navy palette, `font-display`, uppercase chocolate eyebrow, gold accents, reveal animations, capsule buttons).

This is NOT a new route — it's a new section component on the home page (consistent with how "НЕО-закупки" already lives inside `OtherPrograms`). The user's word "страница" refers to the page-section before "Оплата · Беспроцентная рассрочка".

### What it contains

- Eyebrow: `Новый продукт`
- Heading: **НЕО-закупки в Китае 2.0** — *новые маркетплейсы* (italic chocolate accent like other section titles)
- Lead paragraph: "Многие уже изучили сайты 1688, Таобао, Пойзон и Пиндуодуо и хотят идти дальше, узнавать больше, и вообще, развиваться как байеры в будущем. Я сделала для таких людей отдельное обучение."
- "Что входит в обучение" — 4 feature cards (cream cards with gold top border, `Check` icons), one per bullet:
  1. Изучение схемы заказа с маркетплейсов VipShop, Weidian, Gofish, GXHY и обмен юаней
  2. Создание китайского номера телефона, WeChat и регистрация в WeChat Pay
  3. Подробный модуль про доставку — как не попасть на деньги при габаритных товарах, грамотно просчитать стоимость и подобрать упаковку. Проверенный сервис доставки от 300 г (чай, часы)
  4. Самостоятельный обмен юаней на Alipay — ещё один способ заработка на Китае
- Two pricing cards side-by-side (matching the existing tariff style inside `OtherPrograms` — cream block, chocolate eyebrow `Тариф`, navy display price, bullet features, full-width navy "Оплатить" button):

  **Тариф · Самостоятельно — 8 500 ₽**
  - Для самостоятельного изучения
  - Доступ к урокам 4 месяца
  - Кнопка «Оплатить» (placeholder URL — see questions below)

  **Тариф · С обратной связью — 13 500 ₽** (highlighted with `Выбор большинства`-style gold badge)
  - Обратная связь в группе в течение 2 месяцев
  - БАЗА ПОСТАВЩИКОВ копий брендов, мебели, сантехники, оборудования, одежды и обуви, детских товаров и т.д. База постоянно обновляется
  - Доступ к урокам 6 месяцев
  - Кнопка «Оплатить»

- Footer note: "Записаться и забронировать место можно уже сейчас."

### Layout
```
container max-w-7xl, py-20 lg:py-28, bg-background
[ Eyebrow + H2 + lead paragraph ]              (max-w-3xl, reveal)
[ 4-card grid: md:grid-cols-2 lg:grid-cols-4 ] (Что входит)
[ 2 pricing cards: md:grid-cols-2 ]            (Тарифы, gap-6)
[ small caption row ]
```
Mobile: cards stack 1 column; pricing stacks; same paddings/spacing as `OtherPrograms`/`Tariffs`.

### Files

- **New** `src/components/landing/NeoTwo.tsx` — the section component.
- **Edit** `src/routes/index.tsx` — import `NeoTwo` and render it between `<OtherPrograms />` and `<Installment />`.

### Questions to confirm before implementing

1. **Payment URLs.** I don't have URLs for the two new tariffs. The existing pattern uses `https://china.bayersacademy.ru/<slug>` (e.g. `/neo15`, `/neo25`, `/club65`). I'll use placeholders `/neo2-85` and `/neo2-135` unless you provide the real links.
2. **Telegram booking link.** The "Записаться и забронировать место" line — should it be plain text, or a button linking to `@juzele` (same as the Installment section)?

If you don't answer, I'll default to: placeholder payment URLs in the same `china.bayersacademy.ru/...` format, and add a small "Записаться через Telegram" link to `https://t.me/juzele` next to the caption.
