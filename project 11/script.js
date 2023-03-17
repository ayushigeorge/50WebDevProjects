const insert = document.getElementById("insert");
window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
    <div class= "key">
    ${event.key === "" ? "space" : event.key}
    <small>event.key</small>
    </div>
    <div class= "key">
    ${event.keycode}
    <small>event.keycode</small>
    </div>
    <div class="key">
    ${event.code}
    <small> event.code</small>
    </div>
    `;
});
