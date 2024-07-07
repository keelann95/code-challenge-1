addEventListener("DOMContentLoaded", () =>
  
  button.addEventListener("click", function () {
    if (inputElement.value.length > 0) {
      const list = document.createElement("li");
      list.appendChild(document.createTextNode(inputElement.value));
      unOrderedList.appendChild(list);
      inputElement.value = "";
    }
  })
  
);

