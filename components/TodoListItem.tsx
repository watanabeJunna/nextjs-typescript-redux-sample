import styled, { StyledComponent } from 'styled-components'
import CheckBox from './Checkbox'

type Props = {
    task: string
}

export default ({ task }: Props): JSX.Element => {
    const TaskItem: StyledComponent<'div', {}> = styled.div`
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
        color: #a7a6a3;
    `

    return (
        <>
            <TaskItem>
                <Inner>
                    <CheckBox />
                    <Task>
                        {task}
                    </Task>
                </Inner>
            </TaskItem>
        </>
    )
}