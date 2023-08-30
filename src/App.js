import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import EmailInput from './EmailInput';
import GenerateLinkButton from './GenerateLinkButton';
import { count } from './GenerateLinkButton';
import WelcomePage from './WelcomePage';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Result from './Result';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [responseText, setResponseText] = useState('');

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setIsValidEmail(validateEmail(emailValue));
  };

  const handleGenerateLink = () => {
    if (isValidEmail) {
      const generatedLink = '/welcome';
      setGeneratedLink(generatedLink);

      // Отправка POST-запроса с использованием Axios
      const url = 'https://getflow.me:4567/check/email';
      const data = { email: email };

      axios.post(url, data)

        .then((response) => {
          console.log(response.data); // Вывод ответа в консоль
          setResponseText(response.data.link);
          // Дальнейшая обработка ответа
        })
        .catch((error) => {
          console.error('Ошибка:', error);
        });
    } else {
      alert('Некорректный email!');
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Ваш email</h1>
          {responseText && <p>{responseText}</p>}
          {/* /включать только при debug */}
          <EmailInput value={email} onChange={handleEmailChange} />
          <GenerateLinkButton onClick={handleGenerateLink} />
          {isValidEmail && generatedLink && (
            <Link to={generatedLink}>Тут будет сгенерированная ссылка*</Link>
          )}
          {!isValidEmail && count >= 1 && <p>Некорректный email!</p>}
        </Route>
        {/* переход  на welcome = <Route path={generatedLink}></Route> */}
        <Route path="/welcome">
          <WelcomePage />
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
        <Route path="/page3">
          <Page3 />
        </Route>
        <Route path="/page4">
          <Page4 />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}



export default App;