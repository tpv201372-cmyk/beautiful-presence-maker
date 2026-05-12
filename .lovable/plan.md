## Цель
Отключить автоперевод Google Translate в Chrome, который искажает русский текст сайта.

## Изменения

**1. `src/routes/__root.tsx`**
- В `head.meta` корневого роута добавить `{ name: "google", content: "notranslate" }`.
- В `RootShell` изменить `<html lang="en">` на `<html lang="ru">`.
- Удалить дублирующиеся английские meta из корневого роута:
  - `description`: "A professional landing page showcasing expertise and services."
  - `og:description`: то же
  - `twitter:description`: то же
  
  (на главной они уже переопределяются русскими в `src/routes/index.tsx`, но на других маршрутах — например `/legal/*` — сейчас отдаются английские строки, что и сбивает Chrome). Заменить на русские:
  - `twitter:description` → "Авторский курс Гузель Маликовой: научитесь привозить товар из Китая, выходить на доход от 50 000 ₽ и строить личный бренд байера."
  - также синхронизировать `description` и `og:description` с тем же русским текстом (как фолбэк для legal-страниц).

## Результат
Chrome увидит `lang="ru"`, `notranslate` и русские meta-описания → перестанет предлагать перевод.
