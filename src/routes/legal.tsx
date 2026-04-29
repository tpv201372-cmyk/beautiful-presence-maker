import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/legal")({
  component: LegalLayout,
});

function LegalLayout() {
  return (
    <main className="bg-background min-h-screen">
      <Outlet />
      <Footer />
    </main>
  );
}
