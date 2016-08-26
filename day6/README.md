# День 6: современный JavaScript

### Полезные ресурсы для разработчика
* [MDN](https://developer.mozilla.org/ru/) — актуальный и полезный справочник по веб-технологиям
* [jsfiddle](https://jsfiddle.net/), [jsbin](http://jsbin.com), [codepen](http://codepen.io/) — сервисы для быстрого прототипирования HTML+CSS+JS, а также для демонстрации примеров кода
* [Eloquent JavaScript](http://eloquentjavascript.net/), [Speaking JavaScript](http://speakingjs.com/), [Exploring ES6](http://exploringjs.com/) — хорошие книги по JavaScript, в том числе по современному стандарту ES2015

### Стандарные объекты браузера

#### console
```js
log()
error()
time(), timeEnd()
table()
clear()
```

#### Window
```js
window.innerWidth, outerWidth
window.innerHeight, innerHeight
window.scrollX, scrollY
window.scrollTo(), window.scrollBy()
alert(), prompt(), confirm()
setTimeout(), setInterval()
window.open()
window.reload()
window.getSelection()

// События:
scroll
resize

// А также полезный метод:
getboundingclientrect()
```

- Document
    - document.title
    - document.domain
    - document.referrer
    - document.forms
    - document.charset
    - document.images
    - document.scripts
    - document.styleSheets
- Location
    - location.href
    - location.host
    - location.hostname
    - location.pathname
    - location.search
    - location.hash
    - location.protocol
    - location.replace()
- History
    - length
    - go()
    - back()
    - pushState() и replaceState()
- Navigator
    - navigator.appName
    - navigator.appCodeName
    - navigator.appVersion
    - navigator.vendor
    - navigator.platform
    - navigator.product
    - navigator.language
    - navigator.onLine

http://webaim.org/blog/user-agent-string-history/
https://www.quora.com/Why-do-non-Mozilla-browsers-include-Mozilla-in-their-user-agent-strings

3. Редактирование контента:

- contenteditable
- http://getcontenttools.com/demo
- SessionStorage
- LocalStorage
- http://mdn.github.io/web-storage-demo/

Демонстрация различных API:
https://developer.mozilla.org/en-US/docs/Web/API
http://caniuse.com/

WebSockets
https://github.com/yaplusplus/simplechat

Web Push API
https://developer.mozilla.org/ru/docs/Web/API/Push_API

Geolocation
https://developer.mozilla.org/ru/docs/Web/API/Geolocation/Using_geolocation

Web Audio API
http://webaudioapi.com/samples/
https://developer.mozilla.org/ru/docs/Web/API/Web_Audio_API

Video API
https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video

Canvas
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
http://code.tutsplus.com/articles/21-ridiculously-impressive-html5-canvas-experiments--net-14210

WebGL
...

Системы контроля версий и github:

- Демонстрация работы git
- https://github.com/jquery/jquery
- https://robflaherty.github.io/jquery-annotated-source/docs/01-core.html
- https://github.com/WebKit/webkit/

ES6

- Babel
