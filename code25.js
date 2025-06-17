gdjs.Sta_32CatarinaCode = {};
gdjs.Sta_32CatarinaCode.localVariables = [];
gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final = [];

gdjs.Sta_32CatarinaCode.GDclueObjects1_1final = [];

gdjs.Sta_32CatarinaCode.GDokObjects1= [];
gdjs.Sta_32CatarinaCode.GDokObjects2= [];
gdjs.Sta_32CatarinaCode.GDokObjects3= [];
gdjs.Sta_32CatarinaCode.GDokObjects4= [];
gdjs.Sta_32CatarinaCode.GDfundoObjects1= [];
gdjs.Sta_32CatarinaCode.GDfundoObjects2= [];
gdjs.Sta_32CatarinaCode.GDfundoObjects3= [];
gdjs.Sta_32CatarinaCode.GDfundoObjects4= [];
gdjs.Sta_32CatarinaCode.GDclueObjects1= [];
gdjs.Sta_32CatarinaCode.GDclueObjects2= [];
gdjs.Sta_32CatarinaCode.GDclueObjects3= [];
gdjs.Sta_32CatarinaCode.GDclueObjects4= [];
gdjs.Sta_32CatarinaCode.GDanswerObjects1= [];
gdjs.Sta_32CatarinaCode.GDanswerObjects2= [];
gdjs.Sta_32CatarinaCode.GDanswerObjects3= [];
gdjs.Sta_32CatarinaCode.GDanswerObjects4= [];
gdjs.Sta_32CatarinaCode.GDscoreObjects1= [];
gdjs.Sta_32CatarinaCode.GDscoreObjects2= [];
gdjs.Sta_32CatarinaCode.GDscoreObjects3= [];
gdjs.Sta_32CatarinaCode.GDscoreObjects4= [];
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1= [];
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects2= [];
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects3= [];
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects4= [];
gdjs.Sta_32CatarinaCode.GDURLObjects1= [];
gdjs.Sta_32CatarinaCode.GDURLObjects2= [];
gdjs.Sta_32CatarinaCode.GDURLObjects3= [];
gdjs.Sta_32CatarinaCode.GDURLObjects4= [];
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1= [];
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects2= [];
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects3= [];
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects4= [];
gdjs.Sta_32CatarinaCode.GDpistagmObjects1= [];
gdjs.Sta_32CatarinaCode.GDpistagmObjects2= [];
gdjs.Sta_32CatarinaCode.GDpistagmObjects3= [];
gdjs.Sta_32CatarinaCode.GDpistagmObjects4= [];
gdjs.Sta_32CatarinaCode.GDdigitsObjects1= [];
gdjs.Sta_32CatarinaCode.GDdigitsObjects2= [];
gdjs.Sta_32CatarinaCode.GDdigitsObjects3= [];
gdjs.Sta_32CatarinaCode.GDdigitsObjects4= [];
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects1= [];
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects2= [];
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects3= [];
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects4= [];
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects1= [];
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects2= [];
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects3= [];
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects4= [];
gdjs.Sta_32CatarinaCode.GDgmapsObjects1= [];
gdjs.Sta_32CatarinaCode.GDgmapsObjects2= [];
gdjs.Sta_32CatarinaCode.GDgmapsObjects3= [];
gdjs.Sta_32CatarinaCode.GDgmapsObjects4= [];


gdjs.Sta_32CatarinaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17503188);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().getFromIndex(5), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.getField("Optional", "Easy", runtimeScene.getScene().getVariables().getFromIndex(10), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Sta_32CatarinaCode.GDfundoObjects2);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDfundoObjects2.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDfundoObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Sta_32CatarinaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 4);
}
}}

}


};gdjs.Sta_32CatarinaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17461252);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Sta_32CatarinaCode.GDanswerObjects1, gdjs.Sta_32CatarinaCode.GDanswerObjects2);

