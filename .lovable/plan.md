
Update the "НЕО-закупки в Китае" card in `src/components/landing/OtherPrograms.tsx` to expose two purchasable tariffs from screenshot 2, with payment buttons for each. The Club card stays unchanged.

**Data model change:**
Add an optional `tariffs` array to program items:
```
tariffs: [
  { name: "Все сам", price: "15 000 ₽", altPrice: "≈ 150 $", features: ["Без обратной связи", "Доступ к обучающим материалам в течение 4 месяцев"] },
  { name: "С поддержкой куратора", price: "25 000 ₽", altPrice: "≈ 250 $", features: ["Обратная связь в группе с куратором", "Доступ к обучающим материалам в течение 6 месяцев"] },
]
```
Remove the old `price` / `sub` for НЕО-закупки (keep them for the Club card).

**Layout change:**
- For programs with `tariffs`, replace the single price block + single button with a stacked list: each tariff renders as a sub-block (name as small uppercase label, price + altPrice in chocolate, short feature list with checkmarks, "Оплатить" button).
- For programs without `tariffs` (the Club), keep the current price + "Узнать подробнее" button as is.
- Keep the cream card background, border, eyebrow tag, title, and description identical for both cards so they remain visually consistent.

**Visual style for tariff sub-blocks (inside НЕО card):**
- Thin top border separator between tariffs
- Tariff name: `text-[11px] uppercase tracking-[0.25em] text-chocolate`
- Price: `font-display text-2xl text-navy`, altPrice: `text-xs text-muted-foreground`
- Features: small list with `Check` icon (chocolate, like Tariffs.tsx)
- CTA "Оплатить": full-width navy button (matches Tariffs primary CTA style)

Single file edit: `src/components/landing/OtherPrograms.tsx`. No new dependencies.
