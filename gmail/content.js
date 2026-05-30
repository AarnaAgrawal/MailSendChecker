alert("running");
console.log("loaded 2");
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === "GET_EMAIL") {
        const box = document.querySelector(
            '[aria-label="Message Body"]'
        );
        const email = (box?.innerText || "").toLowerCase();
        sendResponse({ email });
    }
});