{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", (( gdjs.Sta_32CatarinaCode.GDanswerObjects2.length === 0 ) ? "" :gdjs.Sta_32CatarinaCode.GDanswerObjects2[0].getText()), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(4));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17509388);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32CatarinaCode.asyncCallback17479732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Sta_32CatarinaCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects3);

{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects3.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects3[i].setText("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}gdjs.Sta_32CatarinaCode.localVariables.length = 0;
}
gdjs.Sta_32CatarinaCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Sta_32CatarinaCode.localVariables);
for (const obj of gdjs.Sta_32CatarinaCode.GDanswerObjects2) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Sta_32CatarinaCode.asyncCallback17479732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Sta_32CatarinaCode.asyncCallback17504124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Sta_32CatarinaCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects2);

{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects2[i].setText("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}gdjs.Sta_32CatarinaCode.localVariables.length = 0;
}
gdjs.Sta_32CatarinaCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Sta_32CatarinaCode.localVariables);
for (const obj of gdjs.Sta_32CatarinaCode.GDanswerObjects1) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Sta_32CatarinaCode.asyncCallback17504124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Sta_32CatarinaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17497028);
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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects2);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects2[i].setText("INCORRECTO");
}
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList3(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setText("INCORRECT");
}
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Sta_32CatarinaCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Sta_32CatarinaCode.GDclueObjects1, gdjs.Sta_32CatarinaCode.GDclueObjects3);

{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects3.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects3[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Sta_32CatarinaCode.GDclueObjects1, gdjs.Sta_32CatarinaCode.GDclueObjects2);

{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects2.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 12);
}
}}

}


};gdjs.Sta_32CatarinaCode.eventsList7 = function(runtimeScene) {

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
gdjs.copyArray(gdjs.Sta_32CatarinaCode.GDclueObjects1, gdjs.Sta_32CatarinaCode.GDclueObjects2);

{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects2.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
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
gdjs.Sta_32CatarinaCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24563316);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Sta_32CatarinaCode.GDclueObjects1, gdjs.Sta_32CatarinaCode.GDclueObjects2);

{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects2.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 4);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sta_32CatarinaCode.GDclueObjects1 */
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects1[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 16);
}
}}

}


};gdjs.Sta_32CatarinaCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24565524);
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
gdjs.copyArray(gdjs.Sta_32CatarinaCode.GDclueObjects1, gdjs.Sta_32CatarinaCode.GDclueObjects2);

{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects2.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 4);
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
gdjs.Sta_32CatarinaCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Sta_32CatarinaCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Sta_32CatarinaCode.GDclueObjects1, gdjs.Sta_32CatarinaCode.GDclueObjects2);

{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects2.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 8);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sta_32CatarinaCode.GDclueObjects1 */
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects1[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 20);
}
}}

}


};gdjs.Sta_32CatarinaCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24574852);
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
gdjs.copyArray(gdjs.Sta_32CatarinaCode.GDclueObjects1, gdjs.Sta_32CatarinaCode.GDclueObjects2);

{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects2.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 8);
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
gdjs.Sta_32CatarinaCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Sta_32CatarinaCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24584084);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24588108);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24590676);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24594324);
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
gdjs.copyArray(gdjs.Sta_32CatarinaCode.GDanswerObjects1, gdjs.Sta_32CatarinaCode.GDanswerObjects2);

