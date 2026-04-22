

## Подключить корректный Telegram-аккаунт `@juzele` к двум кнопкам

### Что меняем
На скриншотах — две кнопки:
1. «Связаться со мной» (раздел «Внутренняя рассрочка», `Installment.tsx`) — сейчас ведёт на `https://t.me/juzele_ele`.
2. «Написать мне» (финальный CTA-блок, `FinalCta.tsx`) — сейчас ведёт на `https://t.me/juzele_ele`.

Меняем ссылки и подписи под кнопкой на корректный аккаунт `@juzele`.

### Конкретные правки

**`src/components/landing/Installment.tsx`**
- `href="https://t.me/juzele_ele"` → `href="https://t.me/juzele"`
- Подпись под кнопкой: `@juzele_ele · Telegram Гузель` → `@juzele · Telegram Гузель`

**`src/components/landing/FinalCta.tsx`**
- У кнопки «Написать мне»: `href="https://t.me/juzele_ele"` → `href="https://t.me/juzele"`
- В нижнем ряду контактов: ссылка `@juzele_ele · Telegram Гузель` → `href="https://t.me/juzele"` и текст `@juzele · Telegram Гузель`
- Кнопка «Записаться на обучение» (`https://t.me/china_truck_manager`) и контакт менеджера — НЕ трогаем.

### Технические детали
- Только текстовые/href-замены, без изменений стилей, разметки и иконок.
- `target="_blank"` и `rel="noopener noreferrer"` остаются.
- После правки — визуально проверить, что капсульные кнопки и подписи отображаются корректно.

