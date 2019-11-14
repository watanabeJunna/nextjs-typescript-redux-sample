import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled, { StyledComponent } from 'styled-components'
import CheckBox from './Checkbox'
import { changeTodo } from '../store/todos/actions'

type Props = {
    id: string
    task: string
}

export default ({ id, task }: Props): JSX.Element => {
    const [selected, setSelected]: [
        boolean,
        React.Dispatch<React.SetStateAction<boolean>>
    ] = useState<boolean>(false)

    const renameInputRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    const renameInputValRef: React.MutableRefObject<string> = useRef('')

    const dispatch: React.Dispatch<any> = useDispatch()

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

    const Text: StyledComponent<'div', {}> = styled.div`
        height: 36px;
        color: ${props => props.theme.color};
    `

    const RenameInput: StyledComponent<'input', {}> = styled.input`
        width: 100%;
        height: 28px;
        padding: 0;
        padding-bottom: 7px;
        mergin: 0;
        color:  ${props => props.theme.color}55;
        font-family: "Yu Gothic";
        font-size: 1em;
        font-weight: 400;
        background-color: #202020;
        border: none;
        outline: 0;
        transition: .3s;
    `

    const handleDoubleClick = () => {
        if (!renameInputRef.current) {
            throw new Error('No reference to data input')
        }

        const inputValue: string = renameInputRef.current.value

        dispatch(changeTodo(id, inputValue))

        setSelected(!selected)
    }

    return (
        <>
            <Wrapper>
                <Inner>
                    <CheckBox id={id} />
                    {selected
                        ? <RenameInput
                            ref={renameInputRef}
                            autoFocus={true}
                            placeholder={renameInputValRef.current ? renameInputValRef.current : task}
                            onDoubleClick={() => handleDoubleClick()}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => renameInputValRef.current = e.target.value}
                        >
                        </RenameInput>
                        : <Text onDoubleClick={() => setSelected(!selected)}>
                            {task}
                        </Text>}
                </Inner>
            </Wrapper>
        </>
    )
}