import React, {useEffect, useState} from 'react'
import {getUser} from '../../api/UserRequests'
import './Conversation.scss'

const Conversation = ({data, currentUserId, online}) => {

  const [ userData, setUserData] = useState(null)

  useEffect(() => {

    const userId = data.members.find((id) => id !== currentUserId)

    const getUserData = async () => {
        
        try {
            const {data} = await getUser(userId)
            setUserData(data)
        } catch (error) {
            console.log(error);
        }

    }
    getUserData()

  }, [])


  return (
    <div className='conversation'>
        <div className='conversation__dot'></div>
        <img 
        className='conversation__image' 
        alt='speak'
        src={userData?.profilePicture 
            ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture
            : 
             process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.png" }
        />
        <div className='conversation__info'>
            {userData?.firstname} {userData?.lastname}
        </div>
        <div className='conversation__online'>
         {online ? 'Online' : 'Offline'}
        </div>
    </div>
  )
}

export default Conversation