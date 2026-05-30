const resetButton = document.getElementById("resetChecklist");
const checklist = document.getElementById("checklist");
const toggleButtons = document.querySelectorAll(".toggle-btn");
const priceElements = document.querySelectorAll(".price");

resetButton?.addEventListener("click", () => {
  checklist
    ?.querySelectorAll("input[type='checkbox']")
    .forEach((checkbox) => {
      checkbox.checked = false;
    });
});

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    const plan = button.dataset.plan;

    priceElements.forEach((price) => {
      const value = plan === "yearly" ? price.dataset.yearly : price.dataset.monthly;
      if (value) {
        price.textContent = value;
      }
    });
  });
});
