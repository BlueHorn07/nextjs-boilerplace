# NextJS Boilerplate

## Docker

```bash
docker build . -t nextjs-boilerplate
docker compose -f docker-compose.yaml up -d
```

## Style

```bash
npm install sass
npm install styled-components
npm install -D @types/styled-components
npm install -D babel-plugin-styled-components
```

Add `/pages/_document.tsx`

```tsx
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }
}
```

Add `/babelrc.json`. This will resolve mobile view rendering issue.

```json
{
  "presets": ["next/babel"],
  "plugins": ["babel-plugin-styled-components"]
}
```

