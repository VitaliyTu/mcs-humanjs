# День 5: jQuery

## Вступление

- История и задачи jQuery (появилась в 2006 году).

- Устранение браузерных несовместимостей, удобные shorthand-функции, цепочки вызовов — во времена ES3 это было очень кстати.

- 70% из топ-10 сайтов используют jQuery, и доля продолжает медленно расти, несмотря на неоднозначное отношение к библиотеке в сообществе (многие считают, что она привносит слишком много «синтаксического сахара» и заменяет новичкам «настоящий JavaScript»).

- Не стоит забывать, что jQuery — это просто удобная обертка над JS. На сегодняшний день современный JavaScript умеет многое самостоятельно.

- Способы подключения jQuery: загрузка файла, использование CDN, установка через `npm`.

## Основы jQuery

**Универсальная функция `$()` и сравнение с нативными DOM-методами. Разбираемся на странице [jquery/index.html](jquery/index.html):**

Начало выполнения кода после полной загрузки страницы:
```js
// нативный метод
window.onload = function() {
  //
};

// jQuery
$(function () {
  //
});
```

Выборка элементов:
```js
// нативный метод
document.querySelector('.foo')

// jQuery
$('.foo')
```

Назначение обработчика события:
```js
// нативный метод
document.querySelector('.foo').addEventListener('click', function (event) {
  //
});

// jQuery
$('.foo').on('click', function (event) {
  //
});
```

Массовое назначение обработчиков событий:
```js
// нативный метод
var listItems = document.querySelectorAll('button');
for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function (event) {
    //
  });
}

// jQuery
$('button').on('click', function (event) {
  //
});
```

Изменение содержимого:
```js
// нативные свойства
var title = document.querySelector('h1.title');
title.textContent = 'Заголовок';
title.innerHTML = 'Заголовок <em>с HTML-кодом</em>';

// jQuery
$('h1.title').text('Заголовок');
$('h1.title').html('Заголовок <em>с HTML-кодом</em>');
```

Изменение CSS-свойств и управление классами:
```js
// нативные свойства
var foo = document.querySelector('.foo');
foo.style.width = '100px';
foo.classList.add('bar');
foo.classList.remove('bar');
foo.classList.contains('bar'); // true/false

// jQuery
$('.foo').css('width', 100); // 'px' добавляется автоматически
$('.foo').css({ width: 100, height: '50%' });
$('.foo').addClass('bar');
$('.foo').removeClass('bar');
$('.foo').hasClass('bar'); // true/false
```

Создание элементов и прикрепление к DOM:
```js
// нативный метод
var element = document.createElement('div');
element.className = 'foo';
element.textContent = 'hello JS';
document.body.appendChild(element);

// или
document.body.innerHTML += '<div class="foo">hello JS</div>';

// jQuery
$('body').append('<div class="foo">hello JS</div>');
```

## Анимация

**Программируем анимацию картинок на странице [jquery/index.html](jquery/index.html).
При кликах на кнопки картинки под ними должны соответствующим образом скрываться или показываться.**

Простое скрытие/отображение элемента:

```js
// нативное свойство
document.querySelector('.foo').style.display = 'none';
document.querySelector('.foo').style.display = 'block';

// jQuery
$('.foo').show(); // показать
$('.foo').hide(); // скрыть
$('.foo').toggle(); // туда-сюда
```

Скрытие/отображение с эффектом слайда:
```js
// без параметров
$('.foo').slideDown(); // развернуть
$('.foo').slideUp(); // свернуть
$('.foo').slideToggle(); // туда-сюда

// с указанием длительности анимации
$('.foo').slideDown(500); // 500 мс
$('.foo').slideUp('fast'); // 'fast' и 'slow' — синонимы для 200 и 800 мс соответственно
```

Скрытие/отображение с эффектом фейда:
```js
$('.foo').fadeIn(); // показать
$('.foo').fadeOut(); // скрыть
$('.foo').fadeToggle(); // туда-сюда

$('.foo').fadeIn('slow');
$('.foo').fadeOut(1000); // 1 cекунда
```

jQuery-анимация — это последовательное изменение какого-либо CSS-свойства за нужный промежуток времени. Например: `$('.foo').fadeIn(3000)` меняет CSS-свойство `opacity` от 0 до 1 за 3 секунды (в этом можно легко убедиться, понаблюдав за элементом во вкладке `Elements` в `Developer Tools`).

Общий метод для анимации: `animate`:
```js
// анимируем
$('.foo').animate({
  width: 500,
  opacity: 1,
  'border-radius': 25
});
```

***
**Перерыв (10 мин)**
***

## Практика: программируем игру в футбол

**При нажатии на кнопку «Гол» мяч должен перелетать из одного края поля в другой на случайную позицию по оси Y (при этом не выходя за края поля).**

- Есть и другие способы сделать анимацию, например, `requestAnimationFrame` и CSS-анимации (`transition`, `animation`).

## jQuery UI

- jQuery UI — библиотека эффектов и компонентов интерфейса (примера: слайдер, календарь и др.)

- jQuery UI позволяет изменить траекторию анимации при помощи `easings`

- Подключаем jQuery UI через CDN, меняем значение параметра `easing` в вызове `animate`, смотрим на результат

***
**Перерыв (20 мин)**
***

## AJAX

- `$.get` и `$.post` — обертка над `XMLHttpRequest`

## Практика: делаем авторизацию в Google

- Преподаватель запускает у себя на компьютере [сервер регистрации и авторизации](../day4/server/) и сообщает студентам IP-адрес и порт (3333)

- Студенты работают в папке [google-auth](google-auth/)

Задачи:
1. Написать валидацию формы авторизации с использованием jQuery:
  - все поля должны быть заполнены
  - электронная почта должна быть валидным email-адресом
  - пароль должен быть не менее 6 символов

2. Повторно зарегистрироваться на сервере при помощи скрипта, написанного в [день 4](../day4/google-signup/). Адрес для отправки запросов на регистрацию: `http://server:3333/reg`.

3. После успешной валидации форма должна отправлять POST-запрос на сервер авторизации (при помощи jQuery): `http://server:3333/auth`. Запрос должен обязательно содержать параметры `login` и `password`.

4. В зависимости от ответа сервера (`status: ok` или `status: error`) отправлять пользователя на [google.com](http://google.com) или отображать ошибку авторизации в блоке `<p class="form-error text-danger"></p>` (находится под кнопкой «Войти»).

## Заключение

- Экосистема плагинов jQuery: валидация, галереи, продвинутые элементы форм и т.д.
