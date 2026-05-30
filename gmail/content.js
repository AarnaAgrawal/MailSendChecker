console.log("CONTENT SCRIPT ACTIVE");

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log("MESSAGE RECEIVED:", msg);

    if (msg.type === "GET_EMAIL") {

        const selectors = [
            'div[contenteditable="true"][role="textbox"]',
            'div[contenteditable="true"]',
            'textarea'
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
        console.log("BOX INNERTEXT:", box?.innerText);
        console.log("BOX TEXTCONTENT:", box?.textContent);
        console.log("BOX VALUE:", box?.value);

        const email = (
            box?.value ||
            box?.innerText ||
            box?.textContent ||
            ""
        ).toLowerCase();

        console.log("RAW EMAIL:", email);

        sendResponse({ email });
    }

    return true;
});
