let nameDiv = document.getElementById("name");

nameDiv.addEventListener("mouseenter", () => {
  document.body.style.backgroundColor = "#000";
  nameDiv.style.color = "#fff";
  document.getElementById("text-name").textContent = "Velocity";
});

nameDiv.addEventListener("mouseleave", () => {
  document.body.style.backgroundColor = "var(--color-one)";
  nameDiv.style.color = "var(--color-two)";
  document.getElementById("text-name").textContent = "Adham Ameer";
});

let hbd = document.getElementById("hbd");

setInterval(function () {
  let top = Math.trunc(Math.random() * hbd.clientHeight);
  let left = Math.trunc(Math.random() * hbd.clientWidth);
  let img = document.createElement("img");
  img.className = "adham";
  img.src =
    "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/365761901_273467948641157_3563384681719174596_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=sMSSbRBXGxgAX-SnNMH&_nc_ht=scontent-hbe1-1.xx&cb_e2o_trans=t&oh=00_AfDdihRij0SjxOqJ-Gq0SbT5qyQahC29C1v3NF_2d4tMXQ&oe=6516DD52";

  img.style.top = top + "px";
  img.style.left = left + "px";

  hbd.appendChild(img);

  setTimeout(function () {
    img.remove();
  }, 1000);
}, 10);
