import React from 'react'
import { Provider } from 'react-redux'
import App, { Container, AppContext } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore, ReduxStoreInstance } from '../store'

type Props = {
    store: ReduxStoreInstance
}

export default withRedux(initStore)(
    class extends App<Props> {
        static async getInitialProps({ Component, ctx }: AppContext) {
            let pageProps = {}

            if (Component.getInitialProps) {
                pageProps = await Component.getInitialProps(ctx)
            }

            return { pageProps }
        }

        render() {
            const { Component, pageProps, store } = this.props

            return (
                <Container>
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </Container>
            )
        }
    }
)