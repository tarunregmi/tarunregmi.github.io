const humberger = document.getElementById("humberger")
const aside = document.getElementById("aside");
const cross = document.getElementById("cross");

document.getElementById('today').textContent = new Intl.DateTimeFormat('en-us', {dateStyle: 'full'}).format(new Date());
cross.addEventListener("click", () => aside.classList.toggle("show"));