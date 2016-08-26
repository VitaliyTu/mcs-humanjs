window.onload = function () {

    var btnEdit = document.querySelector('.btn-edit');
    var btnSave = document.querySelector('.btn-save');
    var btnCancel = document.querySelector('.btn-cancel');
    var editor = document.querySelector('.editor');

    var textContent = localStorage.getItem('text');
    if (textContent != null) {
        editor.innerHTML = textContent;
    };

    btnEdit.addEventListener('click', function () {
        editor.setAttribute('contenteditable', true);
        btnEdit.classList.add('hidden');
        btnSave.classList.remove('hidden');
        btnCancel.classList.remove('hidden');
        localStorage.setItem('text', editor.innerHTML);
    });

    btnSave.addEventListener('click', function () {
        localStorage.setItem('text', editor.innerHTML);
        btnEdit.classList.remove('hidden');
        btnSave.classList.add('hidden');
        btnCancel.classList.add('hidden');
        editor.setAttribute('contenteditable', false);
    });

    btnCancel.addEventListener('click', function () {
        var textContent = localStorage.getItem('text');
        if (textContent != null) {
            editor.innerHTML = textContent;
        };
        btnEdit.classList.remove('hidden');
        btnSave.classList.add('hidden');
        btnCancel.classList.add('hidden');
        editor.setAttribute('contenteditable', false);
    });

    // HOW TO USE:
    localStorage.setItem('name', 'value');
    localStorage.getItem('name'); // => 'value'

    /*
    1. Кнопка «Save» должна сохранять данные
    в localStorage

    2. Кнопка «Cancel» должна отменять изменения

    3. При загрузке страницы должны подтягиваться данные
    из localStorage
    */

};
