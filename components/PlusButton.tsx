import { useRef, MutableRefObject } from 'react'
import styled, { StyledComponent } from 'styled-components'

export default () => {
    const taskNameInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null)

    const Wrapper: StyledComponent<'div', {}> = styled.div`
        display: flex;
    `

    const PlusButton: StyledComponent<'div', {}> = styled.div`
        display: inline-block;
        padding: 7px;
        margin: 12px 20px;
        color: ${props => props.theme.color};
        border-radius: 50%;
        border: 2px solid ${props => props.theme.color};
        transition: .3s;
        opacity: 0.5;
        &:hover {
            opacity: 0.8;
        }
        &:after {
            content: "+";
        }
    `

    const TaskNameInput: StyledComponent<'input', {}> = styled.input`
        width: 35%;
        margin: auto 0;
        color:  ${props => props.theme.color};
        font-family: "Yu Gothic";
        font-size: 1.4em;
        font-weight: 400;
        background-color: #202020;
        border: none;
        outline: 0;
        border-bottom: 1px solid ${props => props.theme.color}55;
        transition: .3s;
        &:focus {
            border-bottom: 1px solid ${props => props.theme.color}98;
        }
    `

    const handleClick = (): void => {
        if (!taskNameInputRef.current) {
            throw new Error('No reference to input')
        }

        const inputValue: string = taskNameInputRef.current.value

        if (!inputValue) {
            return
        }

        console.log(inputValue)
    }

    return (
        <Wrapper>
            <PlusButton
                onClick={handleClick}
            />
            <TaskNameInput
                ref={taskNameInputRef}
                placeholder={'Add Task'}
            />
        </Wrapper>
    )
}