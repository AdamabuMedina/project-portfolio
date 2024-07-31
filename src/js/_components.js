const headerList = document.querySelector("#header-list");
const headerLink = document.querySelectorAll(".header-list__link");

console.log(headerLink);

for (let i = 0; i < headerLink.length; i++) {
  headerLink[i].addEventListener("click", function () {
    // Находим текущий активный элемент
    let current = document.querySelector(".header-list__link--active");

    // Если активный элемент найден, удаляем у него класс
    if (current) {
      current.classList.remove("header-list__link--active");
    }

    // Добавляем класс к текущему элементу
    this.classList.add("header-list__link--active");
  });
}
