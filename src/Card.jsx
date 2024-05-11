import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';
import './Card.css'; // Import the CSS file
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
 



const Card = ({ user, like, comment, caption }) => {
    const gender = Math.random() > 0.5 ? 'men' : 'women';
    const imageNumber = Math.floor(Math.random() * 35) + 1;
    const imageURL = `https://randomuser.me/api/portraits/${gender}/${imageNumber}.jpg`;

    // 
   
  const pics = [`https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 35) + 1}.jpg`,`https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 35) + 1}.jpg`,`https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 35) + 1}.jpg`];

  return (
    <div className="card">
      {/* 1st div - User image and name */}
      <div className="user-info">
        <img src={imageURL} alt={user} className="user-image" />
        <span className="user-name">{user}</span>
      </div>

      {/* 2nd div - Image displayer */}
      <div className="image-displayer">
        <Carousel>
          {pics.map((pic, index) => (
            <div key={index}>
              <img src={pic} alt={`Image ${index + 1}`} className="post-image" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* 3rd div - Like and comment icon */}
      <div className="like-comment-container">
        <span>
          <FontAwesomeIcon icon={faThumbsUp} /> {like}{' '}
          <FontAwesomeIcon icon={faComment} /> {comment}
        </span>
        <p className="caption">{caption}</p>
      </div>
    </div>
  );
};

export default Card;
