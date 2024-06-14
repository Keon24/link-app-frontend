import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImage } from '../redux/imageSlice';
import { selectLinks } from '../redux/linksSlice'; 
import LinksDisplay from '../components/LinksDisplay';

import './ProfileDetails.css';

const ProfileDetails = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const image = useSelector(state => state.image.image); 
  const links = useSelector(selectLinks); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setImage(reader.result));
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  return (
    <div className='upload-section'>
      <h1>Profile Details</h1>
      <input type="file" onChange={handleFileChange} />
      {image && <img src={image} alt="Uploaded" />}
      <h2>Your Links</h2>
      <LinksDisplay links={links} /> 
    </div>
  );
};

export default ProfileDetails;
