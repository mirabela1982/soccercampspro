export function renderErrorPage() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Soccer Camps Pro</title>
    <style>
      :root { color-scheme: light; }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 24px;
        background: #f7f9fc;
        color: #222b4d;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      main { max-width: 520px; text-align: center; }
      h1 { margin: 0; font-size: clamp(32px, 6vw, 54px); line-height: 1; font-weight: 900; }
      p { margin: 18px auto 0; color: #52617a; font-size: 16px; line-height: 1.6; }
      .actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 28px; }
      a, button {
        border: 0;
        border-radius: 999px;
        padding: 13px 20px;
        font: inherit;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: .08em;
        text-transform: uppercase;
        cursor: pointer;
        text-decoration: none;
      }
      button { background: #007f63; color: #fff; }
      a { background: #e9edf5; color: #222b4d; }
    </style>
  </head>
  <body>
    <main>
      <h1>Soccer Camps Pro</h1>
      <p>The site is temporarily unavailable. Please refresh the page or return home.</p>
      <div class="actions">
        <button onclick="location.reload()">Refresh</button>
        <a href="/">Go home</a>
      </div>
    </main>
  </body>
</html>`;
}