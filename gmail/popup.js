document.getElementById("button").addEventListener("click", () => {
    const email = document.getElementById("email").value.toLowerCase();
    const words = email.split(/\s+/)
    const curseWords = ["shit", "ass"];
    let found = false;
    for (let word of words) {
        if (curseWords.includes(word)) {
            found = true;
            break;
        }
    }
    const result = document.getElementById("result");
    if (found) {
        result.textContent = "This email contains curse words."
    } else {
        result.textContent = "No curse words found."
    }
});
