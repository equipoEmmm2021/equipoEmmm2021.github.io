//Functions to show different content blocks in mobile

function showCampaignM(){
    document.getElementById("campaignM").classList.remove("hide");
    document.getElementById("buttonCampaignM").classList.add("menuActive");
    document.getElementById("rewardsM").classList.add("hide");
    document.getElementById("buttonRewardsM").classList.remove("menuActive");
    document.getElementById("faqsM").classList.add("hide");
    document.getElementById("buttonFaqsM").classList.remove("menuActive");
    document.getElementById("commentsM").classList.add("hide");
    document.getElementById("buttonCommentsM").classList.remove("menuActive");

}

function showRewardsM(){
    document.getElementById("campaignM").classList.add("hide");
    document.getElementById("buttonCampaignM").classList.remove("menuActive");
    document.getElementById("rewardsM").classList.remove("hide");
    document.getElementById("buttonRewardsM").classList.add("menuActive");
    document.getElementById("faqsM").classList.add("hide");
    document.getElementById("buttonFaqsM").classList.remove("menuActive");
    document.getElementById("commentsM").classList.add("hide");
    document.getElementById("buttonCommentsM").classList.remove("menuActive");

}

function showFaqsM(){
    document.getElementById("campaignM").classList.add("hide");
    document.getElementById("buttonCampaignM").classList.remove("menuActive");
    document.getElementById("rewardsM").classList.add("hide");
    document.getElementById("buttonRewardsM").classList.remove("menuActive");
    document.getElementById("faqsM").classList.remove("hide");
    document.getElementById("buttonFaqsM").classList.add("menuActive");
    document.getElementById("commentsM").classList.add("hide");
    document.getElementById("buttonCommentsM").classList.remove("menuActive");

}

function showCommentsM(){
    document.getElementById("campaignM").classList.add("hide");
    document.getElementById("buttonCampaignM").classList.remove("menuActive");
    document.getElementById("rewardsM").classList.add("hide");
    document.getElementById("buttonRewardsM").classList.remove("menuActive");
    document.getElementById("faqsM").classList.add("hide");
    document.getElementById("buttonFaqsM").classList.remove("menuActive");
    document.getElementById("commentsM").classList.remove("hide");
    document.getElementById("buttonCommentsM").classList.add("menuActive");

}

//Functions to show different content blocks in desktop

function showCampaignD(){
    console.log("Funciona");
    document.getElementById("campaignD").classList.remove("hide");
    document.getElementById("buttonCampaignD").classList.add("menuActive");
    document.getElementById("faqsD").classList.add("hide");
    document.getElementById("buttonFaqsD").classList.remove("menuActive");
    document.getElementById("commentsD").classList.add("hide");
    document.getElementById("buttonCommentsD").classList.remove("menuActive");
    console.log("Funciona");
}

function showFaqsD(){
    document.getElementById("campaignD").classList.add("hide");
    document.getElementById("buttonCampaignD").classList.remove("menuActive");
    document.getElementById("faqsD").classList.remove("hide");
    document.getElementById("buttonFaqsD").classList.add("menuActive");
    document.getElementById("commentsD").classList.add("hide");
    document.getElementById("buttonCommentsD").classList.remove("menuActive");

}

function showCommentsD(){
    document.getElementById("campaignD").classList.add("hide");
    document.getElementById("buttonCampaignD").classList.remove("menuActive");
    document.getElementById("faqsD").classList.add("hide");
    document.getElementById("buttonFaqsD").classList.remove("menuActive");
    document.getElementById("commentsD").classList.remove("hide");
    document.getElementById("buttonCommentsD").classList.add("menuActive");

}
