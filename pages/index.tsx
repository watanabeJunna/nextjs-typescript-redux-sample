import styled, { createGlobalStyle, GlobalStyleComponent, StyledComponent, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import { Container } from '../components/Container'
import TodoDetails from '../components/TodoDetail'

export default () => {
    const GlobalStyle: GlobalStyleComponent<{}, {}> = createGlobalStyle`
        ${reset}
        body, html {
            font-size: 1.1em;
            margin: 30px 0;
            background-color: #282828;
        }
    `

    const Editor: StyledComponent<'div', {}> = styled.div`
        padding: 24px 48px;
        margin: 0 auto;
        background-color: #202020;
        border-radius: 15px;
        box-shadow: 0px 1px 15px rgb(16, 16, 16);
    `

    const theme: any = {
        fontFamily: "'Raleway', sans-serif",
        color: "#cfcfcf",
    }

    const Wrapper: StyledComponent<'div', {}> = styled.div`
        padding: 32px 0;
        margin: 0 auto 28px;
        border-bottom: 1px solid #afafbc;
        color: ${props => props.theme.color};
        font-size: 1.9em;
        font-family: ${props => props.theme.fontFamily};
    `

    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Container>
                    <Editor>
                        <Wrapper>
                            <p>Todo App</p>
                        </Wrapper>
                        <TodoDetails />
                    </Editor>
                </Container>
            </ThemeProvider>
        </>
    )
}