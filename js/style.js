var items = document.querySelectorAll("#menu a");

items.forEach(item=>{
    item.addEventListener("click", ()=>console.log( item.textContent+" clickeado"))
})
