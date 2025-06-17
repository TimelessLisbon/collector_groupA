gdjs.GloriaCode = {};
gdjs.GloriaCode.localVariables = [];
gdjs.GloriaCode.GDanswerObjects1_1final = [];

gdjs.GloriaCode.GDclueObjects1_1final = [];

gdjs.GloriaCode.GDfundoObjects1= [];
gdjs.GloriaCode.GDfundoObjects2= [];
gdjs.GloriaCode.GDfundoObjects3= [];
gdjs.GloriaCode.GDanswerObjects1= [];
gdjs.GloriaCode.GDanswerObjects2= [];
gdjs.GloriaCode.GDanswerObjects3= [];
gdjs.GloriaCode.GDokObjects1= [];
gdjs.GloriaCode.GDokObjects2= [];
gdjs.GloriaCode.GDokObjects3= [];
gdjs.GloriaCode.GDclueObjects1= [];
gdjs.GloriaCode.GDclueObjects2= [];
gdjs.GloriaCode.GDclueObjects3= [];
gdjs.GloriaCode.GDstickersObjects1= [];
gdjs.GloriaCode.GDstickersObjects2= [];
gdjs.GloriaCode.GDstickersObjects3= [];
gdjs.GloriaCode.GDscoreObjects1= [];
gdjs.GloriaCode.GDscoreObjects2= [];
gdjs.GloriaCode.GDscoreObjects3= [];
gdjs.GloriaCode.GDnext_9595sceneObjects1= [];
gdjs.GloriaCode.GDnext_9595sceneObjects2= [];
gdjs.GloriaCode.GDnext_9595sceneObjects3= [];
gdjs.GloriaCode.GDURLObjects1= [];
gdjs.GloriaCode.GDURLObjects2= [];
gdjs.GloriaCode.GDURLObjects3= [];
gdjs.GloriaCode.GDfundopistagmObjects1= [];
gdjs.GloriaCode.GDfundopistagmObjects2= [];
gdjs.GloriaCode.GDfundopistagmObjects3= [];
gdjs.GloriaCode.GDpistagmObjects1= [];
gdjs.GloriaCode.GDpistagmObjects2= [];
gdjs.GloriaCode.GDpistagmObjects3= [];
gdjs.GloriaCode.GDdigitsObjects1= [];
gdjs.GloriaCode.GDdigitsObjects2= [];
gdjs.GloriaCode.GDdigitsObjects3= [];
gdjs.GloriaCode.GDlocal_9595erradoObjects1= [];
gdjs.GloriaCode.GDlocal_9595erradoObjects2= [];
gdjs.GloriaCode.GDlocal_9595erradoObjects3= [];
gdjs.GloriaCode.GDtask_9595confirmationObjects1= [];
gdjs.GloriaCode.GDtask_9595confirmationObjects2= [];
gdjs.GloriaCode.GDtask_9595confirmationObjects3= [];
gdjs.GloriaCode.GDgmapsObjects1= [];
gdjs.GloriaCode.GDgmapsObjects2= [];
gdjs.GloriaCode.GDgmapsObjects3= [];


gdjs.GloriaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16525212);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().getFromIndex(4), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().getFromIndex(5), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.getField("Leaderboard", "ID", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


};gdjs.GloriaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16544804);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


{



}


{



}


{



}


{



}


};gdjs.GloriaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16556332);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GloriaCode.GDanswerObjects1, gdjs.GloriaCode.GDanswerObjects2);

{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", (( gdjs.GloriaCode.GDanswerObjects2.length === 0 ) ? "" :gdjs.GloriaCode.GDanswerObjects2[0].getText()), runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))), runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16557748);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.GloriaCode.asyncCallback16560148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GloriaCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects3);

{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects3.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects3[i].setText("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}gdjs.GloriaCode.localVariables.length = 0;
}
gdjs.GloriaCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GloriaCode.localVariables);
for (const obj of gdjs.GloriaCode.GDanswerObjects2) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.GloriaCode.asyncCallback16560148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GloriaCode.asyncCallback16524764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GloriaCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects2);

