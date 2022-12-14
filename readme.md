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

### Задание 3.5
В программе задан двумерный массив employee. Удалите у данного массива значение, у которого первый элемент hireDate, и добавьте новое значение ["jobName", "IT PROG"] в конец массива. Результат выведите в консоль.

```javascript
while (employee.some(el => el[0] === "hireDate")){
    employee.splice(employee.findIndex(el => el[0] === "hireDate"), 1)
  }
  employee.push(["jobName", "IT PROG"])
  console.log(employee)
```

### Задание 3.6
В программе задан двумерный массив array. Создайте и вызовите функцию countString(), которая считает количество значений массива array, у которых второй элемент является строкой. Функция countString() должна выводить в консоль сообщение, как в примере.

```javascript
function countString(arr) {
    let count = 0;
    for (let values of arr) {
        if (typeof values[1] === "string") {
            count++
        }
    }
    console.log(`Количество строковых элементов в именованном массиве: ${count}`)
};
countString(array)
```

### Задание 4.1
В программе объявлены объекты pet_1 и pet_2. Напишите функцию getName() и присвойте ее объектам pet_1 и pet_2 в качестве метода. При вызове метода getName() он должен вернуть имя и возраст питомца через пробел. Решить задачу необходимо с использованием this.

```javascript
function getName() {
    return `${this.name} ${this.age}`
}
pet_1.getName = getName;
pet_2.getName = getName;
```

### Задание 4.2
В программе объявлен объект input и функция sayHi(), которая выводит в консоль сообщение из примера. Используя метод присвоения контекста, свяжите контекст объекта input с функцией sayHi() и вызовите функцию sayHi().

```javascript
input.sayHi = sayHi;
input.sayHi()
```

### Задание 4.3
В программе объявлен объект pet со свойствами name и breed и функция getDescription(), которая выводит эту информацию, используя this. Привяжите к функции getDescription() контекст pet и присвойте получившуюся функцию переменной getDescription.

```javascript
getDescription = getDescription.bind(pet)
```

### Задание 4.4
В программе объявлен объект props, у которого задан набор свойств. Объявите функцию getValue(), которая выводит в консоль строку со всеми свойствами и их значениями (без методов). Привяжите объект props в качестве контекста функции getValue() и присвойте получившуюся функцию переменной getValue

```javascript
function getValue(){
    let strProps = []
    for (const [key, value] of Object.entries(this)) {
      if (typeof value != "function"){
        strProps.push(`${key}: ${value}`)
      }
  }
      console.log(`Значения свойств объекта props (${strProps.join(', ')})`);
  }
  getValue = getValue.bind(props)
```

### Задание 4.5
В программе объявлен объект hero, свойства которого описывают информацию о герое. В объекте в том числе определен метод getPosition, который возвращает позицию героя в игре. Определите, почему вызов getPosition работает некорректно. Исправьте эту ошибку.

```javascript
hero = { 
    nick: "FirstHero", 
    position: "Лагерь",
    getPosition() {console.log("Позиция героя: " + this.position)}
}
```

### Задание 5.1
В программе объявлена переменная order, которая хранит объект. Объявите переменную descriptor, которая должна содержать значения всех атрибутов ключа totalPrice объекта orders в виде объекта. Результат выведите в консоль.

```javascript
let descriptor = Object.getOwnPropertyDescriptor(order, 'totalPrice')
console.log(descriptor)
```

### Задание 5.2
В программе задан объект employees, который содержит ряд свойств и методов. Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль. Имена методов добавляться не должны.

```javascript
let empValues = []
for (const [key, value] of Object.entries(employees)){
  if (typeof value != "function"){
    empValues.push(key)
  }
}
console.log(empValues.join(", "))
```

