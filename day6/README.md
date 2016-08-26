# День 6: современный JavaScript

## Полезные ресурсы для разработчика
* [Mozilla Developer Network](https://developer.mozilla.org/ru/) — актуальный и полезный справочник по веб-технологиям
* [jsfiddle](https://jsfiddle.net/), [jsbin](http://jsbin.com), [codepen](http://codepen.io/) — сервисы для быстрого прототипирования HTML+CSS+JS, а также для демонстрации примеров кода
* [Eloquent JavaScript](http://eloquentjavascript.net/), [Speaking JavaScript](http://speakingjs.com/), [Exploring ES6](http://exploringjs.com/) — хорошие книги по JavaScript, в том числе по современному стандарту ES2015

## Стандарные объекты браузера

### console
```js
console.log('text'); // вывести что-либо в консоль

console.error('что-то пошло не так'); // вывести ошибку в консоль

// изменить время выполнения кода:
console.time('label');
// some code...
// some code...
// some code...
console.timeEnd('label');

// вывести массив объектов в виде таблицы:
console.table([
  { id: 1, mark: 'BMW', model: 'X5' },
  { id: 2, mark: 'Mercedes', model: 'CLK' },
  { id: 3, mark: 'Audi', model: 'TT' }
]);

console.clear(); // очистить консоль
```

### window

#### Размеры и положение окна
```js
window.innerWidth, window.innerHeight // ширина и высота viewport — видимой части сайта

window.innerWidth, window.outerWidth // ширина и высота всего окна браузера

window.scrollX, window.scrollY // позиция скролла относительно левой верхней точки документа

window.scrollTo(x, y); // проскролить окно к координатам x,y
window.scrollBy(x, y); // проскроллить окно на величину x,y при каждом вызове
```

#### Взаимодействие с пользователем
```js
// Уже знакомые функции:
alert('message'); //  отобразить сообщение
prompt('What is your name?', 'default name'); // запросить строку у пользователя
confirm('Are you really want to quit?'); // запросить подтверждение: да / нет

window.getSelection(); // получить информацию о текущем выделении текста на странице

window.open('http://yandex.ru'); // открыть адрес в новой вкладке/окне
```

#### Отложенное выполнение кода:
```js
// таймаут
setTimeout(function () {
  alert('Прошла секунда');
}, 1000);

// задать интервал
var timer = setInterval(function () {
  console.log( new Date() );
}, 1000);

// остановить интервал
clearInterval(timer);
```

#### События:
```js
// Скролл
window.addEventListener('scroll', function () {
  console.log( window.scrollY );
});

// Изменение размера окна
window.addEventListener('resize', function () {
  console.log( window.outerWidth );
});
```

### document
```js
document.title // заголовок окна (read/write)

document.domain // текущий домен

document.referrer // адрес, с которого был осуществлен переход на текущую страницу

document.charset // кодировка документа

// Коллекции объектов на странице:
document.forms // формы
document.images // картинки
document.scripts // скрипты
document.styleSheets // таблицы стилей
```

#### location (адресная строка)
```js
location.href // полный URL (read / write)

location.host // домен и порт, если указан в адресе

location.hostname // только домен

location.pathname // путь (реальный или виртуальный)

location.search // query-параметры (после вопросительного знака)

location.hash // #хэш

location.protocol // протокол (http, https, ...)

location.replace('http://example.com') // заменить текущий адрес без сохранения истории перехода
```

#### history (история переходов по страницам)
```js
history.length // кол-во переходов по страницам

history.go(-3) // вернуться на три перехода назад

history.back() // вернуться на один перехода назад

history.pushState(), history.replaceState() // установить URL и состояние без перезагрузки страницы
```

#### navigator (информация о браузере):
```js
// названия и версия браузера:
navigator.appName
navigator.appCodeName
navigator.appVersion

navigator.vendor // производитель

navigator.platform // платформа

navigator.product // движок

navigator.language // язык

navigator.onLine // статус: онлайн или оффлайн (true / false)
```

Почему браузер Chrome, а везде упоминается Netscape и Mozilla? Ответ здесь:
- http://webaim.org/blog/user-agent-string-history/
- https://www.quora.com/Why-do-non-Mozilla-browsers-include-Mozilla-in-their-user-agent-strings

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
