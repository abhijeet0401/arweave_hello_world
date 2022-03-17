import React, { useState } from 'react';
import classes from "./App.module.css";
import Card from './components/UI/Card';
import Footer from './components/UI/Footer';
import { WalletSelectButton } from './components/UI/Wallet/WalletSelectButton'
function App() {
  const [isWalletConnected, setIsWalletConnected] =useState(false)
  return (
    <>
    <div className={classes.Grid}>
      <div className={classes.Header}>
        <h1> Hello World</h1>
        <WalletSelectButton setIsConnected={value => setIsWalletConnected(value)} />
        </div>
      <div className={classes.Child}>
        <Card />
      </div>
      <div className={classes.Foot}>
        <Footer />
      </div>
    </div>
  </>
  );
}

export default App;
