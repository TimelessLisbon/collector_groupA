gdjs.MonopolyCode = {};
gdjs.MonopolyCode.localVariables = [];
gdjs.MonopolyCode.GDanswerObjects1_1final = [];

gdjs.MonopolyCode.GDokObjects1= [];
gdjs.MonopolyCode.GDokObjects2= [];
gdjs.MonopolyCode.GDokObjects3= [];
gdjs.MonopolyCode.GDfundoObjects1= [];
gdjs.MonopolyCode.GDfundoObjects2= [];
gdjs.MonopolyCode.GDfundoObjects3= [];
gdjs.MonopolyCode.GDanswerObjects1= [];
gdjs.MonopolyCode.GDanswerObjects2= [];
gdjs.MonopolyCode.GDanswerObjects3= [];
gdjs.MonopolyCode.GDwrongObjects1= [];
gdjs.MonopolyCode.GDwrongObjects2= [];
gdjs.MonopolyCode.GDwrongObjects3= [];
gdjs.MonopolyCode.GDscoreObjects1= [];
gdjs.MonopolyCode.GDscoreObjects2= [];
gdjs.MonopolyCode.GDscoreObjects3= [];
gdjs.MonopolyCode.GDnext_9595sceneObjects1= [];
gdjs.MonopolyCode.GDnext_9595sceneObjects2= [];
gdjs.MonopolyCode.GDnext_9595sceneObjects3= [];
gdjs.MonopolyCode.GDURLObjects1= [];
gdjs.MonopolyCode.GDURLObjects2= [];
gdjs.MonopolyCode.GDURLObjects3= [];
gdjs.MonopolyCode.GDfundopistagmObjects1= [];
gdjs.MonopolyCode.GDfundopistagmObjects2= [];
gdjs.MonopolyCode.GDfundopistagmObjects3= [];
gdjs.MonopolyCode.GDpistagmObjects1= [];
gdjs.MonopolyCode.GDpistagmObjects2= [];
gdjs.MonopolyCode.GDpistagmObjects3= [];
gdjs.MonopolyCode.GDdigitsObjects1= [];
gdjs.MonopolyCode.GDdigitsObjects2= [];
gdjs.MonopolyCode.GDdigitsObjects3= [];
gdjs.MonopolyCode.GDlocal_9595erradoObjects1= [];
gdjs.MonopolyCode.GDlocal_9595erradoObjects2= [];
gdjs.MonopolyCode.GDlocal_9595erradoObjects3= [];
gdjs.MonopolyCode.GDtask_9595confirmationObjects1= [];
gdjs.MonopolyCode.GDtask_9595confirmationObjects2= [];
gdjs.MonopolyCode.GDtask_9595confirmationObjects3= [];
gdjs.MonopolyCode.GDgmapsObjects1= [];
gdjs.MonopolyCode.GDgmapsObjects2= [];
gdjs.MonopolyCode.GDgmapsObjects3= [];


