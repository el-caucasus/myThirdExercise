const title = prompt("Как называется ваш проект?");
console.log(title);

const screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens);

const screenPrice = +prompt("Сколько будет стоить данная работа?");
console.log(screenPrice);

const adaptive = confirm("Нужен ли адаптив на сайте");
console.log(adaptive);

const service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);

const servicePrice1 = +prompt("Сколько это будет стоить?");
console.log(servicePrice1);

const service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);

const servicePrice2 = +prompt("Сколько это будет стоить?");
console.log(servicePrice2);

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

const rollback = 10;

const servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
console.log(servicePercentPrice);


if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
}
else if (15000 < fullPrice && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
}
else if (0 < fullPrice && fullPrice < 15000) {
    console.log("Скидка не предусмотрена");
}
else {
    console.log("Что то пошло не так");
}
