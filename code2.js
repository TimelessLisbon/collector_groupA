gdjs.LoginCode = {};
gdjs.LoginCode.localVariables = [];
gdjs.LoginCode.GDcodeObjects1= [];
gdjs.LoginCode.GDcodeObjects2= [];
gdjs.LoginCode.GDcodeObjects3= [];
gdjs.LoginCode.GDokObjects1= [];
gdjs.LoginCode.GDokObjects2= [];
gdjs.LoginCode.GDokObjects3= [];
gdjs.LoginCode.GDloading_9595animationObjects1= [];
gdjs.LoginCode.GDloading_9595animationObjects2= [];
gdjs.LoginCode.GDloading_9595animationObjects3= [];
gdjs.LoginCode.GDfundoObjects1= [];
gdjs.LoginCode.GDfundoObjects2= [];
gdjs.LoginCode.GDfundoObjects3= [];
gdjs.LoginCode.GDnameObjects1= [];
gdjs.LoginCode.GDnameObjects2= [];
gdjs.LoginCode.GDnameObjects3= [];
gdjs.LoginCode.GDfundo2Objects1= [];
gdjs.LoginCode.GDfundo2Objects2= [];
gdjs.LoginCode.GDfundo2Objects3= [];
gdjs.LoginCode.GDwrongObjects1= [];
gdjs.LoginCode.GDwrongObjects2= [];
gdjs.LoginCode.GDwrongObjects3= [];
gdjs.LoginCode.GDemptyObjects1= [];
gdjs.LoginCode.GDemptyObjects2= [];
gdjs.LoginCode.GDemptyObjects3= [];
gdjs.LoginCode.GDscoreObjects1= [];
gdjs.LoginCode.GDscoreObjects2= [];
gdjs.LoginCode.GDscoreObjects3= [];
gdjs.LoginCode.GDnext_9595sceneObjects1= [];
gdjs.LoginCode.GDnext_9595sceneObjects2= [];
gdjs.LoginCode.GDnext_9595sceneObjects3= [];
gdjs.LoginCode.GDURLObjects1= [];
gdjs.LoginCode.GDURLObjects2= [];
gdjs.LoginCode.GDURLObjects3= [];
gdjs.LoginCode.GDfundopistagmObjects1= [];
gdjs.LoginCode.GDfundopistagmObjects2= [];
gdjs.LoginCode.GDfundopistagmObjects3= [];
gdjs.LoginCode.GDpistagmObjects1= [];
gdjs.LoginCode.GDpistagmObjects2= [];
gdjs.LoginCode.GDpistagmObjects3= [];
gdjs.LoginCode.GDdigitsObjects1= [];
gdjs.LoginCode.GDdigitsObjects2= [];
gdjs.LoginCode.GDdigitsObjects3= [];
gdjs.LoginCode.GDlocal_9595erradoObjects1= [];
gdjs.LoginCode.GDlocal_9595erradoObjects2= [];
gdjs.LoginCode.GDlocal_9595erradoObjects3= [];
gdjs.LoginCode.GDtask_9595confirmationObjects1= [];
gdjs.LoginCode.GDtask_9595confirmationObjects2= [];
gdjs.LoginCode.GDtask_9595confirmationObjects3= [];
gdjs.LoginCode.GDgmapsObjects1= [];
gdjs.LoginCode.GDgmapsObjects2= [];
gdjs.LoginCode.GDgmapsObjects3= [];


gdjs.LoginCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12528276);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


};gdjs.LoginCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12541388);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.auth.anonymSignIn(runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


};gdjs.LoginCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12566476);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


};gdjs.LoginCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12568684);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().getFromIndex(11), runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().getFromIndex(12), runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.firebaseTools.database.getField("Leaderboard", "ID", runtimeScene.getScene().getVariables().getFromIndex(13), runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", "", runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8))), runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


};gdjs.LoginCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Amarela", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Azul", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Castanha", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Rosa", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Roxa", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Verde", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "AzulClara", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Vermelha", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


};gdjs.LoginCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12556012);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.LoginCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12559908);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.LoginCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "1101");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "1202");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "1303");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "1404");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "1505");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "1606");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "1707");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "1808");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects2);
gdjs.copyArray(runtimeScene.getObjects("empty"), gdjs.LoginCode.GDemptyObjects2);
gdjs.copyArray(gdjs.LoginCode.GDnameObjects1, gdjs.LoginCode.GDnameObjects2);

