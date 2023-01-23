import React, { createContext, useState } from 'react';

export const Modecontext = createContext()

const ModeContext = ({ children }) => {
    const [isDark, setIsDark] = useState(false)

    const info = {
        isDark, setIsDark
    }
    return (
        <Modecontext.Provider value={info}>
            {children}
        </Modecontext.Provider>
    );
};

export default ModeContext;