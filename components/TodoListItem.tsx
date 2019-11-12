import styled, { StyledComponent } from 'styled-components'

type Props = {
    task: string
}

export default ({ task }: Props): JSX.Element => {
    const Task: StyledComponent<'div', {}> = styled.div`
        display: flex;
        font-weight: 900;
        color: #777777;
        font-family: "Yu Gothic";
        padding: 12px 24px;
        border-bottom: 1px solid rgba(176, 176, 176, 0.5);
    `

    return (
        <Task>
            {task}
        </Task>
    )
}