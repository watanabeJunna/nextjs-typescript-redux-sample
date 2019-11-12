import Document, {
    DocumentContext,
    Head,
    NextScript,
    Main,
} from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet: ServerStyleSheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
            })

        const initialProps = await Document.getInitialProps(ctx)

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            )
        }
    }

    render() {
        return (
            <html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}