import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google", content: "notranslate" },
      { title: "Гузель Маликова — Академия байеров «Китай от А до Я»" },
      {
        name: "description",
        content:
          "Академия профессии байер от Гузель Маликовой. Обучение закупкам в Китае от А до Я.",
      },
      { name: "author", content: "Guzel Malikova" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Гузель Маликова — Академия байеров «Китай от А до Я»" },
      { name: "twitter:title", content: "Гузель Маликова — Академия байеров «Китай от А до Я»" },
      { property: "og:description", content: "Авторский курс Гузель Маликовой: научитесь привозить товар из Китая, выходить на доход от 50 000 ₽ и строить личный бренд байера." },
      { name: "twitter:description", content: "Авторский курс Гузель Маликовой: научитесь привозить товар из Китая, выходить на доход от 50 000 ₽ и строить личный бренд байера." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e0147821-090d-49a4-a3bc-e46f4c3174c6/id-preview-690f2e65--858d6f06-1e49-4186-b562-b734d12d19a5.lovable.app-1776588144538.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e0147821-090d-49a4-a3bc-e46f4c3174c6/id-preview-690f2e65--858d6f06-1e49-4186-b562-b734d12d19a5.lovable.app-1776588144538.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