{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects2[i].setText("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}gdjs.GloriaCode.localVariables.length = 0;
}
gdjs.GloriaCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GloriaCode.localVariables);
for (const obj of gdjs.GloriaCode.GDanswerObjects1) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.GloriaCode.asyncCallback16524764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GloriaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16560620);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects2);
{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects2[i].setText("INCORRECTO");
}
}
{ //Subevents
gdjs.GloriaCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].setText("INCORRECT");
}
}
{ //Subevents
gdjs.GloriaCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GloriaCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16531900);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.GloriaCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16539428);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.GloriaCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16540172);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.GloriaCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16548124);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.GloriaCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16518348);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GloriaCode.GDanswerObjects1, gdjs.GloriaCode.GDanswerObjects2);

{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects2[i].setText("CORRECTO");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GloriaCode.GDanswerObjects1 */
{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].setText("CORRECT");
}
}}

}


};gdjs.GloriaCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16499924);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.GloriaCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16484036);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}}

}


};gdjs.GloriaCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10022524);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(7);
}}

}


};gdjs.GloriaCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10024492);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(5);
}}

}


};gdjs.GloriaCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10026124);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(3);
}}

}


};gdjs.GloriaCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16484924);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GloriaCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 4);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GloriaCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 6);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GloriaCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 6);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GloriaCode.eventsList15(runtimeScene);} //End of subevents
}

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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].setText("");
}
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "QR_Code_reader");
}}

}


};gdjs.GloriaCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24616388);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


};gdjs.GloriaCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() == "BOMB DEACTIVATOR");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.GloriaCode.GDokObjects2);
{for(var i = 0, len = gdjs.GloriaCode.GDokObjects2.length ;i < len;++i) {
    gdjs.GloriaCode.GDokObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24626836);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 100, 1);
}}

}


};gdjs.GloriaCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24603364);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "LIDA", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() == "BOMB DEACTIVATOR");
}
if (isConditionTrue_0) {
/* Reuse gdjs.GloriaCode.GDokObjects1 */
{for(var i = 0, len = gdjs.GloriaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDokObjects1[i].hide();
}
}}

}


};gdjs.GloriaCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.GloriaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.GloriaCode.GDokObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(27);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber());
}{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.GloriaCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.GloriaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.GloriaCode.GDokObjects1[i].getWidth())) / 2);
}
}
{ //Subevents
gdjs.GloriaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(1));
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


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.GloriaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDscoreObjects1[i].setString("00" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.GloriaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDscoreObjects1[i].setString("0" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 100);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.GloriaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDscoreObjects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.GloriaCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("stickers"), gdjs.GloriaCode.GDstickersObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}{for(var i = 0, len = gdjs.GloriaCode.GDstickersObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDstickersObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(9).setString("BOMB");
}{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].setPlaceholder("TOQUE PARA INSERIR");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(9).setString("BOMB");
}{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].setPlaceholder("TOUCH TO ADD");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(9).setString("");
}{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].setPlaceholder("TAP POUR INSERER");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(9).setString("");
}{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].setPlaceholder("PULSE PARA INSERTAR");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].setText(gdjs.evtTools.string.toUpperCase((gdjs.GloriaCode.GDanswerObjects1[i].getText())));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.GloriaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("stickers"), gdjs.GloriaCode.GDstickersObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDstickersObjects1.length;i<l;++i) {
    if ( gdjs.GloriaCode.GDstickersObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GloriaCode.GDstickersObjects1[k] = gdjs.GloriaCode.GDstickersObjects1[i];
        ++k;
    }
}
gdjs.GloriaCode.GDstickersObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.GloriaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GloriaCode.GDokObjects1[k] = gdjs.GloriaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.GloriaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
/* Reuse gdjs.GloriaCode.GDstickersObjects1 */
{for(var i = 0, len = gdjs.GloriaCode.GDstickersObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDstickersObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.GloriaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.GloriaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.GloriaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.GloriaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("stickers"), gdjs.GloriaCode.GDstickersObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.GloriaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.GloriaCode.GDclueObjects1[k] = gdjs.GloriaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.GloriaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( !(gdjs.GloriaCode.GDfundopistagmObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.GloriaCode.GDfundopistagmObjects1[k] = gdjs.GloriaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.GloriaCode.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDstickersObjects1.length;i<l;++i) {
    if ( !(gdjs.GloriaCode.GDstickersObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.GloriaCode.GDstickersObjects1[k] = gdjs.GloriaCode.GDstickersObjects1[i];
        ++k;
    }
}
gdjs.GloriaCode.GDstickersObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.GloriaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GloriaCode.GDokObjects1[k] = gdjs.GloriaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.GloriaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.GloriaCode.GDanswerObjects1[i].getText() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(9)) ) {
        isConditionTrue_1 = true;
        gdjs.GloriaCode.GDanswerObjects1[k] = gdjs.GloriaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.GloriaCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.GloriaCode.GDanswerObjects1[i].getText() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(9)) + " " ) {
        isConditionTrue_1 = true;
        gdjs.GloriaCode.GDanswerObjects1[k] = gdjs.GloriaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.GloriaCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.GloriaCode.GDanswerObjects1[i].getText() != "" ) {
        isConditionTrue_1 = true;
        gdjs.GloriaCode.GDanswerObjects1[k] = gdjs.GloriaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.GloriaCode.GDanswerObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "clue");
}
{ //Subevents
gdjs.GloriaCode.eventsList2(runtimeScene);} //End of subevents
}

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
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 7);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GloriaCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.GloriaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GloriaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDclueObjects1[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}{for(var i = 0, len = gdjs.GloriaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.GloriaCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.GloriaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GloriaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDclueObjects1[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 4);
}
}{for(var i = 0, len = gdjs.GloriaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.GloriaCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.GloriaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GloriaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDclueObjects1[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 8);
}
}{for(var i = 0, len = gdjs.GloriaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.GloriaCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.GloriaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.GloriaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.GloriaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GloriaCode.GDclueObjects1[k] = gdjs.GloriaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.GloriaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.GloriaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GloriaCode.GDokObjects1[k] = gdjs.GloriaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.GloriaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
/* Reuse gdjs.GloriaCode.GDclueObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.GloriaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.GloriaCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.GloriaCode.GDclueObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GloriaCode.GDclueObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.GloriaCode.GDclueObjects2);
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDclueObjects2.length;i<l;++i) {
    if ( gdjs.GloriaCode.GDclueObjects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.GloriaCode.GDclueObjects2[k] = gdjs.GloriaCode.GDclueObjects2[i];
        ++k;
    }
}
gdjs.GloriaCode.GDclueObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GloriaCode.GDclueObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GloriaCode.GDclueObjects1_1final.indexOf(gdjs.GloriaCode.GDclueObjects2[j]) === -1 )
            gdjs.GloriaCode.GDclueObjects1_1final.push(gdjs.GloriaCode.GDclueObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GloriaCode.GDclueObjects1_1final, gdjs.GloriaCode.GDclueObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.GloriaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.GloriaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.GloriaCode.GDclueObjects1[k] = gdjs.GloriaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.GloriaCode.GDclueObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.GloriaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.GloriaCode.GDokObjects1);
gdjs.GloriaCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.GloriaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.GloriaCode.GDclueObjects1[k] = gdjs.GloriaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.GloriaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.GloriaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GloriaCode.GDokObjects1[k] = gdjs.GloriaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.GloriaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.GloriaCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.GloriaCode.GDanswerObjects2[i].getText() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(9)) ) {
        isConditionTrue_1 = true;
        gdjs.GloriaCode.GDanswerObjects2[k] = gdjs.GloriaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.GloriaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GloriaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GloriaCode.GDanswerObjects1_1final.indexOf(gdjs.GloriaCode.GDanswerObjects2[j]) === -1 )
            gdjs.GloriaCode.GDanswerObjects1_1final.push(gdjs.GloriaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.GloriaCode.GDanswerObjects2[i].getText() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(9)) + " " ) {
        isConditionTrue_1 = true;
        gdjs.GloriaCode.GDanswerObjects2[k] = gdjs.GloriaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.GloriaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GloriaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GloriaCode.GDanswerObjects1_1final.indexOf(gdjs.GloriaCode.GDanswerObjects2[j]) === -1 )
            gdjs.GloriaCode.GDanswerObjects1_1final.push(gdjs.GloriaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GloriaCode.GDanswerObjects1_1final, gdjs.GloriaCode.GDanswerObjects1);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{ //Subevents
gdjs.GloriaCode.eventsList10(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().getFromIndex(7).setString("");
}
{ //Subevents
gdjs.GloriaCode.eventsList11(runtimeScene);} //End of subevents
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
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsString() == gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
{ //Subevents
gdjs.GloriaCode.eventsList16(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.GloriaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.GloriaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GloriaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDpistagmObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(3).setString("");
}{runtimeScene.getGame().getVariables().getFromIndex(12).setString(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
{ //Subevents
gdjs.GloriaCode.eventsList17(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() != "BOMB DEACTIVATOR");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.GloriaCode.GDfundopistagmObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDfundopistagmObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() == "BOMB DEACTIVATOR");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.GloriaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.GloriaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDfundopistagmObjects1[i].getBehavior("Animation").setAnimationIndex(4);
}
}{for(var i = 0, len = gdjs.GloriaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDpistagmObjects1[i].setFontName("JMH Typewriter-Thin.ttf");
}
}{for(var i = 0, len = gdjs.GloriaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDpistagmObjects1[i].setColor("0;0;0");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "RECEBIDA", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.GloriaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.GloriaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDpistagmObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.GloriaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDpistagmObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.GloriaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDpistagmObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.GloriaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDpistagmObjects1[i].setWrappingWidth(535);
}
}{for(var i = 0, len = gdjs.GloriaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDpistagmObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.GloriaCode.GDpistagmObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.GloriaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDpistagmObjects1[i].setY(575 - (gdjs.GloriaCode.GDpistagmObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.GloriaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDfundopistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GloriaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDpistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.GloriaCode.eventsList18(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.GloriaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.GloriaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( gdjs.GloriaCode.GDfundopistagmObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GloriaCode.GDfundopistagmObjects1[k] = gdjs.GloriaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.GloriaCode.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GloriaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.GloriaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GloriaCode.GDokObjects1[k] = gdjs.GloriaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.GloriaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.GloriaCode.GDanswerObjects1);
/* Reuse gdjs.GloriaCode.GDfundopistagmObjects1 */
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.GloriaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.GloriaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GloriaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDpistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GloriaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.GloriaCode.GDanswerObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setString("");
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{ //Subevents
gdjs.GloriaCode.eventsList19(runtimeScene);} //End of subevents
}

}


};

