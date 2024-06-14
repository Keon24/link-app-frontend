import React, { createContext, useState, useContext } from 'react';

const ImageContext = createContext();

export const useImage = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
    const [image, setImage] = useState(null);  // It's better to initialize state with `null` instead of the string 'null'

    return (
        <ImageContext.Provider value={{ image, setImage }}>
            {children}
        </ImageContext.Provider>
    );
};