gdjs.copyArray(gdjs.LoginCode.GDokObjects1, gdjs.LoginCode.GDokObjects2);

{runtimeScene.getScene().getVariables().getFromIndex(3).setString("");
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects2[i].setDisabled(true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects2[i].setDisabled(true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDokObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDokObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDemptyObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDemptyObjects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "invalid");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12526300);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.LoginCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("empty"), gdjs.LoginCode.GDemptyObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundo2"), gdjs.LoginCode.GDfundo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("loading_animation"), gdjs.LoginCode.GDloading_9595animationObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.LoginCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.LoginCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDokObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.LoginCode.GDokObjects1[i].getWidth())) / 2);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "invalid");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "inscrito");
}{for(var i = 0, len = gdjs.LoginCode.GDloading_9595animationObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDloading_9595animationObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDfundo2Objects1.length ;i < len;++i) {
    gdjs.LoginCode.GDfundo2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDemptyObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDemptyObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setString("");
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(3);
}{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(3);
}{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(3);
}{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(3);
}{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(3);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(3);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(3);
}{gdjs.evtsExt__Geolocation__LocatePlayer.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.LoginCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("loading_animation"), gdjs.LoginCode.GDloading_9595animationObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.LoginCode.GDcodeObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.LoginCode.GDnameObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.LoginCode.GDloading_9595animationObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDloading_9595animationObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.LoginCode.GDloading_9595animationObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setText(gdjs.evtTools.string.toUpperCase((gdjs.LoginCode.GDnameObjects1[i].getText())));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.LoginCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.LoginCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}{for(var i = 0, len = gdjs.LoginCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDwrongObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setPlaceholder("TOQUE PARA INSERIR");
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setPlaceholder("TOQUE PARA INSERIR");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setPlaceholder("TOUCH TO ADD");
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setPlaceholder("TOUCH TO ADD");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setPlaceholder("TAP POUR INSERER");
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setPlaceholder("TAP POUR INSERER");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setPlaceholder("PULSE PARA INSERTAR");
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setPlaceholder("PULSE PARA INSERTAR");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.LoginCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDokObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDokObjects1[k] = gdjs.LoginCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDokObjects1[k] = gdjs.LoginCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString((( gdjs.LoginCode.GDcodeObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDcodeObjects1[0].getText()));
}
{ //Subevents
gdjs.LoginCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDnameObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDnameObjects1[k] = gdjs.LoginCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDnameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "1101");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Amarela", runtimeScene.getScene().getVariables().getFromIndex(4), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Amarela", runtimeScene.getScene().getVariables().getFromIndex(14), runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDnameObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDnameObjects1[k] = gdjs.LoginCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDnameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "1202");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Azul", runtimeScene.getScene().getVariables().getFromIndex(5), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Azul", runtimeScene.getScene().getVariables().getFromIndex(14), runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDnameObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDnameObjects1[k] = gdjs.LoginCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDnameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "1303");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Castanha", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Castanha", runtimeScene.getScene().getVariables().getFromIndex(14), runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDnameObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDnameObjects1[k] = gdjs.LoginCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDnameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "1404");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Rosa", runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Rosa", runtimeScene.getScene().getVariables().getFromIndex(14), runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDnameObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDnameObjects1[k] = gdjs.LoginCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDnameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "1505");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Roxa", runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Roxa", runtimeScene.getScene().getVariables().getFromIndex(14), runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDnameObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDnameObjects1[k] = gdjs.LoginCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDnameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "1606");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Verde", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
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
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Verde", runtimeScene.getScene().getVariables().getFromIndex(14), runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDnameObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDnameObjects1[k] = gdjs.LoginCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDnameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "1707");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/AzulClara", runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "AzulClara", runtimeScene.getScene().getVariables().getFromIndex(14), runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDnameObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDnameObjects1[k] = gdjs.LoginCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDnameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "1808");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Vermelha", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(10));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Vermelha", runtimeScene.getScene().getVariables().getFromIndex(14), runtimeScene.getScene().getVariables().getFromIndex(10));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundo2"), gdjs.LoginCode.GDfundo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("loading_animation"), gdjs.LoginCode.GDloading_9595animationObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.LoginCode.GDokObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDokObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDokObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDfundo2Objects1.length ;i < len;++i) {
    gdjs.LoginCode.GDfundo2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDloading_9595animationObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDloading_9595animationObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.LoginCode.GDnameObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDnameObjects1[0].getText()));
}
{ //Subevents
gdjs.LoginCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") > 0.1;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 4;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoginCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 4;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(runtimeScene.getScene().getVariables().getFromIndex(13).getAsString());
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(runtimeScene.getScene().getVariables().getFromIndex(11).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Safeguard_app", false);
}
{ //Subevents
gdjs.LoginCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "1101");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "1202");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "1303");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "1404");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "1505");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "1606");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "1707");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "1808");
}
}
}
}
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.LoginCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.LoginCode.GDwrongObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("");
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setDisabled(true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setDisabled(true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDokObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDokObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDwrongObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "invalid");
}
{ //Subevents
gdjs.LoginCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.LoginCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDokObjects1[k] = gdjs.LoginCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDcodeObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDcodeObjects1[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDcodeObjects1[k] = gdjs.LoginCode.GDcodeObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDcodeObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LoginCode.GDcodeObjects1 */
gdjs.copyArray(runtimeScene.getObjects("empty"), gdjs.LoginCode.GDemptyObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
/* Reuse gdjs.LoginCode.GDokObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("");
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setDisabled(true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setDisabled(true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDokObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDokObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDemptyObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDemptyObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "invalid");
}
{ //Subevents
gdjs.LoginCode.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.LoginCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDokObjects1[k] = gdjs.LoginCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDnameObjects1[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDnameObjects1[k] = gdjs.LoginCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDnameObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoginCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "invalid") >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.LoginCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("empty"), gdjs.LoginCode.GDemptyObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.LoginCode.GDnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.LoginCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.LoginCode.GDwrongObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "invalid");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "invalid");
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDokObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDokObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcodeObjects1[i].setDisabled(false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDnameObjects1[i].setDisabled(false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LoginCode.GDemptyObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDemptyObjects1[i].hide();
}
}}

}


};

gdjs.LoginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoginCode.GDcodeObjects1.length = 0;
gdjs.LoginCode.GDcodeObjects2.length = 0;
gdjs.LoginCode.GDcodeObjects3.length = 0;
gdjs.LoginCode.GDokObjects1.length = 0;
gdjs.LoginCode.GDokObjects2.length = 0;
gdjs.LoginCode.GDokObjects3.length = 0;
gdjs.LoginCode.GDloading_9595animationObjects1.length = 0;
gdjs.LoginCode.GDloading_9595animationObjects2.length = 0;
gdjs.LoginCode.GDloading_9595animationObjects3.length = 0;
gdjs.LoginCode.GDfundoObjects1.length = 0;
gdjs.LoginCode.GDfundoObjects2.length = 0;
gdjs.LoginCode.GDfundoObjects3.length = 0;
gdjs.LoginCode.GDnameObjects1.length = 0;
gdjs.LoginCode.GDnameObjects2.length = 0;
gdjs.LoginCode.GDnameObjects3.length = 0;
gdjs.LoginCode.GDfundo2Objects1.length = 0;
gdjs.LoginCode.GDfundo2Objects2.length = 0;
gdjs.LoginCode.GDfundo2Objects3.length = 0;
gdjs.LoginCode.GDwrongObjects1.length = 0;
gdjs.LoginCode.GDwrongObjects2.length = 0;
gdjs.LoginCode.GDwrongObjects3.length = 0;
gdjs.LoginCode.GDemptyObjects1.length = 0;
gdjs.LoginCode.GDemptyObjects2.length = 0;
gdjs.LoginCode.GDemptyObjects3.length = 0;
gdjs.LoginCode.GDscoreObjects1.length = 0;
gdjs.LoginCode.GDscoreObjects2.length = 0;
gdjs.LoginCode.GDscoreObjects3.length = 0;
gdjs.LoginCode.GDnext_9595sceneObjects1.length = 0;
gdjs.LoginCode.GDnext_9595sceneObjects2.length = 0;
gdjs.LoginCode.GDnext_9595sceneObjects3.length = 0;
gdjs.LoginCode.GDURLObjects1.length = 0;
gdjs.LoginCode.GDURLObjects2.length = 0;
gdjs.LoginCode.GDURLObjects3.length = 0;
gdjs.LoginCode.GDfundopistagmObjects1.length = 0;
gdjs.LoginCode.GDfundopistagmObjects2.length = 0;
gdjs.LoginCode.GDfundopistagmObjects3.length = 0;
gdjs.LoginCode.GDpistagmObjects1.length = 0;
gdjs.LoginCode.GDpistagmObjects2.length = 0;
gdjs.LoginCode.GDpistagmObjects3.length = 0;
gdjs.LoginCode.GDdigitsObjects1.length = 0;
gdjs.LoginCode.GDdigitsObjects2.length = 0;
gdjs.LoginCode.GDdigitsObjects3.length = 0;
gdjs.LoginCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.LoginCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.LoginCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.LoginCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.LoginCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.LoginCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.LoginCode.GDgmapsObjects1.length = 0;
gdjs.LoginCode.GDgmapsObjects2.length = 0;
gdjs.LoginCode.GDgmapsObjects3.length = 0;

gdjs.LoginCode.eventsList8(runtimeScene);
gdjs.LoginCode.GDcodeObjects1.length = 0;
gdjs.LoginCode.GDcodeObjects2.length = 0;
gdjs.LoginCode.GDcodeObjects3.length = 0;
gdjs.LoginCode.GDokObjects1.length = 0;
gdjs.LoginCode.GDokObjects2.length = 0;
gdjs.LoginCode.GDokObjects3.length = 0;
gdjs.LoginCode.GDloading_9595animationObjects1.length = 0;
gdjs.LoginCode.GDloading_9595animationObjects2.length = 0;
gdjs.LoginCode.GDloading_9595animationObjects3.length = 0;
gdjs.LoginCode.GDfundoObjects1.length = 0;
gdjs.LoginCode.GDfundoObjects2.length = 0;
gdjs.LoginCode.GDfundoObjects3.length = 0;
gdjs.LoginCode.GDnameObjects1.length = 0;
gdjs.LoginCode.GDnameObjects2.length = 0;
gdjs.LoginCode.GDnameObjects3.length = 0;
gdjs.LoginCode.GDfundo2Objects1.length = 0;
gdjs.LoginCode.GDfundo2Objects2.length = 0;
gdjs.LoginCode.GDfundo2Objects3.length = 0;
gdjs.LoginCode.GDwrongObjects1.length = 0;
gdjs.LoginCode.GDwrongObjects2.length = 0;
gdjs.LoginCode.GDwrongObjects3.length = 0;
gdjs.LoginCode.GDemptyObjects1.length = 0;
gdjs.LoginCode.GDemptyObjects2.length = 0;
gdjs.LoginCode.GDemptyObjects3.length = 0;
gdjs.LoginCode.GDscoreObjects1.length = 0;
gdjs.LoginCode.GDscoreObjects2.length = 0;
gdjs.LoginCode.GDscoreObjects3.length = 0;
gdjs.LoginCode.GDnext_9595sceneObjects1.length = 0;
gdjs.LoginCode.GDnext_9595sceneObjects2.length = 0;
gdjs.LoginCode.GDnext_9595sceneObjects3.length = 0;
gdjs.LoginCode.GDURLObjects1.length = 0;
gdjs.LoginCode.GDURLObjects2.length = 0;
gdjs.LoginCode.GDURLObjects3.length = 0;
gdjs.LoginCode.GDfundopistagmObjects1.length = 0;
gdjs.LoginCode.GDfundopistagmObjects2.length = 0;
gdjs.LoginCode.GDfundopistagmObjects3.length = 0;
gdjs.LoginCode.GDpistagmObjects1.length = 0;
gdjs.LoginCode.GDpistagmObjects2.length = 0;
gdjs.LoginCode.GDpistagmObjects3.length = 0;
gdjs.LoginCode.GDdigitsObjects1.length = 0;
gdjs.LoginCode.GDdigitsObjects2.length = 0;
gdjs.LoginCode.GDdigitsObjects3.length = 0;
gdjs.LoginCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.LoginCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.LoginCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.LoginCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.LoginCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.LoginCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.LoginCode.GDgmapsObjects1.length = 0;
gdjs.LoginCode.GDgmapsObjects2.length = 0;
gdjs.LoginCode.GDgmapsObjects3.length = 0;


return;

}

gdjs['LoginCode'] = gdjs.LoginCode;
