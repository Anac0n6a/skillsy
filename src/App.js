import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import EmailInput from './EmailInput';
import GenerateLinkButton from './GenerateLinkButton';
import WelcomePage from './WelcomePage';

function App() {
  const [email, setEmail] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGenerateLink = () => {
    // Здесь можно добавить логику для генерации ссылки
    const generatedLink = '/welcome'; // Здесь пример условной ссылки
    setGeneratedLink(generatedLink);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Your email</h1>
          <EmailInput value={email} onChange={handleEmailChange} />
          <GenerateLinkButton onClick={handleGenerateLink} />
          {generatedLink && <Link to={generatedLink}>Тут будет сгенерированная ссылка*</Link>}
        </Route>
        <Route path="/welcome">
          <WelcomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;