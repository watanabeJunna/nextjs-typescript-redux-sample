import React from 'react'
import { Provider } from 'react-redux'
import App, { AppContext } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import { PageContextProps } from '../interfaces/todos'

export default withRedux(initStore)(
    class extends App<PageContextProps> {
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