import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addLink } from '../redux/linksSlice';

import './links.css';

const Links = () => {
  const links = useSelector(state => state.links);
  const dispatch = useDispatch();
  const [newLink, setNewLink] = useState('');
  const [newPlatform, setNewPlatform] = useState('Other');
  const [showInput, setShowInput] = useState(false);

  const platforms = ['GitHub', 'YouTube', 'LinkedIn', 'Facebook', 'Frontend Mentor', 'Other'];

  const handleAddLink = async () => {
    if (newLink && newPlatform) {
      try {
        const response = await axios.post('http://localhost:5000/link', {
          url: newLink,
          platform: newPlatform,
          userId: '66098e9a2c800c8d4231da88',
        });
        dispatch(addLink(response.data));
        setNewLink('');
        setNewPlatform('Other');
        setShowInput(false);
      } catch (error) {
        console.error('Error adding link:', error);
      }
    }
  };

  return (
    <div className='link-phone'>
      <h1>Customize your links</h1>
      <p>Add/Remove/Delete links below then share your profile with the world</p>
      
      <button className='add-link-button' onClick={() => setShowInput(true)}>+ Add new link</button>
      {showInput && (
        <div>
          <select className='platform-dropdown' value={newPlatform} onChange={(e) => setNewPlatform(e.target.value)}>
            {platforms.map((platform) => (
              <option key={platform} value={platform}>{platform}</option>
            ))}
          </select>
          <input
            type='text'
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
            placeholder='Paste a URL here'
          />
          <button className='save-button' onClick={handleAddLink}>Save</button>
        </div>
      )}

      {links.length === 0 && !showInput && (
        <div className="starter-mockup">
          <svg xmlns="http://www.w3.org/2000/svg" width="250" height="161" fill="none" viewBox="0 0 250 161">
            <path fill="#fff" d="M48.694 15.421C23.379 25.224 4.594 50.068.858 80.128c-3.12 25.331 4.335 53.318 48.23 61.291 85.406 15.52 173.446 17.335 193.864-24.525 20.417-41.86-7.525-108.891-50.873-113.53C157.683-.326 98.146-3.721 48.694 15.42Z" opacity=".3"/>
            <path fill="#333" d="M157.022 9.567H93.044a7.266 7.266 0 00-7.266 7.267v120.91a7.266 7.266 0 007.266 7.266h63.978a7.266 7.266 0 007.267-7.266V16.834a7.266 7.266 0 00-7.267-7.267Z"/>
            <path fill="#333" d="M125.033 140.872a5.687 5.687 0 100-11.374 5.687 5.687 0 000 11.374Z" opacity=".03"/>
          </svg>
          <p>Let's get you started</p>
        </div>
      )}

    
    </div>
  );
};

export default Links;