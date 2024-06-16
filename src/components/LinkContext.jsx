//import React, { createContext, useState, useContext } from 'react';


//const LinkContext = createContext();


//export const useLinks = () => useContext(LinkContext);


//export const LinkProvider = ({ children }) => {
  //  const [links, setLinks] = useState(() => {
        
    //    const localData = localStorage.getItem('links');
        //return localData ? JSON.parse(localData) : [];
    //});

    //const addLink = (link) => {
      //  const updatedLinks = [...links, link];
        //setLinks(updatedLinks);
        //localStorage.setItem('links', JSON.stringify(updatedLinks)); // Persist to local storage
   //};

   //const removeLink = (index) => {
      //  const updatedLinks = links.filter((_, i) => i !== index);
        //setLinks(updatedLinks);
        //localStorage.setItem('links', JSON.stringify(updatedLinks)); // Update local storage
    //};

    //return (
      //  <LinkContext.Provider value={{ links, addLink, removeLink }}>
        //    {children}
        //</LinkContext.Provider>
    //);
//};