{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects2[i].setText("CORRECTO");
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
/* Reuse gdjs.Sta_32CatarinaCode.GDanswerObjects1 */
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setText("CORRECT");
}
}}

}


};gdjs.Sta_32CatarinaCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24600260);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24607364);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24609004);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(7);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24610516);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(5);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24611884);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(3);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24601972);
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(4));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 4);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 6);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList19(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 6);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList20(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1[0].getBehavior("Text").getText()), false);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24616388);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(4));
}}

}


};gdjs.Sta_32CatarinaCode.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() == "BOMB DEACTIVATOR");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32CatarinaCode.GDokObjects2);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDokObjects2.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDokObjects2[i].hide(false);
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


};gdjs.Sta_32CatarinaCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24603364);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "LIDA", runtimeScene.getScene().getVariables().getFromIndex(4));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() == "BOMB DEACTIVATOR");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sta_32CatarinaCode.GDokObjects1 */
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDokObjects1[i].hide();
}
}}

}


};gdjs.Sta_32CatarinaCode.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(36);
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1[i].setString("Sta Catarina Fim");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("DRAMA");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.Sta_32CatarinaCode.GDdigitsObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32CatarinaCode.GDokObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDdigitsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Sta_32CatarinaCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber());
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "digits");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "digits");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(4));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(4));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Sta_32CatarinaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDscoreObjects1[i].setString("00" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Sta_32CatarinaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDscoreObjects1[i].setString("0" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 100);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Sta_32CatarinaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDscoreObjects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
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
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Sta_32CatarinaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
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
gdjs.Sta_32CatarinaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setPlaceholder("TOQUE PARA INSERIR");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setPlaceholder("TOUCH TO ADD");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setPlaceholder("TAP POUR INSERER");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setPlaceholder("PULSE PARA INSERTAR");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setText(gdjs.evtTools.string.toUpperCase((gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].getText())));
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

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32CatarinaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Sta_32CatarinaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDclueObjects1[k] = gdjs.Sta_32CatarinaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( !(gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[k] = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDokObjects1[k] = gdjs.Sta_32CatarinaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].getText() != runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() ) {
        isConditionTrue_1 = true;
        gdjs.Sta_32CatarinaCode.GDanswerObjects1[k] = gdjs.Sta_32CatarinaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].getText() != runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + " " ) {
        isConditionTrue_1 = true;
        gdjs.Sta_32CatarinaCode.GDanswerObjects1[k] = gdjs.Sta_32CatarinaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length;i<l;++i) {
    if ( !((gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].getText()).includes(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString())) ) {
        isConditionTrue_1 = true;
        gdjs.Sta_32CatarinaCode.GDanswerObjects1[k] = gdjs.Sta_32CatarinaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDanswerObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "clue");
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList2(runtimeScene);} //End of subevents
}

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
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 5);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 7);
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
gdjs.Sta_32CatarinaCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32CatarinaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDclueObjects1[k] = gdjs.Sta_32CatarinaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDokObjects1[k] = gdjs.Sta_32CatarinaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
/* Reuse gdjs.Sta_32CatarinaCode.GDclueObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.Sta_32CatarinaCode.GDclueObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Sta_32CatarinaCode.GDclueObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects2);
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDclueObjects2.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDclueObjects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.Sta_32CatarinaCode.GDclueObjects2[k] = gdjs.Sta_32CatarinaCode.GDclueObjects2[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDclueObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Sta_32CatarinaCode.GDclueObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Sta_32CatarinaCode.GDclueObjects1_1final.indexOf(gdjs.Sta_32CatarinaCode.GDclueObjects2[j]) === -1 )
            gdjs.Sta_32CatarinaCode.GDclueObjects1_1final.push(gdjs.Sta_32CatarinaCode.GDclueObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Sta_32CatarinaCode.GDclueObjects1_1final, gdjs.Sta_32CatarinaCode.GDclueObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Sta_32CatarinaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.Sta_32CatarinaCode.GDclueObjects1[k] = gdjs.Sta_32CatarinaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDclueObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "digits") > 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.Sta_32CatarinaCode.GDdigitsObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDdigitsObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.Sta_32CatarinaCode.GDdigitsObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32CatarinaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDdigitsObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDdigitsObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDdigitsObjects1[k] = gdjs.Sta_32CatarinaCode.GDdigitsObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDdigitsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDokObjects1[k] = gdjs.Sta_32CatarinaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
/* Reuse gdjs.Sta_32CatarinaCode.GDdigitsObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "digits");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "digits");
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDdigitsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList14(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32CatarinaCode.GDokObjects1);
gdjs.Sta_32CatarinaCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Sta_32CatarinaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDclueObjects1[k] = gdjs.Sta_32CatarinaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDokObjects1[k] = gdjs.Sta_32CatarinaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDanswerObjects2[i].getText() == runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() ) {
        isConditionTrue_1 = true;
        gdjs.Sta_32CatarinaCode.GDanswerObjects2[k] = gdjs.Sta_32CatarinaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final.indexOf(gdjs.Sta_32CatarinaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final.push(gdjs.Sta_32CatarinaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDanswerObjects2[i].getText() == runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + " " ) {
        isConditionTrue_1 = true;
        gdjs.Sta_32CatarinaCode.GDanswerObjects2[k] = gdjs.Sta_32CatarinaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final.indexOf(gdjs.Sta_32CatarinaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final.push(gdjs.Sta_32CatarinaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length;i<l;++i) {
    if ( (gdjs.Sta_32CatarinaCode.GDanswerObjects2[i].getText()).includes(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString()) ) {
        isConditionTrue_1 = true;
        gdjs.Sta_32CatarinaCode.GDanswerObjects2[k] = gdjs.Sta_32CatarinaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final.indexOf(gdjs.Sta_32CatarinaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final.push(gdjs.Sta_32CatarinaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final, gdjs.Sta_32CatarinaCode.GDanswerObjects1);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList15(runtimeScene);} //End of subevents
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
gdjs.Sta_32CatarinaCode.eventsList16(runtimeScene);} //End of subevents
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
gdjs.Sta_32CatarinaCode.eventsList21(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Sta_32CatarinaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(3).setString("");
}{runtimeScene.getGame().getVariables().getFromIndex(12).setString(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList22(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() == "BOMB DEACTIVATOR");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Sta_32CatarinaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i].getBehavior("Animation").setAnimationIndex(4);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].setFontName("JMH Typewriter-Thin.ttf");
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].setColor("0;0;0");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(4));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(1);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "RECEBIDA", runtimeScene.getScene().getVariables().getFromIndex(4));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Sta_32CatarinaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].setWrappingWidth(535);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].setY(575 - (gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList23(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32CatarinaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[k] = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDokObjects1[k] = gdjs.Sta_32CatarinaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
/* Reuse gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1 */
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Sta_32CatarinaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setString("");
}{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(0);
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList24(runtimeScene);} //End of subevents
}

}


};

