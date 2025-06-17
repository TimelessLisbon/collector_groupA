gdjs.VideoCode = {};
gdjs.VideoCode.localVariables = [];
gdjs.VideoCode.GDVideo_9595ENObjects1= [];
gdjs.VideoCode.GDVideo_9595ENObjects2= [];
gdjs.VideoCode.GDVideo_9595ENObjects3= [];
gdjs.VideoCode.GDVideo_9595PTObjects1= [];
gdjs.VideoCode.GDVideo_9595PTObjects2= [];
gdjs.VideoCode.GDVideo_9595PTObjects3= [];
gdjs.VideoCode.GDVideo_9595FRObjects1= [];
gdjs.VideoCode.GDVideo_9595FRObjects2= [];
gdjs.VideoCode.GDVideo_9595FRObjects3= [];
gdjs.VideoCode.GDVideo_9595ESObjects1= [];
gdjs.VideoCode.GDVideo_9595ESObjects2= [];
gdjs.VideoCode.GDVideo_9595ESObjects3= [];
gdjs.VideoCode.GDvideo_9595bannerObjects1= [];
gdjs.VideoCode.GDvideo_9595bannerObjects2= [];
gdjs.VideoCode.GDvideo_9595bannerObjects3= [];
gdjs.VideoCode.GDscoreObjects1= [];
gdjs.VideoCode.GDscoreObjects2= [];
gdjs.VideoCode.GDscoreObjects3= [];
gdjs.VideoCode.GDnext_9595sceneObjects1= [];
gdjs.VideoCode.GDnext_9595sceneObjects2= [];
gdjs.VideoCode.GDnext_9595sceneObjects3= [];
gdjs.VideoCode.GDURLObjects1= [];
gdjs.VideoCode.GDURLObjects2= [];
gdjs.VideoCode.GDURLObjects3= [];
gdjs.VideoCode.GDfundopistagmObjects1= [];
gdjs.VideoCode.GDfundopistagmObjects2= [];
gdjs.VideoCode.GDfundopistagmObjects3= [];
gdjs.VideoCode.GDpistagmObjects1= [];
gdjs.VideoCode.GDpistagmObjects2= [];
gdjs.VideoCode.GDpistagmObjects3= [];
gdjs.VideoCode.GDdigitsObjects1= [];
gdjs.VideoCode.GDdigitsObjects2= [];
gdjs.VideoCode.GDdigitsObjects3= [];
gdjs.VideoCode.GDlocal_9595erradoObjects1= [];
gdjs.VideoCode.GDlocal_9595erradoObjects2= [];
gdjs.VideoCode.GDlocal_9595erradoObjects3= [];
gdjs.VideoCode.GDtask_9595confirmationObjects1= [];
gdjs.VideoCode.GDtask_9595confirmationObjects2= [];
gdjs.VideoCode.GDtask_9595confirmationObjects3= [];
gdjs.VideoCode.GDgmapsObjects1= [];
gdjs.VideoCode.GDgmapsObjects2= [];
gdjs.VideoCode.GDgmapsObjects3= [];


