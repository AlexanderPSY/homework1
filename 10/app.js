let pvPanelPower = 0.2 //мощность солнечной панели, кВт
let pvPanelAmount = 25 //количество панелей, шт
let insolationTime = 5 // среднее время инсоляции, ч
let currentMonthDays = 30 // число дней в текущем месяце, дней
let housePowerConsumption = 5 // собственное энергопотребление дома, кВт*ч
let electricityPrice = 0.1 //стоимость 1 кВт*ч, долл

let monthGeneration = pvPanelPower * pvPanelAmount * insolationTime * currentMonthDays //генерация энергии за месяц, кВт*ч
let monthConsumption = housePowerConsumption * currentMonthDays //месяцное собственное потребление, кВт*ч
let solarGenerationProfit = (monthGeneration - monthConsumption) * electricityPrice // прибыль от проданой энергии, долл
console.log(`Your receive ${solarGenerationProfit} USD profit`);


