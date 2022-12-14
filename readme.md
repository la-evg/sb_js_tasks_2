# Основы программирования на JavaScript II

### Задание 1.1
В программе задана переменная message со строковым значением. Определите наличие подстроки привет в начале строки переменной message. Если данное условие выполняется, выведите в консоль булевое значение true, в ином случае — false. Сравнение должно быть без учета регистра. Правильный ответ выведите в консоль.

```javascript
console.log(message.toLowerCase().startsWith("привет"));
```

### Задание 1.2
В программе задана переменная greetings со строковым значением. Определите позицию последнего вхождения подстроки username в значении переменной greetings. Результат выведите в консоль.

```javascript
console.log(greetings.toLowerCase().lastIndexOf("username"));
```

### Задание 1.3
В программе задана переменная firstDiv со строковым значением. Определите, встречаются ли в данной строке два парных тега p . Выведите в консоль булевое значение true, если встречается, и false — в ином случае.

```javascript
console.log((firstDiv.indexOf("<p>") !== firstDiv.lastIndexOf("<p>")) || ((firstDiv.indexOf("</p>") !== firstDiv.lastIndexOf("</p>")) ? true : false))
```