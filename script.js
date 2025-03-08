document.addEventListener("DOMContentLoaded",function(){
    let name = prompt("enter your name:");
    let color=prompt("enter your fav color:");
    alert(`hello,${name}!Welcome to the page.`);
    document.body.style.backgroundColor=color;
});