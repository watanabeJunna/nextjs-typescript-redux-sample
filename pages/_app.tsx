import React from 'react'
import { Provider } from 'react-redux'
import App, { AppContext } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore, ReduxStoreInstance } from '../store'

type Props = {
    store: ReduxStoreInstance
}

export default withRedux(initStore)(
    class extends App<Props> {
        static async getInitialProps({ Component, ctx }: AppContext) {
            return {
                pageProps: {
                    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
                }
            }
        }

        render() {
            const { Component, pageProps, store } = this.props

            return (
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            )
        }
    }
)