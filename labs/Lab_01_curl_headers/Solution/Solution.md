# HTTP HTTPS и их параметры 
___________________________________________________
## Лабораторная работа №1

Команда для получения информации о сайте: **curl -I -v https://code.visualstudio.com/**


### VS-Code

```shell
Connected to code.visualstudio.com (13.107.246.44) port 443 (#0) - IP адрес и порт WEB сервера
using HTTP/1.x                                                   - Версия HTTP
GET / HTTP/1.1                                                   - Метод HTTP GET запрашивает представление указанного ресурса.
Host: code.visualstudio.com                                      - Значение хоста ресурса
User-Agent: curl/8.1.2                                           - Используемый браузер
Accept: */*                                                      - Accept указывает, какие типы контента, выраженные в виде MIME-типов, клиент способен понять. (*/* - любые MIME типы)

HTTP/1.1 200 OK                                                  - Код ответа 200 "Запрос успешно обработан"
Date: Wed, 06 Sep 2023 19:08:05 GMT                              - Дата обращения
Content-Type: text/html; charset=utf-8                           - Формат данных
Content-Length: 50211                                            - Размер отправляемого сообщения в байтах
Connection: keep-alive                                           - keep-alive: соединение остается открытым
ETag: W/"c423-s5+tqgx/VoMgTj/GLd93PA9N3Yc"                       - Идентификатор конкретной версии ресурса
Content-Security-Policy: frame-ancestors 'self'                  - Управляет ресурсами которые разрешено загружать user agent            
X-Frame-Options: SAMEORIGIN                                      - Указывает, следует ли разрешить браузеру отображать страницу в frame, iframe, embed или object.
X-XSS-Protection: 1; mode=block                                  - Включает фильтрацию межсайтовых сценариев.
X-Content-Type-Options: nosniff                                  - Отключает MIME
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000; includeSubDomains   - Принудительное подключение с использованием HTTPS вместо HTTP. (max-age - время жизни, секунд)
Strict-Transport-Security: max-age=31536000
X-Powered-By: ASP.NET                                            - Может устанавливаться хостинговыми средами или другими фреймворками и содержать инф о них
x-azure-ref: 20230906T190805Z-tf0vmb0g091tx824hr7ua0st2n0000000an0000000015k8p
X-Cache: CONFIG_NOCACHE
```


### RGUPS


```shell
Connected to www.rgups.ru (80.72.224.90) port 443 (#0) - Было описано ранее
using HTTP/1.x
GET / HTTP/1.1
Host: www.rgups.ru
User-Agent: curl/8.1.2
Accept: */*

HTTP/1.1 200 OK
Server: nginx/1.19.1                                                               - Описывает программное обеспечение, используемое исходным сервером, который обработал запрос.
Date: Thu, 07 Sep 2023 09:31:21 GMT
Content-Type: text/html; charset=utf-8
Transfer-Encoding: chunked                                                         - Данные передаются в виде серии блоков.
Connection: keep-alive
X-Powered-By: ProcessWire CMS
Set-Cookie: wire=aee3aa42a2bbeff42e46de58ef8ce8a9; path=/; HttpOnly; SameSite=Lax  - Отправка файлов cookie с сервера пользовательскому агенту.
Expires: Thu, 19 Nov 1981 08:52:00 GMT                                             - Дата/время, после которого ответ считается устаревшим.
Cache-Control: no-store, no-cache, must-revalidate                                 - содержит директивы/инструкции, которые управляют кэшированием в браузерах и общих кэшах.
Pragma: no-cache                                                                   - служит для обеспечения обратной совместимости с кэшами HTTP/1.0, которые не имеют заголовка HTTP/1.1 для управления кэшем.
Vary: Accept-Encoding                                                              - определяет, как сопоставить будущие заголовки запроса, чтобы решить, можно ли использовать кешированный ответ.
```


### Github


```shell
Connected to github.com (140.82.121.3) port 443 (#0)
using HTTP/1.x
GET / HTTP/1.1
Host: github.com
User-Agent: curl/8.1.2
Accept: */*

HTTP/1.1 200 OK
 Server: GitHub.com
 Date: Thu, 07 Sep 2023 09:35:10 GMT
 Content-Type: text/html; charset=utf-8
 Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With
 content-language: en-US                                                                                               - языки контента, доступные для аудитории.
 ETag: W/"f1f00e2684aaf25183523de15724ee1e"
 Cache-Control: max-age=0, private, must-revalidate
 Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
 X-Frame-Options: deny                                                                                                 - deny: страница не может быть отображена во фрейме.
 X-Content-Type-Options: nosniff                                                                                       - nosniff: Блокирует запрос, если запрошенный тип: "style" "script".
 X-XSS-Protection: 0                                                                                                   - 0: Отключает фильтрацию XSS.
```


### РЖД (HTTP/1.1 301 Moved Permanently - Location: https://rzd.ru:443/)


