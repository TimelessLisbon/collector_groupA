gdjs.FimCode = {};
gdjs.FimCode.localVariables = [];
gdjs.FimCode.GDfundoObjects1= [];
gdjs.FimCode.GDfundoObjects2= [];
gdjs.FimCode.GDfundoObjects3= [];
gdjs.FimCode.GDconfettiObjects1= [];
gdjs.FimCode.GDconfettiObjects2= [];
gdjs.FimCode.GDconfettiObjects3= [];
gdjs.FimCode.GDscoreObjects1= [];
gdjs.FimCode.GDscoreObjects2= [];
gdjs.FimCode.GDscoreObjects3= [];
gdjs.FimCode.GDnext_9595sceneObjects1= [];
gdjs.FimCode.GDnext_9595sceneObjects2= [];
gdjs.FimCode.GDnext_9595sceneObjects3= [];
gdjs.FimCode.GDURLObjects1= [];
gdjs.FimCode.GDURLObjects2= [];
gdjs.FimCode.GDURLObjects3= [];
gdjs.FimCode.GDfundopistagmObjects1= [];
gdjs.FimCode.GDfundopistagmObjects2= [];
gdjs.FimCode.GDfundopistagmObjects3= [];
gdjs.FimCode.GDpistagmObjects1= [];
gdjs.FimCode.GDpistagmObjects2= [];
gdjs.FimCode.GDpistagmObjects3= [];
gdjs.FimCode.GDdigitsObjects1= [];
gdjs.FimCode.GDdigitsObjects2= [];
gdjs.FimCode.GDdigitsObjects3= [];
gdjs.FimCode.GDlocal_9595erradoObjects1= [];
gdjs.FimCode.GDlocal_9595erradoObjects2= [];
gdjs.FimCode.GDlocal_9595erradoObjects3= [];
gdjs.FimCode.GDtask_9595confirmationObjects1= [];
gdjs.FimCode.GDtask_9595confirmationObjects2= [];
gdjs.FimCode.GDtask_9595confirmationObjects3= [];
gdjs.FimCode.GDgmapsObjects1= [];
gdjs.FimCode.GDgmapsObjects2= [];
gdjs.FimCode.GDgmapsObjects3= [];


gdjs.FimCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
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
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25171364);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score_Finish", "1", runtimeScene.getScene().getVariables().getFromIndex(2));
}}

}


};gdjs.FimCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25110380);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(120 - (((runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()) * 60) + (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber())));
}
{ //Subevents
gdjs.FimCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.FimCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25082196);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().getFromIndex(4), runtimeScene.getScene().getVariables().getFromIndex(2));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.FimCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25297716);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "PT_Presente.MP3", 2, true, 100, 1);
}}

}


};gdjs.FimCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25297876);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "gift_EN.MP3", 2, true, 100, 1);
}}

}


};gdjs.FimCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25477388);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "FR_Presente.AAC", 1, true, 100, 1);
}}

}


};gdjs.FimCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25479212);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ES_Presente.AAC", 1, true, 100, 1);
}}

}


};gdjs.FimCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.FimCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25726156);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "tada-fanfare-a-6313.mp3", false, 100, 1);
}}

}


};gdjs.FimCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25726484);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "fairy-dust-shimmer-1-175611.mp3", false, 100, 1);
}}

}


};gdjs.FimCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25433668);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(20);
}}

}


};gdjs.FimCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "encontrado");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.FimCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
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
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25267644);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(2));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}

}


};gdjs.FimCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("confetti"), gdjs.FimCode.GDconfettiObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(30);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "confetti");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}{for(var i = 0, len = gdjs.FimCode.GDconfettiObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDconfettiObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "min"));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour"));
}
{ //Subevents
gdjs.FimCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().getFromIndex(5), runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Lusiadas", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.firebaseTools.database.getField("Lusiadas", "Status", runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(2));
}
{ //Subevents
gdjs.FimCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scene_start") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber());
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDscoreObjects1[i].setString("00" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 100);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDscoreObjects1[i].setString("0" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 100);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDscoreObjects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.FimCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.FimCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsString() == gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "encontrado");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == "encontrado");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("confetti"), gdjs.FimCode.GDconfettiObjects1);
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "confetti");
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{runtimeScene.getScene().getVariables().getFromIndex(8).setString("");
}{for(var i = 0, len = gdjs.FimCode.GDconfettiObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDconfettiObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.FimCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "confetti") >= 2;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList9(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 7;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 8;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("confetti"), gdjs.FimCode.GDconfettiObjects1);
{for(var i = 0, len = gdjs.FimCode.GDconfettiObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDconfettiObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.FimCode.GDconfettiObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDconfettiObjects1[i].hide();
}
}
{ //Subevents
gdjs.FimCode.eventsList12(runtimeScene);} //End of subevents
}

}


};

