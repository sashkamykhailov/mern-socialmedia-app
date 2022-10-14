import { useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {uploadImage, uploadPost} from '../../redux/actions/UploadAction'
import  {FaImage}  from 'react-icons/fa';
import  {AiOutlineDelete}  from 'react-icons/ai';

import "./SharePart.scss";

const SharePart = () => {
  
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef()

  const { user } = useSelector(state => state.authReducer.authData);
  const dispatch = useDispatch()

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };

  const handleSubmit = event => {
    event.preventDefault();
   
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }

    if (image) {
      const data = new FormData()
      const filename = Date.now() + image.name
      data.append("name", filename)
      data.append("file", image)
      newPost.image = filename
      console.log(newPost)
      try {
        dispatch(uploadImage(data)) 
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost))
    resetShare()
  }

  const serverPublicFolder = process.env.REACT_APP_PUBLIC_FOLDER
  


  return (
    <div className="share">
      <div className="share__top">
        <div className="share__image">
        <img className="share__img" alt='prfl' 
        src={user.profilePicture ? serverPublicFolder + user.profilePicture : serverPublicFolder + "defaultProfile.png"}/>
        </div>
        <input className="share__input" placeholder="What's happening?"  ref={desc} required/>
        <div className="share__photo" onClick={() => imageRef.current.click()}>
          <FaImage />
        </div>
        <div className="share__bot">
        <button className="share__share-btn"
        onClick={handleSubmit}
        >Share
        </button>
      </div>
      </div>
      
      <div className="share__none" style={{ display: "none" }}>
        <input type="file" ref={imageRef} onChange={onImageChange} />
      </div>

      {image && (
        <div className="share__preview">
          {image && (
              <div className="share__previewImage">
                <AiOutlineDelete onClick={() => setImage(null)} className='share__remove-icon'/>
                <img src={URL.createObjectURL(image)} alt="preview" />
              </div>
        )}
        </div>
      )}
    </div>
  );
};
export default SharePart;
