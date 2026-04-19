
Add the word "Тариф" as a small uppercase label above each tariff name in `src/components/landing/Tariffs.tsx`.

Style: small text, uppercase, letter-spaced — matching the existing section eyebrow style. Color adapts to card variant (gold for highlighted dark card, chocolate for light cards) so it stays readable on both backgrounds.

Single change in `Tariffs.tsx`: add a `<p>` element directly above the `<h3>` with tariff name inside the card mapping.

```tsx
<p className={`text-[11px] uppercase tracking-[0.25em] mb-3 ${
  t.highlight ? "text-gold" : "text-chocolate"
}`}>
  Тариф
</p>
<h3 ...>{t.name}</h3>
```

No other changes needed.
