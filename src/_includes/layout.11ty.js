import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Layout({ title, content }) {
    return (_jsxs("html", { lang: "en", children: [_jsxs("head", { children: [_jsx("meta", { charSet: "utf-8" }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), _jsx("meta", { name: "color-scheme", content: "light dark" }), _jsx("title", { children: title }), _jsx("link", { rel: "stylesheet", href: "/styles/global.css" })] }), _jsx("body", { children: _jsx("main", { dangerouslySetInnerHTML: { __html: `<h1>${title}</h1>` + content } }) })] }));
}
