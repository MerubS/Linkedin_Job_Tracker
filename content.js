function getJobData(){
    
    function getWorkMode() {
        const workModes = ["remote", "hybrid" , "on-site"]
        const visuallyHidden = Array.from(document.querySelectorAll(".job-details-fit-level-preferences button"));
    

        for(const mode of visuallyHidden) {
            const text = mode?.innerText?.toLowerCase();
            const foundMode = workModes.find(mode => text.includes(mode));
            if(foundMode){
            return foundMode
        }
        }
        return "Not mentioned"
    }

    return {
        title: document.querySelector("h1 a")?.innerText || "N/A",
        company: document.querySelector(".job-details-jobs-unified-top-card__company-name a")?.innerText?.trim() || "N/A",
        location: document.querySelector(".job-details-jobs-unified-top-card__tertiary-description-container .tvm__text.tvm__text--low-emphasis")?.innerText.trim() || "N/A",
        mode: getWorkMode(),
        salary: document.querySelector(".job-details-fit-level-preferences button strong")?.innerText?.trim() || "N/A",
        url: window.location.href
    }
}

document.addEventListener("click", (e)=>{
    const btn = e.target.closest("button.jobs-apply-button");
    if(!btn) return;

    console.log("Apply clicked in content script");

    if(e.target.innerText?.includes("Apply")) {
        try{
        chrome.runtime.sendMessage({
            type: "JOB_APPLIED",
            payload: getJobData()
        })}
        catch(err) {
            console.warn("Failed to send job data:", err);
        }
    }
})

