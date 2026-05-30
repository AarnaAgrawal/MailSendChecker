document.getElementById("button").addEventListener("click", () => {
    const box = document.querySelector('[aria-label="Message Body"]');
    const email = (box?.innerText || "").toLowerCase();
    console.log(box);
    console.log(email);
    console.log(
        document.querySelectorAll('div[role="textbox"][contenteditable="true"]')
    );
    const curseWords = ["shit", "ass"];
    const found = curseWords.some(word =>
        new RegExp(`\\b${word}\\b`, "i").test(email)
    );
    const result = document.getElementById("result");
    if (found) {
        result.textContent = "This email contains curse words."
    } else {
        result.textContent = "No curse words found."
    }
});
