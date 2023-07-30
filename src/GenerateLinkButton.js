import React, { useState } from 'react'; 
 
export let count = 0; // экспортируем переменную count 
 
function GenerateLinkButton({ onClick }) { 
  const [localCount, setLocalCount] = useState(count); 
 
  const handleClick = () => { 
    setLocalCount(localCount + 1); 
    onClick(); 
  }; 
 
  count = localCount; // обновляем значение переменной count. Счетчик нажатия кнопки "Сгенирировать ссылку"
 
  return ( 
    <div> 
      <button onClick={handleClick}>Сгенерировать ссылку</button> 
    </div> 
  ); 
} 
 
export default GenerateLinkButton; 