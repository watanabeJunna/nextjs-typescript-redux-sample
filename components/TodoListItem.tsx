import styled, { StyledComponent } from 'styled-components'

type Props = {
    task: string
}

export default ({ task }: Props): JSX.Element => {
    const Task: StyledComponent<'div', {}> = styled.div`
        display: flex;
        font-weight: 900;
        color: #a7a6a3;
        font-size: 1.7em;
        font-family: "Yu Gothic";
        font-weight: 400;
        padding: 12px 24px;
        border-bottom: 1px solid rgba(176, 176, 176, 0.5);
    `

    return (
        <Task>
            {task}
        </Task>
    )
}