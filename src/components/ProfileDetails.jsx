import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImage } from '../redux/imageSlice';
import { selectLinks } from '../redux/linksSlice'; 

import './ProfileDetails.css';

const ProfileDetails = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
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
    }
  };

  return (
    <div className="profile-container">
      <div className='upload-section'>
        <h1>Profile Details</h1>
        <p>Add your details to create a personal touch to your profile</p>
      </div>
      <div className="user-profile">
        <h3 className="profile-pic">Profile Picture</h3>
        <label htmlFor="file-upload" className="custom-file-upload">
          Upload Image
        </label>
        <input id="file-upload" className="profile-image" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
        {image && <img src={image} alt="Uploaded" />}
        <p className="pic-size">Image must be below 1024x1024px. Use PNG or JPG format</p>
      </div>
      <div className="user-details">
        <label className="user-label">First Name</label>
        <input type="text" 
          className="input-field input-first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <label className="user-label">Last Name</label>
        <input type="text" 
          className="input-field input-last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <label className="user-label">Email</label>
        <input type="email" 
          className="input-field input-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <button className="profile-button">Submit</button>
     
    </div>
  );
};

export default ProfileDetails;