gdjs.VideoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17100876);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField("Leaderboard", "ID", runtimeScene.getScene().getVariables().getFromIndex(4), runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


};gdjs.VideoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Video_PT"), gdjs.VideoCode.GDVideo_9595PTObjects2);
gdjs.copyArray(runtimeScene.getObjects("video_banner"), gdjs.VideoCode.GDvideo_9595bannerObjects2);
{for(var i = 0, len = gdjs.VideoCode.GDvideo_9595bannerObjects2.length ;i < len;++i) {
    gdjs.VideoCode.GDvideo_9595bannerObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}{for(var i = 0, len = gdjs.VideoCode.GDvideo_9595bannerObjects2.length ;i < len;++i) {
    gdjs.VideoCode.GDvideo_9595bannerObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.VideoCode.GDVideo_9595PTObjects2.length ;i < len;++i) {
    gdjs.VideoCode.GDVideo_9595PTObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.VideoCode.GDVideo_9595PTObjects2.length ;i < len;++i) {
    gdjs.VideoCode.GDVideo_9595PTObjects2[i].play();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Video_EN"), gdjs.VideoCode.GDVideo_9595ENObjects2);
gdjs.copyArray(runtimeScene.getObjects("video_banner"), gdjs.VideoCode.GDvideo_9595bannerObjects2);
{for(var i = 0, len = gdjs.VideoCode.GDvideo_9595bannerObjects2.length ;i < len;++i) {
    gdjs.VideoCode.GDvideo_9595bannerObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.VideoCode.GDvideo_9595bannerObjects2.length ;i < len;++i) {
    gdjs.VideoCode.GDvideo_9595bannerObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.VideoCode.GDVideo_9595ENObjects2.length ;i < len;++i) {
    gdjs.VideoCode.GDVideo_9595ENObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.VideoCode.GDVideo_9595ENObjects2.length ;i < len;++i) {
    gdjs.VideoCode.GDVideo_9595ENObjects2[i].play();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Video_FR"), gdjs.VideoCode.GDVideo_9595FRObjects2);
gdjs.copyArray(runtimeScene.getObjects("video_banner"), gdjs.VideoCode.GDvideo_9595bannerObjects2);
{for(var i = 0, len = gdjs.VideoCode.GDvideo_9595bannerObjects2.length ;i < len;++i) {
    gdjs.VideoCode.GDvideo_9595bannerObjects2[i].getBehavior("Animation").setAnimationIndex(2);
}
}{for(var i = 0, len = gdjs.VideoCode.GDvideo_9595bannerObjects2.length ;i < len;++i) {
    gdjs.VideoCode.GDvideo_9595bannerObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.VideoCode.GDVideo_9595FRObjects2.length ;i < len;++i) {
    gdjs.VideoCode.GDVideo_9595FRObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.VideoCode.GDVideo_9595FRObjects2.length ;i < len;++i) {
    gdjs.VideoCode.GDVideo_9595FRObjects2[i].play();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Video_ES"), gdjs.VideoCode.GDVideo_9595ESObjects1);
gdjs.copyArray(runtimeScene.getObjects("video_banner"), gdjs.VideoCode.GDvideo_9595bannerObjects1);
{for(var i = 0, len = gdjs.VideoCode.GDvideo_9595bannerObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDvideo_9595bannerObjects1[i].getBehavior("Animation").setAnimationIndex(3);
}
}{for(var i = 0, len = gdjs.VideoCode.GDvideo_9595bannerObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDvideo_9595bannerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.VideoCode.GDVideo_9595ESObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDVideo_9595ESObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.VideoCode.GDVideo_9595ESObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDVideo_9595ESObjects1[i].play();
}
}}

}


};gdjs.VideoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17101364);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsString() != "4a6bed99-f0a7-4a39-a974-6a4e0dceeae5");
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fim", false);
}}

}


};gdjs.VideoCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Video_EN"), gdjs.VideoCode.GDVideo_9595ENObjects1);
gdjs.copyArray(runtimeScene.getObjects("Video_ES"), gdjs.VideoCode.GDVideo_9595ESObjects1);
gdjs.copyArray(runtimeScene.getObjects("Video_FR"), gdjs.VideoCode.GDVideo_9595FRObjects1);
gdjs.copyArray(runtimeScene.getObjects("Video_PT"), gdjs.VideoCode.GDVideo_9595PTObjects1);
gdjs.copyArray(runtimeScene.getObjects("video_banner"), gdjs.VideoCode.GDvideo_9595bannerObjects1);
{for(var i = 0, len = gdjs.VideoCode.GDVideo_9595ENObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDVideo_9595ENObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.VideoCode.GDVideo_9595PTObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDVideo_9595PTObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.VideoCode.GDVideo_9595FRObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDVideo_9595FRObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.VideoCode.GDVideo_9595ESObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDVideo_9595ESObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.VideoCode.GDvideo_9595bannerObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDvideo_9595bannerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.VideoCode.GDVideo_9595ENObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDVideo_9595ENObjects1[i].pause();
}
}{for(var i = 0, len = gdjs.VideoCode.GDVideo_9595PTObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDVideo_9595PTObjects1[i].pause();
}
}{for(var i = 0, len = gdjs.VideoCode.GDVideo_9595FRObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDVideo_9595FRObjects1[i].pause();
}
}{for(var i = 0, len = gdjs.VideoCode.GDVideo_9595ESObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDVideo_9595ESObjects1[i].pause();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(29);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{ //Subevents
gdjs.VideoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().getFromIndex(5), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scene_start") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}}

}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.VideoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 50;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(5)) == gdjs.evtTools.firebaseTools.auth.userManagement.getUID();
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}{runtimeScene.getScene().getVariables().getFromIndex(5).setString("");
}
{ //Subevents
gdjs.VideoCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.VideoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VideoCode.GDVideo_9595ENObjects1.length = 0;
gdjs.VideoCode.GDVideo_9595ENObjects2.length = 0;
gdjs.VideoCode.GDVideo_9595ENObjects3.length = 0;
gdjs.VideoCode.GDVideo_9595PTObjects1.length = 0;
gdjs.VideoCode.GDVideo_9595PTObjects2.length = 0;
gdjs.VideoCode.GDVideo_9595PTObjects3.length = 0;
gdjs.VideoCode.GDVideo_9595FRObjects1.length = 0;
gdjs.VideoCode.GDVideo_9595FRObjects2.length = 0;
gdjs.VideoCode.GDVideo_9595FRObjects3.length = 0;
gdjs.VideoCode.GDVideo_9595ESObjects1.length = 0;
gdjs.VideoCode.GDVideo_9595ESObjects2.length = 0;
gdjs.VideoCode.GDVideo_9595ESObjects3.length = 0;
gdjs.VideoCode.GDvideo_9595bannerObjects1.length = 0;
gdjs.VideoCode.GDvideo_9595bannerObjects2.length = 0;
gdjs.VideoCode.GDvideo_9595bannerObjects3.length = 0;
gdjs.VideoCode.GDscoreObjects1.length = 0;
gdjs.VideoCode.GDscoreObjects2.length = 0;
gdjs.VideoCode.GDscoreObjects3.length = 0;
gdjs.VideoCode.GDnext_9595sceneObjects1.length = 0;
gdjs.VideoCode.GDnext_9595sceneObjects2.length = 0;
gdjs.VideoCode.GDnext_9595sceneObjects3.length = 0;
gdjs.VideoCode.GDURLObjects1.length = 0;
gdjs.VideoCode.GDURLObjects2.length = 0;
gdjs.VideoCode.GDURLObjects3.length = 0;
gdjs.VideoCode.GDfundopistagmObjects1.length = 0;
gdjs.VideoCode.GDfundopistagmObjects2.length = 0;
gdjs.VideoCode.GDfundopistagmObjects3.length = 0;
gdjs.VideoCode.GDpistagmObjects1.length = 0;
gdjs.VideoCode.GDpistagmObjects2.length = 0;
gdjs.VideoCode.GDpistagmObjects3.length = 0;
gdjs.VideoCode.GDdigitsObjects1.length = 0;
gdjs.VideoCode.GDdigitsObjects2.length = 0;
gdjs.VideoCode.GDdigitsObjects3.length = 0;
gdjs.VideoCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.VideoCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.VideoCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.VideoCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.VideoCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.VideoCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.VideoCode.GDgmapsObjects1.length = 0;
gdjs.VideoCode.GDgmapsObjects2.length = 0;
gdjs.VideoCode.GDgmapsObjects3.length = 0;

gdjs.VideoCode.eventsList3(runtimeScene);
gdjs.VideoCode.GDVideo_9595ENObjects1.length = 0;
gdjs.VideoCode.GDVideo_9595ENObjects2.length = 0;
gdjs.VideoCode.GDVideo_9595ENObjects3.length = 0;
gdjs.VideoCode.GDVideo_9595PTObjects1.length = 0;
gdjs.VideoCode.GDVideo_9595PTObjects2.length = 0;
gdjs.VideoCode.GDVideo_9595PTObjects3.length = 0;
gdjs.VideoCode.GDVideo_9595FRObjects1.length = 0;
gdjs.VideoCode.GDVideo_9595FRObjects2.length = 0;
gdjs.VideoCode.GDVideo_9595FRObjects3.length = 0;
gdjs.VideoCode.GDVideo_9595ESObjects1.length = 0;
gdjs.VideoCode.GDVideo_9595ESObjects2.length = 0;
gdjs.VideoCode.GDVideo_9595ESObjects3.length = 0;
gdjs.VideoCode.GDvideo_9595bannerObjects1.length = 0;
gdjs.VideoCode.GDvideo_9595bannerObjects2.length = 0;
gdjs.VideoCode.GDvideo_9595bannerObjects3.length = 0;
gdjs.VideoCode.GDscoreObjects1.length = 0;
gdjs.VideoCode.GDscoreObjects2.length = 0;
gdjs.VideoCode.GDscoreObjects3.length = 0;
gdjs.VideoCode.GDnext_9595sceneObjects1.length = 0;
gdjs.VideoCode.GDnext_9595sceneObjects2.length = 0;
gdjs.VideoCode.GDnext_9595sceneObjects3.length = 0;
gdjs.VideoCode.GDURLObjects1.length = 0;
gdjs.VideoCode.GDURLObjects2.length = 0;
gdjs.VideoCode.GDURLObjects3.length = 0;
gdjs.VideoCode.GDfundopistagmObjects1.length = 0;
gdjs.VideoCode.GDfundopistagmObjects2.length = 0;
gdjs.VideoCode.GDfundopistagmObjects3.length = 0;
gdjs.VideoCode.GDpistagmObjects1.length = 0;
gdjs.VideoCode.GDpistagmObjects2.length = 0;
gdjs.VideoCode.GDpistagmObjects3.length = 0;
gdjs.VideoCode.GDdigitsObjects1.length = 0;
gdjs.VideoCode.GDdigitsObjects2.length = 0;
gdjs.VideoCode.GDdigitsObjects3.length = 0;
gdjs.VideoCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.VideoCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.VideoCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.VideoCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.VideoCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.VideoCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.VideoCode.GDgmapsObjects1.length = 0;
gdjs.VideoCode.GDgmapsObjects2.length = 0;
gdjs.VideoCode.GDgmapsObjects3.length = 0;


return;

}

gdjs['VideoCode'] = gdjs.VideoCode;