### Задание 5.3
В программе объявлены переменные firstName и lastName. Создайте объект user со свойствами firstName и lastName и добавьте getter и setter fullName. Сеттер fullName должен принимать имя и фамилию пользователя через пробел, разделять и присваивать свойствам firstName и lastName соответственно. Геттер fullName должен формировать строку, состоящую из имени и фамилии через пробел.

```javascript
const user = {
  firstName : firstName,
  lastName : lastName,
  set fullName(value) {
    return this.firstName = value.split(" ")[0], 
      this.lastName = value.split(" ")[1]
  },
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
```

### Задание 5.4
В программе объявлены переменные name и phone, которые хранят строки. В name указано название заведения, а в phone — его номер телефона. Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте свойство validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки. Если знак отсутствует, свойство validPhone должно принять булевое значение false, в противном случае — true. Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. Получившийся экземпляр класса запишите в переменную deliveryName.

```javascript
class Delivery{
  constructor(){
    this.name = name;
    this.phone = phone;
    this.validPhone = this.phone.includes("+");
  }
}
let deliveryName = new Delivery(name, phone);
```

### Задание 5.5
В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс User, который наследуется от класса Permissions. Дополнительно в классе User добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.

```javascript
class User extends Permissions{
    constructor(name){
      super();
      this.name = name;
    }
  }
```

### Задание 5.6
В программе задан массив array, элементы которого имеют численное значение, и переменная num, которая является числом. Реализуйте функцию queue(num, ...array), которая принимает в качестве аргументов множество значений списка array и значение переменной num. Функция должна найти минимальную сумму num элементов из значений массива array. Ответ выведите в консоль.

```javascript
function queue(n, arr) {
    arr.sort((a,b) => a - b);
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(queue(num, array))
```

### Задание 6.1
В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas прямоугольник fillRect с размерами 100 на 65.

```javascript
ctx.fillRect(5, 5, 100, 65);
```

### Задание 6.2
В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas два горизонтальных отрезка длиной 100.

Координаты первого отрезка: точка 1: x = 100, y = 100; точка 2: x = 200, y = 100.

Координаты второго отрезка: точка 1: x = 100, y = 150; точка 2: x = 200, y = 150.

```javascript
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.moveTo(100, 150);
ctx.lineTo(200, 150);
ctx.stroke();
```

### Задание 6.3
В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas три отрезка разных цветов. Первый отрезок красного #e74c3c цвета, второй — зеленого #16a085 цвета, а третий — синего #2980b9 цвета.

```javascript
ctx.beginPath();
ctx.strokeStyle = "#e74c3c";
ctx.moveTo(50, 50);
ctx.lineTo(50, 100);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "#16a085";
ctx.moveTo(100, 50);
ctx.lineTo(100, 100);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "#2980b9";
ctx.moveTo(150, 50);
ctx.lineTo(150, 100);
ctx.stroke();
```

### Задание 6.4
В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas четыре квадрата fillRect разных цветов с указанными на картинке размерами и отступами.

Значение цветов:

- Левый верхний квадрат: #ff3d00
- Правый верхний квадрат: #0bdd38
- Левый нижний квадрат: #2e77da
- Правый нижний квадрат: #ffd200

![pic for 6.4 task](img/image_6.4.png)

```javascript
ctx.beginPath();
ctx.fillStyle = '#ff3d00';
ctx.fillRect(10, 10, 100, 100);
ctx.fillStyle = '#0bdd38';
ctx.fillRect(120, 10, 100, 100);
ctx.fillStyle = '#2e77da';
ctx.fillRect(10, 120, 100, 100);
ctx.fillStyle = '#ffd200';
ctx.fillRect(120, 120, 100, 100);
```

### Задание 6.5
В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas 50 окружностей c центром в точке 150:150 и радиусом от 2 до 100. Для решения данной задачи воспользуйтесь циклом.

```javascript
for (let i = 2; i <= 100; i += 2){
    ctx.beginPath();
    ctx.arc(150, 150, i, 0, 2 * Math.PI);
    ctx.stroke();
  }
```