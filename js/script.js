// Адаптивность и доступность
document.getElementById("fontIncrease")?.addEventListener("click", () => {
  let currentSize = parseInt(window.getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = currentSize + 2 + "px";
});

document.getElementById("contrastToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Загрузка данных программ (пример)
fetch("data/programs.json")
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector(".program-list");
    if(container) {
      container.innerHTML = data.map(p => `<div class="program">${p.name}</div>`).join("");
    }
  });
