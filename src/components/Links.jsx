import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addLink } from '../redux/linksSlice';
import LinksDisplay from './LinksDisplay';
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
    <div className='container'>
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
      <LinksDisplay links={links} />
    </div>
  );
};

export default Links;
