# HTTP HTTPS и их параметры 
___________________________________________________
## Лабораторная работа №1

Команда для получения информации о сайте: **curl -v https://code.visualstudio.com/**

### VS-Code
```shell
Connected to code.visualstudio.com (13.107.246.44) port 443 (#0) - IP адрес и порт WEB сервера
using HTTP/1.x
GET / HTTP/1.1                                                   
Host: code.visualstudio.com                                      - Значение хоста ресурса
User-Agent: curl/8.1.2                                           - Используемый браузер
Accept: */*

HTTP/1.1 200 OK                                                  - Код ответа 200 "Запрос успешно обработан"
Date: Wed, 06 Sep 2023 19:08:05 GMT                              - Дата обращения
Content-Type: text/html; charset=utf-8                           - Формат данных
Content-Length: 50211                                            - Размер отправляемого сообщения в байтах
Connection: keep-alive                                           - keep-alive: соединение остается открытым
ETag: W/"c423-s5+tqgx/VoMgTj/GLd93PA9N3Yc"
Content-Security-Policy: frame-ancestors 'self'                  
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000; includeSubDomains
Strict-Transport-Security: max-age=31536000
X-Powered-By: ASP.NET
x-azure-ref: 20230906T190805Z-tf0vmb0g091tx824hr7ua0st2n0000000an0000000015k8p
X-Cache: CONFIG_NOCACHE
Accept-Ranges: bytes
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
Server: nginx/1.19.1
Date: Thu, 07 Sep 2023 09:31:21 GMT
Content-Type: text/html; charset=utf-8
Transfer-Encoding: chunked
Connection: keep-alive
X-Powered-By: ProcessWire CMS
Set-Cookie: wire=aee3aa42a2bbeff42e46de58ef8ce8a9; path=/; HttpOnly; SameSite=Lax
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Cache-Control: no-store, no-cache, must-revalidate
Pragma: no-cache
Vary: Accept-Encoding

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
 content-language: en-US
 ETag: W/"f1f00e2684aaf25183523de15724ee1e"
 Cache-Control: max-age=0, private, must-revalidate
 Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
 X-Frame-Options: deny
 X-Content-Type-Options: nosniff
 X-XSS-Protection: 0

```

### РЖД
```shell
Connected to rzd.ru (212.164.138.121) port 80 (#0)
 GET / HTTP/1.1
 Host: rzd.ru
 User-Agent: curl/8.1.2
 Accept: */*

 HTTP/1.1 301 Moved Permanently
 Date: Thu, 07 Sep 2023 09:38:02 GMT
 Content-Type: text/html
 Content-Length: 150
 Connection: keep-alive
 Location: https://rzd.ru:443/

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
 Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
 Accept-Ranges: bytes
 Date: Thu, 07 Sep 2023 09:41:49 GMT
 Age: 2090
 X-Served-By: cache-iad-kiad7000025-IAD, cache-fra-eddf8230071-FRA
 X-Cache: HIT, HIT
 X-Cache-Hits: 25, 18
 X-Timer: S1694079709.246468,VS0,VE0
 Vary: Cookie
 Strict-Transport-Security: max-age=63072000; includeSubDomains; preload

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
 Referrer-Policy: strict-origin-when-cross-origin
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
 Alt-Svc: h3=":443"; ma=86400
 Age: 224
 Set-Cookie: cf_country-region=RU-KDA; Domain=jetbrains.com; Path=/; Secure
 X-Cache: Hit from cloudfront
 X-Amz-Cf-Pop: HEL50-C1
 X-Amz-Cf-Id: 1ik5HhAYHzi9kTbHuHvhdHDW8BXOOpZG2V26ki38EzsZFSI4S-lUEg==

```

При вызове curl -v *http*://code.visualstudio.com/ 
страницу перенаправляет на URL: **Location: https://code.visualstudio.com/**

В итоге вы должны получить следующую информацию о ресурсе:
- IP адрес веб сервера
- порт к которому вы обращаетесь
- истинное значение хоста ресурса
- информация о необходимости кэширования
- данные о формате данных которые содержатся в теле ответа
- код ответа и его значение
- протокол по которому осуществлялся запрос
- прочая важная информация содержащаяся в заголовке (копайте глубже и найдёте ~~гематоген~~ золото)

#### В отчёте опишите следующее
- скрипт при помощи которого вы получили информацию
- расшифровку всех данных в заголовке ответа
