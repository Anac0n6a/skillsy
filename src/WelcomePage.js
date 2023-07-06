import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Page1({ onNext }) {
  const history = useHistory();

  const handleNext = () => {
    onNext();
    history.push('/page2');
  };

  return (
    <div>
      <h1>Question 1</h1>
      <p>Question text goes here...</p>
      <form>
        <input type="radio" id="option1" name="option" value="Option 1" />
        <label htmlFor="option1">Option 1</label><br />
        <input type="radio" id="option2" name="option" value="Option 2" />
        <label htmlFor="option2">Option 2</label><br />
        <input type="radio" id="option3" name="option" value="Option 3" />
        <label htmlFor="option3">Option 3</label><br />
        <input type="radio" id="option4" name="option" value="Option 4" />
        <label htmlFor="option4">Option 4</label><br />
        <input type="radio" id="option5" name="option" value="Option 5" />
        <label htmlFor="option5">Option 5</label><br />
        <input type="radio" id="option6" name="option" value="Option 6" />
        <label htmlFor="option6">Option 6</label><br />
      </form>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

function Page2({ onNext }) {
  const history = useHistory();

  const handleNext = () => {
    onNext();
    history.push('/page3');
  };

  return (
    <div>
      <h1>Question 2</h1>
      <p>Question text goes here...</p>
      <form>
        <input type="radio" id="option1" name="option" value="Option 1" />
        <label htmlFor="option1">Option 1</label><br />
        <input type="radio" id="option2" name="option" value="Option 2" />
        <label htmlFor="option2">Option 2</label><br />
        <input type="radio" id="option3" name="option" value="Option 3" />
        <label htmlFor="option3">Option 3</label><br />
        <input type="radio" id="option4" name="option" value="Option 4" />
        <label htmlFor="option4">Option 4</label><br />
        <input type="radio" id="option5" name="option" value="Option 5" />
        <label htmlFor="option5">Option 5</label><br />
        <input type="radio" id="option6" name="option" value="Option 6" />
        <label htmlFor="option6">Option 6</label><br />
      </form>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

function Page3({ onNext }) {
  const history = useHistory();

  const handleNext = () => {
    onNext();
    history.push('/page4');
  };

  return (
    <div>
      <h1>Question 3</h1>
      <p>Question text goes here...</p>
      <form>
        <input type="radio" id="option1" name="option" value="Option 1" />
        <label htmlFor="option1">Согласен</label><br />
        <input type="radio" id="option2" name="option" value="Option 2" />
        <label htmlFor="option2">Не согласен</label><br />
      </form>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

function Page4({ onNext }) {
  const history = useHistory();

  const handleNext = () => {
    onNext();
    history.push('/result');
  };

  return (
    <div>
      <h1>Question 4</h1>
      <p>Question text goes here...</p>
      <form>
        <input type="radio" id="option1" name="option" value="Option 1" />
        <label htmlFor="option1">Согласен</label><br />
        <input type="radio" id="option2" name="option" value="Option 2" />
        <label htmlFor="option2">Не согласен</label><br />
      </form>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

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