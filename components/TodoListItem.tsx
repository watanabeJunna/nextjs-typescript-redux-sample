import styled, { StyledComponent } from 'styled-components'
import CheckBox from './Checkbox'

type Props = {
    task: string
}

export default ({ task }: Props): JSX.Element => {
    const Wrapper: StyledComponent<'div', {}> = styled.div`
        padding: 12px 24px;
        margin: auto 0;
        font-size: 1.4em;
        font-family: "Yu Gothic";
        font-weight: 400;
    `

    const Inner: StyledComponent<'div', {}> = styled.div`
        display: flex;
        padding: 7px 0;
    `

    const Task: StyledComponent<'div', {}> = styled.div`
        color: ${props => props.theme.color};
    `

    return (
        <>
            <Wrapper>
                <Inner>
                    <CheckBox />
                    <Task>
                        {task}
                    </Task>
                </Inner>
            </Wrapper>
        </>
    )
}