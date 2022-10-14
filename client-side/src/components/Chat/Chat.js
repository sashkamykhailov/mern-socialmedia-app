import React, {useEffect, useRef, useState} from 'react'
// import LogoSearch from '../LogoSearch/LogoSearch'
import {useSelector} from 'react-redux'
import './Chat.scss'
import { userChats } from '../../api/ChatRequests'
import Conversation from '../Conversation/Conversation'
import ChatBox from '../ChatBox/ChatBox'
import {io} from 'socket.io-client'
import NavIcons from '../NavIcons/NavIcons'

const Chat = () => {

  const {user} = useSelector(state => state.authReducer.authData);

  const [ chats, setChats ] = useState([])
  const [ currentChat, setCurrentChat ] = useState(null)
  const [ onlineUsers, setOnlineUsers ] = useState([])

  const socket = useRef()

  useEffect(() => {
    socket.current = io('http://localhost:8800')
    socket.current.emit("new-user-add", user._id)
    socket.current.on('get-users', (users) => {
        setOnlineUsers(users)
        
    })
  }, [user])

  useEffect(() => {
    const getChats = async() => {
        try {
            const {data} = await userChats(user._id)
            setChats(data)
        } catch (error) {
            console.log(error)
        }
    }
    getChats()
  }, [user])

  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find(memeber => memeber !== user.id)
    const online = onlineUsers.find(user => user.userId === chatMember )
    return online ? true : false
  }

  return (
    <div className="chat">

        {/* Left side */}
        <div className="chat__leftside">
            {/* <LogoSearch /> */}
            <h4 className="chat__chatstitle">
                Chats:
            </h4>
            <div className="chat__conversationlist" >
                {chats.map((chat, id) => {
                    return(
                        <div key={id} onClick={() => setCurrentChat(chat)}>
                            <Conversation key={id} data={chat} 
                            currentUserId={user._id} online={checkOnlineStatus(chat)}
                            className="chat__conversation-single"
                            />
                        </div>
                    )
                })}
            </div>
        </div>

        {/* Right side */}
        <div className="chat__rightside">

            <ChatBox chat={currentChat} currentUser={user._id}/>
        </div>

        <NavIcons />

    </div>
  )
}

export default Chat