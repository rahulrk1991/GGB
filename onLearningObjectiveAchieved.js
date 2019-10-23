
// Function in FB 2.0 | on the window variable | gets called from inside GGB
function onLearningObjectiveAchieved(ggbUrl, LOID, desc) {
    console.log("GGB_LO_Tracking : onLearningObjectiveAchieved() function call start");
    console.log("GGB_LO_Tracking : Params passed to onLearningObjectiveAchieved (LOID, desc) : ", LOID, desc);
    var geogebraFrameUrl = new URL(ggbUrl);
    console.log("GGB_LO_Tracking : geogebraFrameUrl : ", geogebraFrameUrl);
    var questionID = geogebraFrameUrl.searchParams.get("qID");
    console.log("GGB_LO_Tracking : questionID : ", questionID);
    window.postMessage({ type: 'LO', questionID, LOID, null, desc });
    console.log("GGB_LO_Tracking : onLearningObjectiveAchieved() function call complete");
}

function onLearningObjectiveAchieved(LOID, desc) {
    if (window.onLearningObjectiveAchieved) {
        window.onLearningObjectiveAchieved(window.location.href, LOID, desc);
    }
}


function onLearningObjectiveAchieved(LOID, desc) {
    var questionID = geogebraFrameUrl.searchParams.get("qID");
    window.postMessage({ type: 'LO', questionID, LOID, null, desc });
}
