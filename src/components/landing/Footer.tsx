export function Footer() {
  return (
    <footer className="bg-cream border-t border-border py-12">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="font-display text-2xl text-navy">
              Гузель Маликова
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-chocolate mt-1">
              Академия байеров ·<br />Китай от А до Я
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href="https://www.instagram.com/juzele_ele" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-chocolate transition-colors">
              Instagram
            </a>
            <a href="https://t.me/juzele_ele" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-chocolate transition-colors">
              Telegram-канал
            </a>
            <a href="https://t.me/china_truck_manager" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-chocolate transition-colors">
              @china_trukk · Карго
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row gap-3 justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Гузель Маликова. Все права защищены.</p>
          <p className="font-display italic">中国 от А до Я</p>
        </div>
      </div>
    </footer>
  );
}
