import React from 'react';
import { useHistory } from 'react-router-dom';

function Page4({ onNext }) {
    const history = useHistory();
    
    const handleNext = () => {
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
  

export default Page4;