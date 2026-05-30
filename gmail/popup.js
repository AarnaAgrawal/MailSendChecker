document.getElementById("button").addEventListener("click", () => {
    const email = document.getElementById("email").value.toLowerCase();
    const curseWords = ["shit", "ass"];
    const found = curseWords.some(word =>
        new RegExp('\\b${word}\\b', "i").test(email)
        );
    const result = document.getElementById("result");
    if (found) {
        result.textContent = "This email contains curse words."
    } else {
        result.textContent = "No curse words found."
    }
});
