
User wants the "Самостоятельный" tariff card updated with info from the second screenshot. Comparing:

Current features:
- Доступ ко всем 16 модулям
- Все материалы и шаблоны
- База проверенных поставщиков
- Чат с одногруппниками
- Доступ на 6 месяцев

Screenshot says:
- Доступ к общему чату обучения
- Доступ ко всем блокам обучения, включая блоки о продвижении
- Возможность получать обратную связь от куратора на каждом этапе заказов из Китая
- Доступ к материалам обучения 4 месяца
- БОНУС: База поставщиков (люкс-копии товаров, фабрики и производства Китая, контакты с рынков Гуанчжоу)
- Стоимость 75 000 ₽ (750$), рассрочка на 12 месяцев / полная оплата

## Plan

Update only the first tariff object in `src/components/landing/Tariffs.tsx`:

1. Replace `features` array with the 5 items from the screenshot.
2. Add a separate "БОНУС" block highlighted under the features list (visually distinct: small label + description text), so the bonus stands out instead of being just another checkmark item.
3. Keep price `75 000 ₽` / `≈ 750 $` and add a small note about "рассрочка на 12 месяцев / полная оплата" near price or under CTA (replacing the generic "Доступна беспроцентная рассрочка" link with this specific text for this tariff).

Implementation notes:
- Extend the tariff data shape with optional `bonus?: { title: string; text: string }` and `paymentNote?: string`.
- Render these conditionally so the other two tariffs (Вместе с Гузель / Индивидуальный) keep their current look unchanged.
- Bonus block: thin top border + small uppercase label "Бонус" in chocolate/gold + description text below, placed between features list and CTA button.

Single file change: `src/components/landing/Tariffs.tsx`.
