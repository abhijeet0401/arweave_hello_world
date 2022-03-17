import React from 'react';
import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.Card}>
      <h2>Hello World On Arweave</h2>

      <h3>
        Hello world application deployed on  Arweave
        <ul>
          <li>
           Hello World application
          </li>
          <br></br>
          <li>Support Arweave Wallet</li>
          <br></br>
          <li>Deployed on Arweave</li>
        </ul>
      </h3>

    </div>
  );
};

export default Card;
