gdjs.S_46_32Roque_32Cruzadas_322Code = {};
gdjs.S_46_32Roque_32Cruzadas_322Code.localVariables = [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1_1final = [];

gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1_1final = [];

gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects4= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects4= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects4= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects4= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects4= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects4= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDURLObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDURLObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDURLObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDURLObjects4= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects4= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects4= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects4= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDlocal_9595erradoObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDlocal_9595erradoObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDlocal_9595erradoObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDlocal_9595erradoObjects4= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDtask_9595confirmationObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDtask_9595confirmationObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDtask_9595confirmationObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDtask_9595confirmationObjects4= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDgmapsObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDgmapsObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDgmapsObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_322Code.GDgmapsObjects4= [];


gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17348780);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", runtimeScene.getScene().getVariables().getFromIndex(4).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.getField("Optional", "Easy", runtimeScene.getScene().getVariables().getFromIndex(10), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects2);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects2.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 4);
}
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17426468);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1, gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2);

{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", (( gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2.length === 0 ) ? "" :gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[0].getText()), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", runtimeScene.getScene().getVariables().getFromIndex(4).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17427668);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.asyncCallback17434396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.S_46_32Roque_32Cruzadas_322Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects3);

{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects3.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects3[i].setText("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}gdjs.S_46_32Roque_32Cruzadas_322Code.localVariables.length = 0;
}
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.S_46_32Roque_32Cruzadas_322Code.localVariables);
for (const obj of gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.S_46_32Roque_32Cruzadas_322Code.asyncCallback17434396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.asyncCallback17437324 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.S_46_32Roque_32Cruzadas_322Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2);

{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[i].setText("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}gdjs.S_46_32Roque_32Cruzadas_322Code.localVariables.length = 0;
}
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.S_46_32Roque_32Cruzadas_322Code.localVariables);
for (const obj of gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.S_46_32Roque_32Cruzadas_322Code.asyncCallback17437324(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17431524);
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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[i].setText("INCORRECTO");
}
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList3(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].setText("INCORRECT");
}
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1, gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects3);

{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects3.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects3[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1, gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2);

{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 12);
}
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "S. Pedro Alcantara Enigma");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1, gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2);

{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "S. Pedro Alcantara Enigma");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17445060);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1, gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2);

{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 4);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1 */
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 16);
}
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17447060);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "S. Pedro Alcantara Enigma");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1, gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2);

{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 4);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "S. Pedro Alcantara Enigma");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1, gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2);

{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 8);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1 */
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 20);
}
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17455020);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "S. Pedro Alcantara Enigma");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1, gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2);

{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 8);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "S. Pedro Alcantara Enigma");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17463092);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17467132);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17469700);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17473324);
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
gdjs.copyArray(gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1, gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2);

{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[i].setText("CORRECTO");
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
/* Reuse gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1 */
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].setText("CORRECT");
}
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17479260);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17486100);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17460836);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(7);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17465452);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(5);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17447260);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(3);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17480884);
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() < 2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() >= 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() < 4);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() >= 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() < 6);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList19(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() >= 6);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList20(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects1[0].getBehavior("Text").getText()), false);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11123972);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() == "BOMB DEACTIVATOR");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects2);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects2.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11135412);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11138148);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "LIDA", runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() == "BOMB DEACTIVATOR");
}
if (isConditionTrue_0) {
/* Reuse gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1 */
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[i].hide();
}
}}

}


};gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(8);
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects1[i].setString("S. Roque fim");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PADRE");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PRIEST");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PRÊTRE");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PADRE");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].getWidth())) / 2);
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber());
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "digits");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "digits");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scene_start") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber());
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects1[i].setString("00" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects1[i].setString("0" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 100);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "S. Pedro Alcantara Enigma");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "S. Pedro Alcantara Enigma");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].setPlaceholder("TOQUE PARA INSERIR");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].setPlaceholder("TOUCH TO ADD");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].setPlaceholder("TAP POUR INSERER");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].setPlaceholder("PULSE PARA INSERTAR");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].setText(gdjs.evtTools.string.toUpperCase((gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].getText())));
}
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


{



}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].getText() != runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].getText() != runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + " " ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length;i<l;++i) {
    if ( !((gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].getText()).includes(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString())) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "clue");
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList2(runtimeScene);} //End of subevents
}

}


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
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 5);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() >= 7);
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
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
/* Reuse gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1_1final.indexOf(gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2[j]) === -1 )
            gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1_1final.push(gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1_1final, gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "digits") > 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
/* Reuse gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "digits");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "digits");
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList14(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1);
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[i].getText() == runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1_1final.push(gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[i].getText() == runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + " " ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1_1final.push(gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2.length;i<l;++i) {
    if ( (gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[i].getText()).includes(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString()) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1_1final.push(gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1_1final, gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList15(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(9).getAsString() == gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().getFromIndex(9).setString("");
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList16(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList21(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(3).setString("");
}{runtimeScene.getGame().getVariables().getFromIndex(12).setString(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList22(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() == "BOMB DEACTIVATOR");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1[i].getBehavior("Animation").setAnimationIndex(4);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1[i].setFontName("JMH Typewriter-Thin.ttf");
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1[i].setColor("0;0;0");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "RECEBIDA", runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1[i].setWrappingWidth(535);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1[i].setY(575 - (gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList23(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1);
/* Reuse gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1 */
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setString("");
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList24(runtimeScene);} //End of subevents
}

}


};

gdjs.S_46_32Roque_32Cruzadas_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDURLObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDURLObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDURLObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDURLObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDlocal_9595erradoObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDlocal_9595erradoObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDlocal_9595erradoObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDlocal_9595erradoObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDtask_9595confirmationObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDtask_9595confirmationObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDtask_9595confirmationObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDtask_9595confirmationObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDgmapsObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDgmapsObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDgmapsObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDgmapsObjects4.length = 0;

gdjs.S_46_32Roque_32Cruzadas_322Code.eventsList25(runtimeScene);
gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDokObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundoObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDclueObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDanswerObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDscoreObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDnext_9595sceneObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDURLObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDURLObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDURLObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDURLObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDfundopistagmObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDpistagmObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDdigitsObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDlocal_9595erradoObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDlocal_9595erradoObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDlocal_9595erradoObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDlocal_9595erradoObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDtask_9595confirmationObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDtask_9595confirmationObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDtask_9595confirmationObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDtask_9595confirmationObjects4.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDgmapsObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDgmapsObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDgmapsObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_322Code.GDgmapsObjects4.length = 0;


return;

}

gdjs['S_46_32Roque_32Cruzadas_322Code'] = gdjs.S_46_32Roque_32Cruzadas_322Code;
