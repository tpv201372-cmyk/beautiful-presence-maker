
Update the third tariff "Индивидуальный" in `src/components/landing/Tariffs.tsx` using info from screenshot 2.

New data:
- Price: `250 000 ₽` / `≈ 2 500 $` (replacing "По запросу" / "Персональные условия")
- Features (5 items):
  - Доступ ко всему материалу обучения в течение 1 года
  - Возможность получать обратную связь от куратора и Гузель на каждом этапе заказа из Китая
  - 6 консультаций по личной стратегии действий с Гузель лично
  - Доступ к уникальной базе проверенных поставщиков из Китая
- Bonus block:
  - Title: "Бонус"
  - Text: "База поставщиков: люкс-копии товаров, фабрики и производства Китая, контакты с рынков Гуанчжоу"
- Payment note: "Рассрочка на 12 месяцев или полная оплата"
- CTA: keep "Связаться" (since it's premium/individual contact still makes sense) — actually screenshot shows just price + installment, so change to "Оплатить" to match other paid tariffs for consistency.

Single change: replace the third tariff object's `price`, `altPrice`, `features`, and add `bonus` + `paymentNote` fields. Existing rendering already handles all conditionally — no JSX changes needed.
