export const sumOfDate = (date: any) => {
  const dateString = date.toLocaleDateString('ru-RU').replace(/\./g, ''); // Преобразовать дату в строку и удалить точки
  let sum = 0;
  for (let i = 0; i < dateString.length; i++) {
    sum += parseInt(dateString[i]); // Преобразовать символ обратно в число и добавить к сумме
  }
  return sum;
}

