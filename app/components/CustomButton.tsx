'use client';
import React from 'react'

const CustomButton = () => {
  return (
    <div>
        <button onClick={() => console.log("click")}>Do a thing.</button>
    </div>
  );
}

export default CustomButton;