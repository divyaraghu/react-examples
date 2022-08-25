import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const GetScreenWidth = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
  
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    // Return the width so we can use it in our components
    return { width };
  }

export default GetScreenWidth;

