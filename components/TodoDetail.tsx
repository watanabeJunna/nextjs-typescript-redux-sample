import Task from './TodoListItem'
import Checkbox from './Checkbox'

export default () => {
    return (
        <>
            <Task task='Export Component完成させたい' />
            <Task task='一通り突貫したテストをしたい' />
            <Task task='DataContentコンポーネントのレンダリングを効率化したい' />
            <Task task='connectを導入したい、Reduxのやつ' />
        </>
    )
}