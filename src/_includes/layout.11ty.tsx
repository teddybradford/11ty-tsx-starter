type LayoutProps = {
  title: string;
  content: string;
};

export default function Layout({ title, content }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </head>

      <body>
        <main dangerouslySetInnerHTML={{ __html: `<h1>${title}</h1>` + content }} />
      </body>
    </html>
  );
}
