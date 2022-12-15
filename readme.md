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

### Задание 1.4
В программе объявлена переменная road со строковым значением, которая задает протяженность дороги. Необходимо из строки убрать подстроку km, оставив только численное значение. Его необходимо конвертировать в мили, округлить до одного знака после запятой, а результат вывести в консоль. Помните, что 1 километр равен 0,62 мили.

```javascript
console.log(road.includes('.') ? parseFloat((road.replace('km', '') * 0.62).toFixed(1)) :(road.replace('km', '') * 0.62))
```

### Задание 1.5
В программе задана переменная words со строковым значением. Напишите условный оператор, который выводит в консоль сообщение В строке больше одного слова, если строка содержит больше одного слова, в ином случае в консоль должна выводиться фраза В строке одно слово.

```javascript
console.log(words.split(" ").length == 1 ? "В строке одно слово" : "В строке больше одного слова")
```

### Задание 1.6
В программе объявлена переменная symbols со строковым значением. В данной строке могут встречаться буквенные символы и цифры. Опишите условие, которое выводит в консоль строку Первый символ цифра, если первый символ переменной symbols является цифрой. В противном случае необходимо вывести строку Первый символ не цифра.

```javascript
console.log(isFinite(symbols[0]) ? "Первый символ цифра" : "Первый символ не цифра")
```

### Задание 1.7
В программе объявлена переменная symbols со строковым значением. Напишите условный оператор, который реализует следующую логику:

 - Если сумма числовых значений Unicode первых двух символов делится на два без остатка, необходимо получившееся число конвертировать в unicode-символ и вывести в консоль
 - В ином случае необходимо вывести сообщение Символ обнаружить не удалось

```javascript
console.log((symbols.codePointAt(0) + symbols.codePointAt(1)) % 2 == 0 ? String.fromCodePoint(symbols.codePointAt(0) + symbols.codePointAt(1)) : "Символ обнаружить не удалось")
```

### Задание 1.8
В программе задана переменная phone со строковым значением. В ней хранится номер телефона и, помимо цифр, иные символы. Преобразуйте строку так, чтобы в номере отсутствовали следующие символы: (,/:/*/ ).

```javascript
console.log((phone.match(/[+\d]/g, '')).join(""));
```

### Задание 1.9
В программе задана переменная emails со строковым значением. В ней указано несколько значений электронной почты через пробел. Преобразуйте данное значение в массив так, чтобы каждая почта в строке являлась элементом массива. Результат выведите в консоль.

```javascript
console.log(emails.split(" "))
```

### Задание 1.10
В программе задана переменная ticket со строковым значением. Напишите условный оператор, который работает по следующей логике:

 - Если в билете после буквенных символов и тире идут 8 цифр подряд, программа должна вывести в консоль сообщение Выбран билет на концерт
 - Если в билете после буквенных символов идут 12 цифр подряд, программа должна вывести в консоль сообщение Выбран билет в театр
 - В противном случае выведите в консоль сообщение Билет не определен

```javascript
ticketLen = ticket.match(/[+\d]/g, '').length;

if (ticketLen === 8){
  console.log("Выбран билет на концерт")
}
else if (ticketLen === 12){
  console.log("Выбран билет в театр")
}
else {console.log("Билет не определен")}
```

### Задание 2.1
В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. Замените булевое значение с минимальным индексом на строковое значение Булевый тип. Преобразованный массив выведите в консоль. Примечание: подразумевается решение без методов массивов, просто вспомним, как работать с массивами и циклами!

```javascript
for (var value in values){
    if (typeof values[value] === "boolean"){
      values.splice(value, 1, "Булевый тип")
      break
    }
  }
  console.log(values)
```