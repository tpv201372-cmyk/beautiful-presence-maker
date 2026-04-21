

## Объединить 4, 5, 6 слайды отзывов в один

### Что меняем
В `src/components/landing/Testimonials.tsx` — только массив `mobileSlides`. Остальное не трогаем.

### Текущая раскладка
1. `anna` + `alena`
2. `leysan` + `adel`
3. `aliya` + `elena`
4. `guzel-course` ← объединяем
5. `evdokia` ← объединяем
6. `china-truck` ← объединяем
7. `first-parcel`
8. `kate`

### Новая раскладка
1. `anna` + `alena`
2. `leysan` + `adel`
3. `aliya` + `elena`
4. `guzel-course` + `evdokia` + `china-truck` (стек из 3 в одном слайде)
5. `first-parcel`
6. `kate`

### Технические детали
- Файл: `src/components/landing/Testimonials.tsx`.
- Меняем только содержимое массива `mobileSlides`: четвёртая группа становится массивом из трёх элементов вместо одного.
- Существующая разметка слайда (`flex flex-col gap-4`) уже поддерживает любое число карточек в группе — дополнительных правок JSX/CSS не требуется.
- Десктопная masonry-сетка не меняется.

