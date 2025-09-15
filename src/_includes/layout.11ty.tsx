type LayoutProps = {
  title: string
  content: string
}

export default function Layout({ title, content }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="color-scheme" content="light dark" />
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/global.css" />
      </head>

      <body>
        <main dangerouslySetInnerHTML={{ __html: `<h1>${title}</h1>` + content }} />
      </body>
    </html>
  )
}
