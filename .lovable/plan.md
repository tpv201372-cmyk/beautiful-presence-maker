

## Добавить 3 новых отзыва в раздел «Отзывы учеников»

### Что добавляем
Три новых скриншот-отзыва из Telegram в существующую masonry-галерею в `src/components/landing/Testimonials.tsx`:

1. **Отзыв о курсе (14:24)** — про короткие уроки без воды и сотрудничество по Карго
   - `user-uploads://photo_2026-04-21_10.31.17.jpeg` → `src/assets/testimonials/guzel-course.jpg`
2. **Первая посылка China Truck (10:03)** — фото синего короба + текст благодарности за полное сопровождение
   - `user-uploads://photo_2026-04-21_10.31.19.jpeg` → `src/assets/testimonials/first-parcel.jpg`
3. **Развёрнутый отзыв Kate (30 декабря 2024)** — про быструю доставку 27,8 кг за 14 дней
   - `user-uploads://photo_2026-04-21_10.31.21.jpeg` → `src/assets/testimonials/kate.jpg`

### Изменения в коде
- Скопировать 3 новых файла в `src/assets/testimonials/`.
- В `src/components/landing/Testimonials.tsx`:
  - Добавить 3 новых `import` в начало файла.
  - Добавить 3 новых объекта в массив `testimonials` с полями `src` и `alt` (короткое осмысленное описание для accessibility).
  - Никаких изменений в разметке/стилях не нужно — masonry-сетка (`columns-1 sm:columns-2 lg:columns-3 xl:columns-4` + `break-inside-avoid`) автоматически разместит новые карточки, сохранив текущий стиль (cream-фон, рамка, золотая кавычка, hover-эффект, lazy-loading).

### Технические детали
- Файлы:
  - Создать: `src/assets/testimonials/guzel-course.jpg`, `first-parcel.jpg`, `kate.jpg`
  - Правка: `src/components/landing/Testimonials.tsx` (только импорты + массив)
- Никаких новых зависимостей, никаких новых компонентов, дизайн без изменений.

