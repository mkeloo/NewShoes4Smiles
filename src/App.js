import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import BarLoader from 'react-spinners/BarLoader';
import image from './assets/footer.png';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  }, []);
  return (
    <div className="bg-[#F9F5EB] overflow-hidden	">
      {loading ? (
        <div className="grid  justify-center bg-[#0d013b] items-center w-[100vw] h-[100vh]">
          <div className="h-[40%]" />
          <img src={image} alt="" className="w-[500px] h-[300px]" />
          <BarLoader
            color="#36d7b7"
            loading={loading}
            height={20}
            width={500}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <div className="h-[50%]" />
        </div>
      ) : (
        <Layout />
      )}
    </div>
  );
}

export default App;
