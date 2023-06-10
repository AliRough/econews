dateElem = document.querySelector("#date");

setInterval(() => {
  dateElem.innerHTML = "";
  let date = new persianDate();
  dateElem.append(date.toLocale("fa").format("dddd DD MMMM YYYY hh:mm:ss"));
}, 1000);
