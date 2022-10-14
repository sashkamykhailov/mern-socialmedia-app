import React, { useEffect, useRef, useState } from 'react'
import { addMessage, getMessages } from '../../api/MessageRequests'
import { getUser } from '../../api/UserRequests'
import {format} from 'timeago.js'
import './ChatBox.scss'
import InputEmoji from 'react-input-emoji'

const ChatBox = ({chat, currentUser, online}) => {

  const [userData, setUserData] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const scrollRef = useRef()

  //fetchign headers
  useEffect(() => {
    
    const userId = chat?.members?.find(id => id !== currentUser)
    const getUserData = async () => {
        try {
            const {data} = await getUser(userId);
            setUserData(data)
        } catch (error) {
            console.log(error);
        }
    }
    
    if (chat !== null) {
        getUserData()
    }

  },[chat, currentUser])
  //fetching messages

  useEffect(() => {
    const fetchMessages = async() => {
        
        try {
            const {data} = await getMessages(chat._id)
            setMessages(data)
        } catch(error) {
            console.log(error);
        }
    }
    if (chat !== null) fetchMessages()
  }, [chat, messages])

  const handleChange = (newMessage) => {
    setNewMessage(newMessage)
  }

  const handleSend = async() => {
    const message = {
        senderId: currentUser,
        text: newMessage,
        chatId: chat._id
    }

    //send message to DB
    try {
        const data = await addMessage(message)
        setMessages([...messages, data])
        setNewMessage('')

    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  },[messages])


  return (
    <div className="chatbox">
        <div className="chatbox__container">
            {chat 
            ?
            (<div className="chatbox__renderpart">
            <div className="chatbox__header">
                    <div className="chatbox__follower">
                    <img 
                    className='chatbox__image-sender' 
                    alt='speak'
                    src={userData?.profilePicture 
                        && process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture}
                    />
                    <div className='chatbox__info'>
                        {userData?.firstname} {userData?.lastname}
                    </div>
                </div>
            </div>
            <div className="chatbox__messages-cover">
                <div className='chatbox__messages'>
                    {messages.map((message, i) => {
                        return(
                            <div key={i}
                            ref={scrollRef}
                            className={message.senderId === currentUser 
                                ? 
                                "message own" 
                                : 
                                'message'}
                            >
                                <div 
                                className={message.senderId === currentUser 
                                    ? 
                                    "message-box own-color" 
                                    : 
                                    'message-box sender-color'}>
                                    <div className='chatbox__text'>{message.text}</div>
                                    <div className='chatbox__time'>{format(message.createdAt)}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='chatbox__controllers'>
                    <InputEmoji
                    value={newMessage}
                    onChange={handleChange}
                    />
                    <div className='chatbox__send-btn'>
                        <button disabled={newMessage.length > 2 ? false : true} className="chatbox__sendbtn" onClick={handleSend}>Send</button>
                    </div>
            </div>
        </div>)
            : 
            (<div>
                No Chat selected
            </div>)}
        </div>
    </div>
  )
}

export default ChatBox