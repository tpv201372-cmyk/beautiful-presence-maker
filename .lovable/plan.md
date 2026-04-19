
User wants the "Клуб" card in `OtherPrograms.tsx` to:
1. Add a "Оплатить" payment button (in addition to or replacing "Узнать подробнее").
2. Reduce empty space — currently the card has a large gap between description and price block because the НЕО card (with 2 tariffs) is much taller, and `flex-1` on description stretches it.

**Plan:**

In `src/components/landing/OtherPrograms.tsx`, refactor the Club card branch (no `tariffs`):

- Wrap price + button in the same `pt-6 border-t border-border` sub-block style used for tariffs, so it visually matches.
- Add small uppercase "Тариф" / "Подписка" label above price (matching НЕО card tariff sub-blocks for consistency).
- Add `altPrice` field to Club data (e.g. `≈ 65 $`) to mirror НЕО layout.
- Replace single "Узнать подробнее" outline button with TWO stacked buttons: primary navy "Оплатить" + secondary outline "Узнать подробнее" — OR just one "Оплатить" button to keep it tight. Going with **just "Оплатить"** (navy, full-width) for consistency with НЕО tariffs.
- Remove `flex-1` from description so it doesn't stretch and create empty space. Instead, add `mt-auto` to the price/CTA block so it pins to the bottom naturally without inflating the description.

Result: Club card stays compact, ends with a clean price + payment CTA block matching the НЕО tariff sub-block style. Heights will still differ slightly (НЕО has 2 tariffs), but the Club won't have a giant empty gap inside its description area.

**Single file edit:** `src/components/landing/OtherPrograms.tsx`. No new dependencies.
