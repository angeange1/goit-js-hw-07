const listItems = document.querySelectorAll(".item")

console.log("Number of categories: ", listItems.length)


listItems.forEach(listItem =>
    console.log("Category: ", listItem.firstElementChild.textContent,
        "\nElements: ", listItem.children[1].children.length)
)