gdjs.GloriaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GloriaCode.GDfundoObjects1.length = 0;
gdjs.GloriaCode.GDfundoObjects2.length = 0;
gdjs.GloriaCode.GDfundoObjects3.length = 0;
gdjs.GloriaCode.GDanswerObjects1.length = 0;
gdjs.GloriaCode.GDanswerObjects2.length = 0;
gdjs.GloriaCode.GDanswerObjects3.length = 0;
gdjs.GloriaCode.GDokObjects1.length = 0;
gdjs.GloriaCode.GDokObjects2.length = 0;
gdjs.GloriaCode.GDokObjects3.length = 0;
gdjs.GloriaCode.GDclueObjects1.length = 0;
gdjs.GloriaCode.GDclueObjects2.length = 0;
gdjs.GloriaCode.GDclueObjects3.length = 0;
gdjs.GloriaCode.GDstickersObjects1.length = 0;
gdjs.GloriaCode.GDstickersObjects2.length = 0;
gdjs.GloriaCode.GDstickersObjects3.length = 0;
gdjs.GloriaCode.GDscoreObjects1.length = 0;
gdjs.GloriaCode.GDscoreObjects2.length = 0;
gdjs.GloriaCode.GDscoreObjects3.length = 0;
gdjs.GloriaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.GloriaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.GloriaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.GloriaCode.GDURLObjects1.length = 0;
gdjs.GloriaCode.GDURLObjects2.length = 0;
gdjs.GloriaCode.GDURLObjects3.length = 0;
gdjs.GloriaCode.GDfundopistagmObjects1.length = 0;
gdjs.GloriaCode.GDfundopistagmObjects2.length = 0;
gdjs.GloriaCode.GDfundopistagmObjects3.length = 0;
gdjs.GloriaCode.GDpistagmObjects1.length = 0;
gdjs.GloriaCode.GDpistagmObjects2.length = 0;
gdjs.GloriaCode.GDpistagmObjects3.length = 0;
gdjs.GloriaCode.GDdigitsObjects1.length = 0;
gdjs.GloriaCode.GDdigitsObjects2.length = 0;
gdjs.GloriaCode.GDdigitsObjects3.length = 0;
gdjs.GloriaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.GloriaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.GloriaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.GloriaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.GloriaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.GloriaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.GloriaCode.GDgmapsObjects1.length = 0;
gdjs.GloriaCode.GDgmapsObjects2.length = 0;
gdjs.GloriaCode.GDgmapsObjects3.length = 0;

