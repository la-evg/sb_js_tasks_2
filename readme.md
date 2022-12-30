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

### Задание 2.2
В программе задана переменная partNumbers, которая хранит в себе массив. Каждый элемент массива является артикулом товара. Напишите программу, которая создаст новый массив на основе partNumbers. В новом массиве должны быть все элементы из partNumbers, которые заканчиваются на две цифры и два буквенных символа. Все остальные элементы необходимо отбросить. Значение нового массива выведите в консоль.

```javascript
const reg = /\d{2}\D{2}$/
let newNumbers = []
for (let numbers of partNumbers){
  if (numbers.match(reg) !== null){
    newNumbers.push(numbers)
  }
}
console.log(newNumbers)
```

### Задание 2.3
В программе задана переменная layout, которая хранит в себе строковое значение. Данная строка содержит в себе часть HTML-верстки с числами. На основе значения layout сформируйте массив из чисел, которые встречаются в верстке. Если число четное, возведите его в квадрат, в ином случае оставьте без изменений. Полученный массив выведите в консоль. Если строка layout не содержит чисел, выведите пустой массив.

```javascript
let numbers = layout.match(/\d+/g)

if (numbers != null) {
  numbers = numbers.map(el => {
    if (el % 2 === 0) {
      return el * el;
    }
    else {
      return +el;
    }
  })
  console.log(numbers)
}
else {
  console.log([])
}
```

### Задание 2.4
В программе задана переменная tasks, которая содержит массив. Элементы данного массива являются объектами с ключами title и completed. Сформируйте новый массив titles, который в качестве значений может хранить свойства title из всех значений массива tasks. Результат выведите в консоль.

```javascript
let titles = []
for (let task of tasks){
  titles.push(task.title)
}
console.log(titles)
```

### Задание 2.5
В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. На основе массива values сформируйте новый массив result, который является фрагментом values. Новый массив должен начинаться с первого вхождения булевого значения и заканчиваться последним вхождением булевого значения в массив values. Выведите получившийся массив в консоль.

```javascript
let firstIndex = values.findIndex(el => typeof el === "boolean");
let lastIndex = values.findLastIndex(el => typeof el === "boolean")
let result = values.slice(firstIndex, lastIndex + 1);

console.log(result)
```

### Задание 2.6
В программе задана переменная values, которая хранит в себе массив. Элементы массива являются числами. Определите, находятся ли в заданном массиве элементы, которые содержат четырехзначные числа. Результат выведите в консоль в виде булевого значения (true, если содержит, и false, если нет).

```javascript
console.log(values.some(el =>  el.toString().length === 4))
```

### Задание 2.7
Необходимо доработать программу из задания 2.7

В программе задана переменная values, которая хранит в себе массив. Элементы массива являются числами. Определите, находятся ли в заданном массиве элементы, которые содержат четырехзначные числа. Если такие значения встречаются, выведите индекс первого в консоль. В противном случае выведите сообщение `Искомый элемент не был найден`.

```javascript
console.log((values.findIndex(el =>
    el.toString().length === 4)) !== -1 ?
    values.findIndex(el => el.toString().length === 4) :
    "Искомый элемент не был найден")
```

### Задание 2.8
В программе задана переменная users, которая хранит в себе массив. Элементы данного массива являются объектами. Определите индекс элемента, значение свойства role которого содержит больше одного слова. Результат выведите в консоль разработчика.

```javascript
console.log(users.findIndex(el => el.role.split(" ").length === 2))
```

### Задание 2.9
В программе задана переменная array, которая хранит в себе двумерный массив. Его элементы — массивы, состоящие из чисел. Отсортируйте массив по количеству элементов вложенного массива по возрастанию. Результат выведите в консоль.

```javascript
const sortByLength = (a, b) => {
    const aArr = a.length;
    const bArr = b.length;
    if (aArr == bArr) return 0;
    if (aArr < bArr) return -1;
    if (aArr > bArr) return 1;
  }
  
console.log(array.sort(sortByLength))
```

### Задание 2.10
В программе задана переменная randValues, которая хранит в себе массив. Его элементы могут являться как строковыми, так и числовыми значениями. Отсортируйте массив следующим образом:

 - В начале массива должны быть все числовые значения по возрастанию
 - В конце все строковые, упорядоченные по алфавиту
Результат выведите в консоль.

```javascript
const sortElem = (a, b) => {
    const aArr = a;
    const bArr = b;
    if (aArr == bArr) return 0;
    if (aArr < bArr) return -1;
    if (aArr > bArr) return 1;
  }
  let numbers = randValues.filter(el => Number.isInteger(el))
  let words = randValues.filter(el => typeof el === "string")
  randValues = [...numbers.sort(sortElem), ...words.sort(sortElem)]
  console.log(randValues)
```

