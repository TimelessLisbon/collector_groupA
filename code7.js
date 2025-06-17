gdjs.S_46_32Roque_32EntradaCode = {};
gdjs.S_46_32Roque_32EntradaCode.localVariables = [];
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final = [];

gdjs.S_46_32Roque_32EntradaCode.GDokObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDokObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDokObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundopistagmObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundopistagmObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundopistagmObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDpistagmObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDpistagmObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDpistagmObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDdigitsObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDdigitsObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDdigitsObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDlocal_9595erradoObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDlocal_9595erradoObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDlocal_9595erradoObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDtask_9595confirmationObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDtask_9595confirmationObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDtask_9595confirmationObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDgmapsObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDgmapsObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDgmapsObjects3= [];


gdjs.S_46_32Roque_32EntradaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10130364);
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


};gdjs.S_46_32Roque_32EntradaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10150436);
}
if (isConditionTrue_0) {
/* Reuse gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1 */
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", (( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length === 0 ) ? "" :gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[0].getText()), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10153020);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10157556);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList4 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10164188);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1[0].getBehavior("Text").getText()), false);
}}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.S_46_32Roque_32EntradaCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(6);
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1[i].setString("S. Roque Cruzadas 1");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(38.7136);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(38.7128);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(-(9.1429));
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(-(9.1437));
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDURLObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDURLObjects1[i].setString("https://maps.app.goo.gl/7wDsvTcmSeEGfkA96");
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
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("CRUZADAS");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("CROSSWORDS");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("CROISÉS");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("CRUCIGRAMAS");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32EntradaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "wrong");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}
{ //Subevents
gdjs.S_46_32Roque_32EntradaCode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setText(gdjs.evtTools.string.toUpperCase((gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].getText())));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1[i].setString("00" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1[i].setString("0" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 100);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setPlaceholder("TOQUE PARA INSERIR");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setPlaceholder("TOUCH TO ADD");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setPlaceholder("TAP POUR INSERER");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setPlaceholder("PULSE PARA INSERTAR");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32EntradaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].getText() != runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].getText() != runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() + " " ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "wrong");
}
{ //Subevents
gdjs.S_46_32Roque_32EntradaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wrong") >= 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setText("");
}
}
{ //Subevents
gdjs.S_46_32Roque_32EntradaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wrong") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setDisabled(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "wrong");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "wrong");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32EntradaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[i].getText() == runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[k] = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final.push(gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[i].getText() == runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() + " " ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[k] = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final.push(gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final, gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32Roque_32EntradaCode.eventsList3(runtimeScene);} //End of subevents
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
gdjs.S_46_32Roque_32EntradaCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.S_46_32Roque_32EntradaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDokObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDokObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundopistagmObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundopistagmObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundopistagmObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDpistagmObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDpistagmObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDpistagmObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDdigitsObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDdigitsObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDdigitsObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDgmapsObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDgmapsObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDgmapsObjects3.length = 0;

gdjs.S_46_32Roque_32EntradaCode.eventsList5(runtimeScene);
gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDokObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDokObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundopistagmObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundopistagmObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundopistagmObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDpistagmObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDpistagmObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDpistagmObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDdigitsObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDdigitsObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDdigitsObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDgmapsObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDgmapsObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDgmapsObjects3.length = 0;


return;

}

gdjs['S_46_32Roque_32EntradaCode'] = gdjs.S_46_32Roque_32EntradaCode;
