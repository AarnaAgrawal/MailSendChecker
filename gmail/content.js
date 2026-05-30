alert("running");
console.log("loaded 2");
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log("message", msg)
    if (msg.type === "GET_EMAIL") {
        const box = document.querySelector(
            '[aria-label="Message Body"]'
        );
        console.log("box", box)
        const email = (box?.innerText || "").toLowerCase();
        sendResponse({ email });
        console.log("email", email);
    }
});
