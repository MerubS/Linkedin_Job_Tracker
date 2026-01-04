chrome.runtime.onMessage.addListener((message)=>{
    if(message.type === "JOB_APPLIED") {
        fetch("https://script.google.com/macros/s/AKfycbxXJX2PPDsuVRNpjauRCDRI1FyxoYKEOCfn7ngZNfqWsghuOp23OrKFfuFatj4UST1w/exec", {
            method:"POST",
            headers: {"CONTENT-TYPE": "application/json"},
            body: JSON.stringify(message.payload)
        })
    }
})