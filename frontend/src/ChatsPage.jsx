import { MultiChatSocket, MultiChatWindow, useSingleChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props)=>{
    const chatProps = useSingleChatLogic('1cd50e5a-4b9f-4515-8abb-47e8b2526254',props.user.username,props.user.secret);
    return (
    <div style={{ height:'100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
    </div>)
}

export default ChatsPage