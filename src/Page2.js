import React from 'react';
import { useHistory } from 'react-router-dom';

function Page2({ onNext }) {
    const history = useHistory();
  
    const handleNext = () => {
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

export default Page2;