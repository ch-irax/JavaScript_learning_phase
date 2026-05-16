const insert = document.getElementById("insert")

window.addEventListener("keydown", (e) => {
    console.log(`Key: - ${e.key === " " ? "Space" : e.key}, Keycode: - ${e.keyCode}, Code: - ${e.code} `)

})