### Задание 2.11
В программе задана переменная words, которая хранит в себе массив строковых значений. Напишите скрипт, который считает количество палиндромов и непалиндромов в массиве words. Результат должен представлять собой массив из двух элементов, где первое значение — количество палиндромов, а второе — непалиндромов.

```javascript
let count = [0, 0]
for (word of words){
  word.toLowerCase() === word.split("").reverse().join("").toLowerCase() ? count[0] += 1 : count[1] += 1;
}
console.log(count)
```

### Задание 2.12
В программе задана переменная dates, которая хранит в себе строковое значение. В данной строке хранятся значения дат в формате ДД:ММ:ГГГГ, которые разделены пробелами. На основе значения переменной dates сформируйте новый массив, каждый элемент которого содержит одну дату переменной dates, преобразованную в формат ДД/ММ/ГГГГ. Выведите содержимое сформированного массива в консоль.

```javascript
dates = dates.split(" ").map(date => date.replace(/\./g, "/", ))
console.log(dates)
```

### Задание 2.13
В программе задана переменная tickets, которая хранит в себе строковое значение. В этой переменной указаны номера билетов на поезд (после слова Train) и на самолет (после слова Airplane). Необходимо написать скрипт, который на основе строки из переменной tickets формирует объект. Он должен хранить в себе два ключа (train, airplane), а в качестве значений — массивы с номерами билетов для поезда и самолета соответственно.

```javascript
let ticketObj = new Object;
regType = /(\w+)(?=:)/g
regTickets = /(\w+\d+)(?:)/g
for (ticket of tickets.split(". ")){
  ticketObj[ticket.toLowerCase().match(regType)] = ticket.match(regTickets) != null ? ticket.match(regTickets) : [""]
}
console.log(ticketObj)
```

### Задание 2.14
В программе задана переменная numbers, которая хранит массив из чисел. Определите, какое максимальное количество элементов массива numbers (в порядке, который реализован в массиве) можно сложить, чтобы их итоговая сумма не превышала 50. Результат выведите в консоль.

```javascript
let count = 0;
let sum = 0;
for (number of numbers){
  if(sum + number <= 50){
    sum += number;
    count += 1;
  }
}
console.log(count)
```

### Задание 2.15
В программе задана переменная values, которая хранит массив из строк. Определите математическую сумму всех элементов, которые при преобразовании в число не вернут значение NaN. Результат выведите в консоль.

```javascript
let valuesNum = values.filter((e) => !isNaN(parseInt(e)))
let total = valuesNum.reduce(
  (previousValue, currentItem) => parseInt(previousValue) + parseInt(currentItem), 0)
console.log(total)
```

### Задание 2.16
В программе заданы два массива array_1 и array_2, элементы которого являются числами. Значения внутри одного массива уникальные. Реализуйте функцию intersection, которая принимает в качестве аргументов два массива и возвращает новый массив. Он должен содержать значения, которые встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию.

```javascript
const sortByUp = (a, b) => {
    const aArr = a.length;
    const bArr = b.length;
    if (aArr == bArr) return 0;
    if (aArr < bArr) return 1;
    if (aArr > bArr) return -1;
  }
function intersection(array1, array2) {
  return array1.filter(num => array2.includes(num))
}
console.log(intersection(array_1, array_2).sort(sortByUp))
```

### Задание 3.1
В программе объявлена переменная car, которая хранит в себе объект, у которого есть как минимум одно свойство — engine. Удалите из объекта car свойство engine и результат выведите в консоль.

```javascript
delete car.engine;
console.log(car)
```

### Задание 3.2
В программе объявлена переменная goods, которая хранит объект со свойствами, описывающими товар. Сформируйте массив, который содержит в начале все названия свойств объекта, а потом все их значения. Результат выведите в консоль.

```javascript
let goodsKey = Object.keys(goods);
let goodsValue = Object.values(goods);
let goodsArr = goodsKey.concat(goodsValue)
console.log(goodsArr)
```

### Задание 3.3
В программе заданы две переменные article и author, которые содержат объекты. Объект article содержит информацию о статье, а author — об авторе. Сформируйте новый объект, который содержит свойства объектов article и author. Результат выведите в консоль.

```javascript
let book = Object.assign(article, author)
console.log(book)
```

### Задание 3.4
В программе задан массив array. Напишите функцию count(), которая считает количество элементов массива array и выводит в консоль сообщение, как в примере.

```javascript
function count(array){
    return array.length
  }
  console.log(`Количество элементов в массиве: ${count(array)}`)
```