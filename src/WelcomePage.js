import React, { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

function ResultPage() {
  return (
    <div>
      <h1>Test Result</h1>
      <p>Thank you</p>
    </div>
  );
}

function WelcomePage({ email }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      {currentPage === 1 ? (
        <div>
          <h1>Welcome text!</h1>
          <button onClick={handleNextPage}>Start Test</button>
        </div>
      ) : (
        <div>
          {currentPage === 2 && <Page1 onNext={handleNextPage} />}
          {currentPage === 3 && <Page2 onNext={handleNextPage} />}
          {currentPage === 4 && <Page3 onNext={handleNextPage} />}
          {currentPage === 5 && <Page4 onNext={handleNextPage} />}
          {currentPage === 6 && <ResultPage />}
        </div>
      )}
    </div>
  );
}

export default WelcomePage;