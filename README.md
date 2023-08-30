# Сборка проекта, запуск, деплой и настройки nginx

## Запуск и сборка локально

Что бы запустить проект локально, нужно перейти в дирректорию проекта и выполнить команду:

### `npm start`

Далее ваш проект запуститься и откроется ссылка в браузере по умолчанию http://localhost:3000.\

Что бы собрать билд, вополните команду: 

### `npm run build`

После этой команды проект соберется в папку build.\

Что бы запустить собранный build, выполните команду:

### `serve -s build`

Эта команда запустит билд. Адресс по умолчанию http://localhost:3000.\

## Копирование build на удаленный сервер

Что-бы скопировать папку билд, перейдите в терминали в дирректорию, где лежит папка build, затем выполните команду:

### `scp -r /path/to/folder user@host:/path/to/desired/folder`

После этого, вся папка билд скопируется с локального компьютера на удаленный сервер.

## Установка nginx на удаленный сервер

Что бы установить nginx на удаленный сервер? выполните команды по очереди:

### `sudo apt update` - Эта команда обновитсписко пакетов
### `sudo apt install nginx` - Установка nginx

## Деплой папки build на сервере:

После установки nginx, перейдите по пути до конфига nginx `/etc/nginx/sites-enabled`\
Там будет один файл `default`, передите в него используя nano. `sudo nano default`\

Далее удалите все что там прописано по умолчанию. И запишите следующее:

```
server {  
    server_name yourdomainname.com;  
    location / {  
        proxy_set_header Host $host:$server_port;  
        root /path/to/folder;  
        index index.html;  
        try_files $uri $uri/ /index.html;  
    }  
}  
```
Выйдите из редактора nano и проверьте правильность написания конфига командой `sudo nginx -t`\
Если все хорошо, то запустите nginx `sudo systemctl start nginx`\
При следующих изменениях конфига можно использовать `sudo systemctl restart nginx`\
Что бы остановить nginx `sudo systemctl stop nginx` \

После этого перейдите по фашему доменному имени и проверьте что все работает

## Установка сертификата для nginx 

Что бы установить сертификат для вашего доменного имени в nginx, нужно установть certbot\
Выполните эти команды по очереди:
```
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
```
После установки certbot на ваш сервер, выполните команду и далее следуйте инструкциям certbot-а. Нужно будет также указать email\
`sudo certbot --nginx`
После этого в ваш nginx default добаятся новые строки с путем до сертификата и указанием нового порта для https\
Перезагрузите nginx командой `sudo systemctl restart nginx` и проверьте что ваш сайт работает с сертификатом по адрессу с https

## Путь до сертификата
`/etc/letsencrypt/renewal/getflow.me.conf`

## Пути до ключей сертификата
```
/etc/letsencrypt/live/getflow.me/fullchain.pem
/etc/letsencrypt/live/getflow.me/privkey.pem
/etc/letsencrypt/options-ssl-nginx.conf
/etc/letsencrypt/ssl-dhparams.pem
```