```shell
 Connected to rzd.ru (212.164.138.131) port 443 (#0)
* schannel: disabled automatic use of client certificate
using HTTP/1.x
 GET / HTTP/1.1
 Host: rzd.ru
 User-Agent: curl/8.1.2
 Accept: */*

* schannel: server closed the connection
 HTTP/1.1 403 Forbidden                     - Код ответа на статус ошибки "HTTP 403 Forbidden" указывает, что сервер понял запрос, но отказывается его авторизовать.
 Connection: close
 Content-Length: 109
 Content-Type: text/html
```


### Python


```shell
Connected to www.python.org (2a04:4e42:8d::223) port 443 (#0)
using HTTP/1.x
 GET / HTTP/1.1
 Host: www.python.org
 User-Agent: curl/8.1.2
 Accept: */*

 HTTP/1.1 200 OK
 Connection: keep-alive
 Content-Length: 50796
 Server: nginx
 Content-Type: text/html; charset=utf-8
 X-Frame-Options: SAMEORIGIN
 Via: 1.1 vegur, 1.1 varnish, 1.1 varnish                               - добавляется прокси-серверами.
 Accept-Ranges: bytes                                                   -  который использует сервер, чтобы уведомить клиента о поддержке "запросов по кускам". (bytes - байты, ед, измер. диапазона).
 Date: Thu, 07 Sep 2023 09:41:49 GMT
 Age: 2090
 X-Served-By: cache-iad-kiad7000025-IAD, cache-fra-eddf8230071-FRA
 X-Cache: HIT, HIT
 X-Cache-Hits: 25, 18
 X-Timer: S1694079709.246468,VS0,VE0
 Vary: Cookie
 Strict-Transport-Security: max-age=63072000; includeSubDomains; preload  - позволяет web-сайтам уведомить браузер о том, что доступ к ним должен быть осуществлён только посредством HTTPS вместо HTTP.
```


### Яндекс
```shell
Connected to yandex.ru (5.255.255.70) port 443 (#0)
* schannel: disabled automatic use of client certificate
using HTTP/1.x
 GET / HTTP/1.1
 Host: yandex.ru
 User-Agent: curl/8.1.2
 Accept: */*

* schannel: failed to decrypt data, need more data
 HTTP/1.1 302 Moved temporarily                      - запрошенный ресурс был временно перемещён

```

### Saint GIT


```shell
Connected to git-scm.com (2a06:98c1:3122:e000::) port 443 (#0)
using HTTP/1.x
 GET / HTTP/1.1
 Host: git-scm.com
 User-Agent: curl/8.1.2
 Accept: */*

 HTTP/1.1 200 OK
 Date: Thu, 07 Sep 2023 09:43:03 GMT
 Content-Type: text/html; charset=utf-8
 Transfer-Encoding: chunked
 Connection: keep-alive
 X-Frame-Options: SAMEORIGIN
 X-Xss-Protection: 1; mode=block
 X-Content-Type-Options: nosniff
 X-Download-Options: noopen
 X-Permitted-Cross-Domain-Policies: none
 Referrer-Policy: strict-origin-when-cross-origin       - определяет, какой объем информации о реферере следует включать в запросы.
 Cache-Control: public, max-age=14400
 Etag: W/"db69273d9410cbf4536e9d4b3a59685d"
 X-Request-Id: 476d2e08-474c-4f3d-8503-d83ed21ae45f
 X-Runtime: 0.015343
 Via: 1.1 vegur
 CF-Cache-Status: HIT
 Age: 6629
 Server: cloudflare
 CF-RAY: 802e01576bf17b5b-DME
```


### Jetbrains


```shell
Connected to www.jetbrains.com (13.33.243.7) port 443 (#0)
using HTTP/1.x
 GET / HTTP/1.1
 Host: www.jetbrains.com
 User-Agent: curl/8.1.2
 Accept: */*

 HTTP/1.1 200 OK
 Content-Type: text/html; charset=utf-8
 Content-Length: 46987
 Connection: keep-alive
 Date: Thu, 07 Sep 2023 09:41:00 GMT
 Server: nginx
 X-Content-Type-Options: nosniff
 Referrer-Policy: same-origin
 Expires: Thu, 07 Sep 2023 09:41:00 GMT
 Cache-Control: max-age=0
 Pragma: no-cache
 X-Frame-Options: DENY
 X-Content-Type-Options: nosniff
 X-Xss-Protection: 1; mode=block
 Strict-Transport-Security: max-age=31536000;
 Vary: Accept-Encoding
 Via: 1.1 1360936ca0d2a8ac3134ac7c537d0e76.cloudfront.net (CloudFront)
 Alt-Svc: h3=":443"; ma=86400                                               - позволяет серверу указывать, что другое сетевое местоположение может рассматриваться как авторитетное при выполнении будущих запросов.
 Age: 224
 Set-Cookie: cf_country-region=RU-KDA; Domain=jetbrains.com; Path=/; Secure
 X-Cache: Hit from cloudfront
 X-Amz-Cf-Pop: HEL50-C1
 X-Amz-Cf-Id: 1ik5HhAYHzi9kTbHuHvhdHDW8BXOOpZG2V26ki38EzsZFSI4S-lUEg==
```
