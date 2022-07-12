const boxesContainer = document.getElementById("boxes")
const btn = document.getElementById("btn")

// 原生js——操作类名（HTML5新增classList）
// classList.toggle( className )； 如果classList中存在给定的值，删除它，否则，添加它；
btn?.addEventListener("click", () => boxesContainer?.classList.toggle("big"))

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div")
      box.classList.add("box")
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      boxesContainer?.appendChild(box)
    }
  }
}

createBoxes()