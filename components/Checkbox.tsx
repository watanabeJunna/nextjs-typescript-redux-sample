import React, {
    Dispatch,
    SetStateAction,
    useState,
} from 'react'
import { useDispatch } from 'react-redux'
import styled, { StyledComponent } from 'styled-components'
import { doneTodo } from '../store/todos/actions'

type Props = {
    id: string
}

/**
 * @see https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
 */
export default ({ id }: Props) => {
    const [checked, setChecked]: [
        boolean,
        Dispatch<SetStateAction<boolean>>
    ] = useState<boolean>(false)

    const dispatch: Dispatch<any> = useDispatch()

    const HiddenCheckbox: StyledComponent<'input', any, any> = styled.input.attrs({ type: 'checkbox' })`
        border: 0;
        clip: rect(0 0 0 0);
        clippath: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    `

    const Icon: StyledComponent<'svg', {}> = styled.svg`
        position: absolute;
        top: 1px;
        left: 1px;
        height: 22px;
        width: 22px;
        fill: none;
        stroke: white;
        stroke-width: 2px;
    `

    type CheckboxProps = {
        checked: boolean
    }

    const StyledCheckbox: StyledComponent<'div', CheckboxProps, CheckboxProps> = styled.div<CheckboxProps>`
        position: relative;
        display: block;
        padding: 12px;
        background: ${({ checked }) => checked ? '#585858' : '#9a99aa9'};
        border: 2px solid #585858;
        border-radius: 3px;
        transition: all 150ms;
        ${HiddenCheckbox}:focus + & {
            box-shadow: 0 0 0 3px #282828;
        }
        ${Icon} {
            visibility: ${({ checked }) => checked ? 'visible' : 'hidden'}
        }
    `

    const CheckboxContainer: StyledComponent<'div', {}> = styled.div`
        display: inline-block;
        padding-right: 24px;
        margin: auto 0;
        margin-bottom: -1.5px;
    `

    const Checkbox = ({ checked, ...props }: any): JSX.Element => (
        <CheckboxContainer>
            <HiddenCheckbox checked={checked} {...props} />
            <StyledCheckbox checked={checked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
        </CheckboxContainer>
    )

    const handleClick = () => {
        setTimeout(() => {
            dispatch(doneTodo(id))
        }, 300)
    }

    return (
        <>
            <label>
                <Checkbox
                    checked={checked}
                    onClick={handleClick}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
                />
            </label>
        </>
    )
}