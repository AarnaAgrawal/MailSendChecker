document.getElementById("button").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(
            tabs[0].id,
            { type: "GET_EMAIL" },
            (response) => {
                const email = (response.email || "").toLowerCase();
                const curseWords = ["shit", "ass"];
                const found = curseWords.some(word =>
                    new RegExp(`\\b${word}\\b`, "i").test(email)
                );
                const result = document.getElementById("result");
                result.textContent = found
                    ? "This email contains curse words."
                    : "No curse words found.";
            }
        );
    });
});
