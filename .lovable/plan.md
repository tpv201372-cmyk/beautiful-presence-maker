
Update the second tariff "Вместе с Гузель" in `src/components/landing/Tariffs.tsx` using info from the screenshot.

New features list (7 items):
- Доступ к общему чату обучения
- Доступ ко всем блокам обучения, включая блоки о продвижении
- Возможность получать обратную связь от куратора на каждом этапе заказов из Китая
- Личное сопровождение от Гузель в течение 2 месяцев
- Проверка всех домашних заданий, включая блок по продвижению
- Доступ к уникальной базе проверенных поставщиков из Китая
- Доступ к материалам обучения 6 месяцев

Bonus block (same style as "Самостоятельный"):
- Title: "Бонус"
- Text: "База поставщиков: люкс-копии товаров, фабрики и производства Китая, контакты с рынков Гуанчжоу"

Payment note: "Рассрочка на 12 месяцев или полная оплата"

Note: screenshot shows price "150 000 (150$)" — clearly a typo in source; keep current "≈ 1 500 $" which is correct.

Single change: replace the second tariff object's `features` array and add `bonus` + `paymentNote` fields. The existing rendering logic already handles both conditionally for any tariff, so no JSX changes needed.
