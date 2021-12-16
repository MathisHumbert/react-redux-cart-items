import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import CartContainer from './CartContainer';

function App() {
  const { loading } = useSelector((state) => state.rootReducer);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
