// Get all the list items
const listItems = document.querySelectorAll(".list-item");

// Check if there is any stored state in local storage
const storedState = localStorage.getItem("crossedOutItems");
const crossedOutItems = storedState ? JSON.parse(storedState) : {};

// Apply the crossed-out style to the appropriate items based on the stored state
for (const index in crossedOutItems) {
  if (crossedOutItems[index]) {
    listItems[index].classList.add("crossed-out");
  }
}

// Add a click event listener to each list item
listItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (!item.classList.contains("crossed-out")) {
      // Toggle the 'crossed-out' class on the clicked item
      item.classList.add("crossed-out");

      // Update the crossed-out state in the stored object
      crossedOutItems[index] = true;

      // Store the updated state in local storage
      localStorage.setItem("crossedOutItems", JSON.stringify(crossedOutItems));
    }
  });
});
