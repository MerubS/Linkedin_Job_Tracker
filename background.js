chrome.runtime.onMessage.addListener((message)=>{
    if(message.type === "JOB_APPLIED") {
        fetch("https://script.google.com/macros/s/AKfycbzz43oeHsfh_P7XoLuCZZfikE8CPfuCwtAZoPyhLOnq5l7lo1GtJwQ--yry2v1ZUYm6/exec", {
            method:"POST",
            headers: {"CONTENT-TYPE": "application/json"},
            body: JSON.stringify(message.payload)
        })
    }
})