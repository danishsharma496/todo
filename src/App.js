import React from 'react';
import Card from './Card';

const App = () => {
  // Populate post array with 10 more random values
  const posts = [
    { like: 32, user: "johny", caption: "Trust me at the top it isn't lonely" },
    { like: 45, user: "Alice", caption: "Exploring new horizons" },
    { like: 21, user: "Bob", caption: "Sunny days ahead" },
    { like: 67, user: "Eva", caption: "Chasing dreams" },
    { like: 12, user: "David", caption: "Enjoying the little things" },
    { like: 98, user: "Sophia", caption: "Life is an adventure" },
    { like: 53, user: "Michael", caption: "Making memories" },
    { like: 76, user: "Olivia", caption: "Embracing spontaneity" },
    { like: 34, user: "Liam", caption: "Discovering beauty in simplicity" },
    { like: 55, user: "Emma", caption: "Finding joy in everyday moments" }
  ];

  return (
    <div>
 
    {
      posts.map((element,index)=>
      <Card key={index} 
      like={element.like}
      user={element.user}
      caption={element.caption}
      comment={7}/>
      )
    }
    </div>
  );
};

export default App;
