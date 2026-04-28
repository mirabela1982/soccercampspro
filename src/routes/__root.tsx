import { useEffect } from "react";
import { Outlet, Link, createRootRoute, HeadContent, Scripts, useNavigate } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ to: "/", replace: true });
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Redirecting you home…
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-cta-foreground transition-colors hover:opacity-90"
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
      { title: "Soccer Camps Pro — Find the Best Youth Soccer Camps" },
      {
        name: "description",
        content:
          "Discover official and trusted youth soccer camps across North America from top international clubs like Arsenal, PSG and FC Bayern.",
      },
      { name: "author", content: "Soccer Camps Pro" },
      { property: "og:title", content: "Soccer Camps Pro — Find the Best Youth Soccer Camps" },
      {
        property: "og:description",
        content:
          "Official youth soccer camps from top international clubs. Search by country, city and club.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Soccer Camps Pro — Find the Best Youth Soccer Camps" },
      { name: "description", content: "Soccer Camp Visuals redesigns the Soccer Camps Pro homepage with a premium, sporty, and modern aesthetic." },
      { property: "og:description", content: "Soccer Camp Visuals redesigns the Soccer Camps Pro homepage with a premium, sporty, and modern aesthetic." },
      { name: "twitter:description", content: "Soccer Camp Visuals redesigns the Soccer Camps Pro homepage with a premium, sporty, and modern aesthetic." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/742c1fed-6aba-4fe3-bda6-629361f85c4c/id-preview-d70883e6--31487cd5-0bf6-45c0-a8f3-d079cc71926f.lovable.app-1777301602014.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/742c1fed-6aba-4fe3-bda6-629361f85c4c/id-preview-d70883e6--31487cd5-0bf6-45c0-a8f3-d079cc71926f.lovable.app-1777301602014.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
