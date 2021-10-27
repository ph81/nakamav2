import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Test from '../components/Test';
import styles from '../styles/globals.css';

const TestingData =()  => {

  

  return (
    <>
    <Header />
    <div className={styles.container}>
      <main> 
        <Test />
      </main>
      <Footer />
    </div>
    </>
     
  );
}

export default TestingData;