gdjs.MonopolyCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(31075308);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}}

}


};gdjs.MonopolyCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(31046692);
}
if (isConditionTrue_0) {
/* Reuse gdjs.MonopolyCode.GDanswerObjects1 */
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", (( gdjs.MonopolyCode.GDanswerObjects1.length === 0 ) ? "" :gdjs.MonopolyCode.GDanswerObjects1[0].getText()), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.MonopolyCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(30928084);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.MonopolyCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(31197820);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.MonopolyCode.eventsList4 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(31136636);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.MonopolyCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.MonopolyCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.MonopolyCode.GDnext_9595sceneObjects1[0].getBehavior("Text").getText()), false);
}}

}


};gdjs.MonopolyCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.MonopolyCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(39);
}{for(var i = 0, len = gdjs.MonopolyCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDnext_9595sceneObjects1[i].setString("Percurso Gloria");
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
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("COLLECTED");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.MonopolyCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.MonopolyCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.MonopolyCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.MonopolyCode.GDokObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.MonopolyCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.MonopolyCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.MonopolyCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.MonopolyCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDwrongObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "wrong");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}
{ //Subevents
gdjs.MonopolyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber());
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scene_start") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.MonopolyCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.MonopolyCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDanswerObjects1[i].setText(gdjs.evtTools.string.toUpperCase((gdjs.MonopolyCode.GDanswerObjects1[i].getText())));
}
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.MonopolyCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.MonopolyCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDscoreObjects1[i].setString("00" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.MonopolyCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.MonopolyCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDscoreObjects1[i].setString("0" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 100);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.MonopolyCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.MonopolyCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDscoreObjects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.MonopolyCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.MonopolyCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.MonopolyCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}{for(var i = 0, len = gdjs.MonopolyCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDwrongObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.MonopolyCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.MonopolyCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDanswerObjects1[i].setPlaceholder("TOQUE PARA INSERIR");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.MonopolyCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.MonopolyCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDanswerObjects1[i].setPlaceholder("TOUCH TO ADD");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.MonopolyCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.MonopolyCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDanswerObjects1[i].setPlaceholder("TAP POUR INSERER");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.MonopolyCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.MonopolyCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDanswerObjects1[i].setPlaceholder("PULSE PARA INSERTAR");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.MonopolyCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.MonopolyCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.MonopolyCode.GDwrongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MonopolyCode.GDwrongObjects1.length;i<l;++i) {
    if ( !(gdjs.MonopolyCode.GDwrongObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.MonopolyCode.GDwrongObjects1[k] = gdjs.MonopolyCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.MonopolyCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MonopolyCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.MonopolyCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MonopolyCode.GDokObjects1[k] = gdjs.MonopolyCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.MonopolyCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.MonopolyCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.MonopolyCode.GDanswerObjects1[i].getText() != runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() ) {
        isConditionTrue_1 = true;
        gdjs.MonopolyCode.GDanswerObjects1[k] = gdjs.MonopolyCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.MonopolyCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.MonopolyCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.MonopolyCode.GDanswerObjects1[i].getText() != runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() + " " ) {
        isConditionTrue_1 = true;
        gdjs.MonopolyCode.GDanswerObjects1[k] = gdjs.MonopolyCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.MonopolyCode.GDanswerObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "wrong");
}
{ //Subevents
gdjs.MonopolyCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wrong") >= 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.MonopolyCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.MonopolyCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.MonopolyCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MonopolyCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MonopolyCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDanswerObjects1[i].setText("");
}
}
{ //Subevents
gdjs.MonopolyCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wrong") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.MonopolyCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.MonopolyCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.MonopolyCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MonopolyCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDanswerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MonopolyCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.MonopolyCode.GDanswerObjects1[i].setDisabled(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "wrong");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "wrong");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.MonopolyCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.MonopolyCode.GDwrongObjects1);
gdjs.MonopolyCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MonopolyCode.GDwrongObjects1.length;i<l;++i) {
    if ( !(gdjs.MonopolyCode.GDwrongObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.MonopolyCode.GDwrongObjects1[k] = gdjs.MonopolyCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.MonopolyCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MonopolyCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.MonopolyCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MonopolyCode.GDokObjects1[k] = gdjs.MonopolyCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.MonopolyCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.MonopolyCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.MonopolyCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.MonopolyCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.MonopolyCode.GDanswerObjects2[i].getText() == runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() ) {
        isConditionTrue_1 = true;
        gdjs.MonopolyCode.GDanswerObjects2[k] = gdjs.MonopolyCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.MonopolyCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MonopolyCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MonopolyCode.GDanswerObjects1_1final.indexOf(gdjs.MonopolyCode.GDanswerObjects2[j]) === -1 )
            gdjs.MonopolyCode.GDanswerObjects1_1final.push(gdjs.MonopolyCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.MonopolyCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.MonopolyCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.MonopolyCode.GDanswerObjects2[i].getText() == runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() + " " ) {
        isConditionTrue_1 = true;
        gdjs.MonopolyCode.GDanswerObjects2[k] = gdjs.MonopolyCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.MonopolyCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MonopolyCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MonopolyCode.GDanswerObjects1_1final.indexOf(gdjs.MonopolyCode.GDanswerObjects2[j]) === -1 )
            gdjs.MonopolyCode.GDanswerObjects1_1final.push(gdjs.MonopolyCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MonopolyCode.GDanswerObjects1_1final, gdjs.MonopolyCode.GDanswerObjects1);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.MonopolyCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsString() == gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().getFromIndex(8).setString("");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(2);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
{ //Subevents
gdjs.MonopolyCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.MonopolyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MonopolyCode.GDokObjects1.length = 0;
gdjs.MonopolyCode.GDokObjects2.length = 0;
gdjs.MonopolyCode.GDokObjects3.length = 0;
gdjs.MonopolyCode.GDfundoObjects1.length = 0;
gdjs.MonopolyCode.GDfundoObjects2.length = 0;
gdjs.MonopolyCode.GDfundoObjects3.length = 0;
gdjs.MonopolyCode.GDanswerObjects1.length = 0;
gdjs.MonopolyCode.GDanswerObjects2.length = 0;
gdjs.MonopolyCode.GDanswerObjects3.length = 0;
gdjs.MonopolyCode.GDwrongObjects1.length = 0;
gdjs.MonopolyCode.GDwrongObjects2.length = 0;
gdjs.MonopolyCode.GDwrongObjects3.length = 0;
gdjs.MonopolyCode.GDscoreObjects1.length = 0;
gdjs.MonopolyCode.GDscoreObjects2.length = 0;
gdjs.MonopolyCode.GDscoreObjects3.length = 0;
gdjs.MonopolyCode.GDnext_9595sceneObjects1.length = 0;
gdjs.MonopolyCode.GDnext_9595sceneObjects2.length = 0;
gdjs.MonopolyCode.GDnext_9595sceneObjects3.length = 0;
gdjs.MonopolyCode.GDURLObjects1.length = 0;
gdjs.MonopolyCode.GDURLObjects2.length = 0;
gdjs.MonopolyCode.GDURLObjects3.length = 0;
gdjs.MonopolyCode.GDfundopistagmObjects1.length = 0;
gdjs.MonopolyCode.GDfundopistagmObjects2.length = 0;
gdjs.MonopolyCode.GDfundopistagmObjects3.length = 0;
gdjs.MonopolyCode.GDpistagmObjects1.length = 0;
gdjs.MonopolyCode.GDpistagmObjects2.length = 0;
gdjs.MonopolyCode.GDpistagmObjects3.length = 0;
gdjs.MonopolyCode.GDdigitsObjects1.length = 0;
gdjs.MonopolyCode.GDdigitsObjects2.length = 0;
gdjs.MonopolyCode.GDdigitsObjects3.length = 0;
gdjs.MonopolyCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.MonopolyCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.MonopolyCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.MonopolyCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.MonopolyCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.MonopolyCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.MonopolyCode.GDgmapsObjects1.length = 0;
gdjs.MonopolyCode.GDgmapsObjects2.length = 0;
gdjs.MonopolyCode.GDgmapsObjects3.length = 0;

gdjs.MonopolyCode.eventsList5(runtimeScene);
gdjs.MonopolyCode.GDokObjects1.length = 0;
gdjs.MonopolyCode.GDokObjects2.length = 0;
gdjs.MonopolyCode.GDokObjects3.length = 0;
gdjs.MonopolyCode.GDfundoObjects1.length = 0;
gdjs.MonopolyCode.GDfundoObjects2.length = 0;
gdjs.MonopolyCode.GDfundoObjects3.length = 0;
gdjs.MonopolyCode.GDanswerObjects1.length = 0;
gdjs.MonopolyCode.GDanswerObjects2.length = 0;
gdjs.MonopolyCode.GDanswerObjects3.length = 0;
gdjs.MonopolyCode.GDwrongObjects1.length = 0;
gdjs.MonopolyCode.GDwrongObjects2.length = 0;
gdjs.MonopolyCode.GDwrongObjects3.length = 0;
gdjs.MonopolyCode.GDscoreObjects1.length = 0;
gdjs.MonopolyCode.GDscoreObjects2.length = 0;
gdjs.MonopolyCode.GDscoreObjects3.length = 0;
gdjs.MonopolyCode.GDnext_9595sceneObjects1.length = 0;
gdjs.MonopolyCode.GDnext_9595sceneObjects2.length = 0;
gdjs.MonopolyCode.GDnext_9595sceneObjects3.length = 0;
gdjs.MonopolyCode.GDURLObjects1.length = 0;
gdjs.MonopolyCode.GDURLObjects2.length = 0;
gdjs.MonopolyCode.GDURLObjects3.length = 0;
gdjs.MonopolyCode.GDfundopistagmObjects1.length = 0;
gdjs.MonopolyCode.GDfundopistagmObjects2.length = 0;
gdjs.MonopolyCode.GDfundopistagmObjects3.length = 0;
gdjs.MonopolyCode.GDpistagmObjects1.length = 0;
gdjs.MonopolyCode.GDpistagmObjects2.length = 0;
gdjs.MonopolyCode.GDpistagmObjects3.length = 0;
gdjs.MonopolyCode.GDdigitsObjects1.length = 0;
gdjs.MonopolyCode.GDdigitsObjects2.length = 0;
gdjs.MonopolyCode.GDdigitsObjects3.length = 0;
gdjs.MonopolyCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.MonopolyCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.MonopolyCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.MonopolyCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.MonopolyCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.MonopolyCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.MonopolyCode.GDgmapsObjects1.length = 0;
gdjs.MonopolyCode.GDgmapsObjects2.length = 0;
gdjs.MonopolyCode.GDgmapsObjects3.length = 0;


return;

}

gdjs['MonopolyCode'] = gdjs.MonopolyCode;