gdjs.FimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FimCode.GDfundoObjects1.length = 0;
gdjs.FimCode.GDfundoObjects2.length = 0;
gdjs.FimCode.GDfundoObjects3.length = 0;
gdjs.FimCode.GDconfettiObjects1.length = 0;
gdjs.FimCode.GDconfettiObjects2.length = 0;
gdjs.FimCode.GDconfettiObjects3.length = 0;
gdjs.FimCode.GDscoreObjects1.length = 0;
gdjs.FimCode.GDscoreObjects2.length = 0;
gdjs.FimCode.GDscoreObjects3.length = 0;
gdjs.FimCode.GDnext_9595sceneObjects1.length = 0;
gdjs.FimCode.GDnext_9595sceneObjects2.length = 0;
gdjs.FimCode.GDnext_9595sceneObjects3.length = 0;
gdjs.FimCode.GDURLObjects1.length = 0;
gdjs.FimCode.GDURLObjects2.length = 0;
gdjs.FimCode.GDURLObjects3.length = 0;
gdjs.FimCode.GDfundopistagmObjects1.length = 0;
gdjs.FimCode.GDfundopistagmObjects2.length = 0;
gdjs.FimCode.GDfundopistagmObjects3.length = 0;
gdjs.FimCode.GDpistagmObjects1.length = 0;
gdjs.FimCode.GDpistagmObjects2.length = 0;
gdjs.FimCode.GDpistagmObjects3.length = 0;
gdjs.FimCode.GDdigitsObjects1.length = 0;
gdjs.FimCode.GDdigitsObjects2.length = 0;
gdjs.FimCode.GDdigitsObjects3.length = 0;
gdjs.FimCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.FimCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.FimCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.FimCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.FimCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.FimCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.FimCode.GDgmapsObjects1.length = 0;
gdjs.FimCode.GDgmapsObjects2.length = 0;
gdjs.FimCode.GDgmapsObjects3.length = 0;

gdjs.FimCode.eventsList13(runtimeScene);
gdjs.FimCode.GDfundoObjects1.length = 0;
gdjs.FimCode.GDfundoObjects2.length = 0;
gdjs.FimCode.GDfundoObjects3.length = 0;
gdjs.FimCode.GDconfettiObjects1.length = 0;
gdjs.FimCode.GDconfettiObjects2.length = 0;
gdjs.FimCode.GDconfettiObjects3.length = 0;
gdjs.FimCode.GDscoreObjects1.length = 0;
gdjs.FimCode.GDscoreObjects2.length = 0;
gdjs.FimCode.GDscoreObjects3.length = 0;
gdjs.FimCode.GDnext_9595sceneObjects1.length = 0;
gdjs.FimCode.GDnext_9595sceneObjects2.length = 0;
gdjs.FimCode.GDnext_9595sceneObjects3.length = 0;
gdjs.FimCode.GDURLObjects1.length = 0;
gdjs.FimCode.GDURLObjects2.length = 0;
gdjs.FimCode.GDURLObjects3.length = 0;
gdjs.FimCode.GDfundopistagmObjects1.length = 0;
gdjs.FimCode.GDfundopistagmObjects2.length = 0;
gdjs.FimCode.GDfundopistagmObjects3.length = 0;
gdjs.FimCode.GDpistagmObjects1.length = 0;
gdjs.FimCode.GDpistagmObjects2.length = 0;
gdjs.FimCode.GDpistagmObjects3.length = 0;
gdjs.FimCode.GDdigitsObjects1.length = 0;
gdjs.FimCode.GDdigitsObjects2.length = 0;
gdjs.FimCode.GDdigitsObjects3.length = 0;
gdjs.FimCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.FimCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.FimCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.FimCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.FimCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.FimCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.FimCode.GDgmapsObjects1.length = 0;
gdjs.FimCode.GDgmapsObjects2.length = 0;
gdjs.FimCode.GDgmapsObjects3.length = 0;


return;

}

gdjs['FimCode'] = gdjs.FimCode;
