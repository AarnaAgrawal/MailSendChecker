console.log("CONTENT SCRIPT ACTIVE");

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log("MESSAGE RECEIVED:", msg);
    if (msg.type === "GET_EMAIL") {
        const selectors = [
            '[aria-label="Message Body"]',
            '[role="textbox"][contenteditable="true"]'
        ];
        let box = null;
        for (let sel of selectors) {
            box = document.querySelector(sel);
            if (box) {
                console.log("FOUND WITH:", sel);
                break;
            }
        }
        console.log("BOX:", box);
        const email = (box?.value || box?.innerText || "").toLowerCase();
        console.log("RAW EMAIL:", email);
        sendResponse({ email });
    }

    return true;
});
