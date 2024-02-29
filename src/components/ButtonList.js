import React, { useState } from 'react';
import Button from './Button';

const buttonNames = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Technology",
  "Adventure",
  "Nature",
  "Music",
  "Coding",
  "Thoughts",
  "Mixes",
  "Comedy",
  "Science",
  "Space ",
  "Food",
  "Travel",
  "Fitness",
  "History",
  "Fashion",
  "Health",
  "Art",
  "Books",
  "Movies",
  "Sports",
  "Education",
  "Pets",
  "Photography"
];

const ButtonList = () => {
  const [activeButtonName, setActiveButtonName] = useState(null);

  const handleButtonClick = (name) => {
    setActiveButtonName((prevActiveButtonName) =>
      prevActiveButtonName === name ? null : name
    );
  };

  return (
    <div class="buttonList flex-wrap bg-white flex overflow-x-auto overflow-y-hidden h-12">

       { buttonNames.map((buttonName, index) => (
          <div className='ms-1' key={index}>
            <Button
              name={buttonName}
              onClick={() => handleButtonClick(buttonName)}
              isActive={buttonName === activeButtonName}
            />
          </div>
        ))   }</div>
  );

  
};

export default ButtonList;
