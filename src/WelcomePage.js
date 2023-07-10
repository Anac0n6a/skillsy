import { useHistory } from 'react-router-dom';

function WelcomePage({ email }) {
  const history = useHistory();

  const handleNextPage = () => {
    history.push('/page1');
  };

  return (
    <div>
        <div>
          <h1>Welcome text!</h1>
          <button onClick={handleNextPage}>Start Test</button>
        </div>
    </div>
  )
      }
export default WelcomePage;