gdjs.Sta_32CatarinaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sta_32CatarinaCode.GDokObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDokObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDokObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDokObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDfundoObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDfundoObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDfundoObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDfundoObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDclueObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDclueObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDclueObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDclueObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDanswerObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDanswerObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDanswerObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDanswerObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDscoreObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDscoreObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDscoreObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDscoreObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDURLObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDURLObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDURLObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDURLObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDpistagmObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDpistagmObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDpistagmObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDdigitsObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDdigitsObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDdigitsObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDdigitsObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDgmapsObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDgmapsObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDgmapsObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDgmapsObjects4.length = 0;

gdjs.Sta_32CatarinaCode.eventsList25(runtimeScene);
gdjs.Sta_32CatarinaCode.GDokObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDokObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDokObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDokObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDfundoObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDfundoObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDfundoObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDfundoObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDclueObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDclueObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDclueObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDclueObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDanswerObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDanswerObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDanswerObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDanswerObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDscoreObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDscoreObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDscoreObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDscoreObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDURLObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDURLObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDURLObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDURLObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDpistagmObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDpistagmObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDpistagmObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDdigitsObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDdigitsObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDdigitsObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDdigitsObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects4.length = 0;
gdjs.Sta_32CatarinaCode.GDgmapsObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDgmapsObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDgmapsObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDgmapsObjects4.length = 0;


return;

}

gdjs['Sta_32CatarinaCode'] = gdjs.Sta_32CatarinaCode;
