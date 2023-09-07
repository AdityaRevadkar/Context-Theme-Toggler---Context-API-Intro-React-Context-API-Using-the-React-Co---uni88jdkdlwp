import React from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {

    return(
        <div className={"container"} id="themed-page">
            <p id="themed-text-container">
                lorem ipsum dolor iterit n stuff
            </p>
          <button className="btn" id="themed-button">
        sup
      </button>
            
            <LocalThemedBox />
        </div>
    )
}

export { Page }
