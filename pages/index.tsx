import styled from 'styled-components'

export default () => {
    const Wrapper = styled.div`
        width: 80%;
        margin: 0 auto;
        padding: 0;
        color: #5f6f81;
        font-size: 1.9em;
        font-family: 'Raleway', sans-serif;
        padding: 18px 32px 18px 0;
        border-bottom: 1px solid #afafbc;
        margin-bottom: 50px;
    `
    return (
        <>
            <Wrapper>Counter App</Wrapper>
        </>
    )
}