gdjs.GloriaCode.eventsList20(runtimeScene);
gdjs.GloriaCode.GDfundoObjects1.length = 0;
gdjs.GloriaCode.GDfundoObjects2.length = 0;
gdjs.GloriaCode.GDfundoObjects3.length = 0;
gdjs.GloriaCode.GDanswerObjects1.length = 0;
gdjs.GloriaCode.GDanswerObjects2.length = 0;
gdjs.GloriaCode.GDanswerObjects3.length = 0;
gdjs.GloriaCode.GDokObjects1.length = 0;
gdjs.GloriaCode.GDokObjects2.length = 0;
gdjs.GloriaCode.GDokObjects3.length = 0;
gdjs.GloriaCode.GDclueObjects1.length = 0;
gdjs.GloriaCode.GDclueObjects2.length = 0;
gdjs.GloriaCode.GDclueObjects3.length = 0;
gdjs.GloriaCode.GDstickersObjects1.length = 0;
gdjs.GloriaCode.GDstickersObjects2.length = 0;
gdjs.GloriaCode.GDstickersObjects3.length = 0;
gdjs.GloriaCode.GDscoreObjects1.length = 0;
gdjs.GloriaCode.GDscoreObjects2.length = 0;
gdjs.GloriaCode.GDscoreObjects3.length = 0;
gdjs.GloriaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.GloriaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.GloriaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.GloriaCode.GDURLObjects1.length = 0;
gdjs.GloriaCode.GDURLObjects2.length = 0;
gdjs.GloriaCode.GDURLObjects3.length = 0;
gdjs.GloriaCode.GDfundopistagmObjects1.length = 0;
gdjs.GloriaCode.GDfundopistagmObjects2.length = 0;
gdjs.GloriaCode.GDfundopistagmObjects3.length = 0;
gdjs.GloriaCode.GDpistagmObjects1.length = 0;
gdjs.GloriaCode.GDpistagmObjects2.length = 0;
gdjs.GloriaCode.GDpistagmObjects3.length = 0;
gdjs.GloriaCode.GDdigitsObjects1.length = 0;
gdjs.GloriaCode.GDdigitsObjects2.length = 0;
gdjs.GloriaCode.GDdigitsObjects3.length = 0;
gdjs.GloriaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.GloriaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.GloriaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.GloriaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.GloriaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.GloriaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.GloriaCode.GDgmapsObjects1.length = 0;
gdjs.GloriaCode.GDgmapsObjects2.length = 0;
gdjs.GloriaCode.GDgmapsObjects3.length = 0;


return;

}

gdjs['GloriaCode'] = gdjs.GloriaCode;
