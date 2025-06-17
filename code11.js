gdjs.Percurso_32GinjaCode = {};
gdjs.Percurso_32GinjaCode.localVariables = [];
gdjs.Percurso_32GinjaCode.GDGMObjects1_1final = [];

gdjs.Percurso_32GinjaCode.GDgmapsObjects1_1final = [];

gdjs.Percurso_32GinjaCode.GDpercursoObjects1_1final = [];

gdjs.Percurso_32GinjaCode.GDnoObjects1= [];
gdjs.Percurso_32GinjaCode.GDnoObjects2= [];
gdjs.Percurso_32GinjaCode.GDnoObjects3= [];
gdjs.Percurso_32GinjaCode.GDyesObjects1= [];
gdjs.Percurso_32GinjaCode.GDyesObjects2= [];
gdjs.Percurso_32GinjaCode.GDyesObjects3= [];
gdjs.Percurso_32GinjaCode.GDpercursoObjects1= [];
gdjs.Percurso_32GinjaCode.GDpercursoObjects2= [];
gdjs.Percurso_32GinjaCode.GDpercursoObjects3= [];
gdjs.Percurso_32GinjaCode.GDGMObjects1= [];
gdjs.Percurso_32GinjaCode.GDGMObjects2= [];
gdjs.Percurso_32GinjaCode.GDGMObjects3= [];
gdjs.Percurso_32GinjaCode.GDscoreObjects1= [];
gdjs.Percurso_32GinjaCode.GDscoreObjects2= [];
gdjs.Percurso_32GinjaCode.GDscoreObjects3= [];
gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects1= [];
gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects2= [];
gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects3= [];
gdjs.Percurso_32GinjaCode.GDURLObjects1= [];
gdjs.Percurso_32GinjaCode.GDURLObjects2= [];
gdjs.Percurso_32GinjaCode.GDURLObjects3= [];
gdjs.Percurso_32GinjaCode.GDfundopistagmObjects1= [];
gdjs.Percurso_32GinjaCode.GDfundopistagmObjects2= [];
gdjs.Percurso_32GinjaCode.GDfundopistagmObjects3= [];
gdjs.Percurso_32GinjaCode.GDpistagmObjects1= [];
gdjs.Percurso_32GinjaCode.GDpistagmObjects2= [];
gdjs.Percurso_32GinjaCode.GDpistagmObjects3= [];
gdjs.Percurso_32GinjaCode.GDdigitsObjects1= [];
gdjs.Percurso_32GinjaCode.GDdigitsObjects2= [];
gdjs.Percurso_32GinjaCode.GDdigitsObjects3= [];
gdjs.Percurso_32GinjaCode.GDlocal_9595erradoObjects1= [];
gdjs.Percurso_32GinjaCode.GDlocal_9595erradoObjects2= [];
gdjs.Percurso_32GinjaCode.GDlocal_9595erradoObjects3= [];
gdjs.Percurso_32GinjaCode.GDtask_9595confirmationObjects1= [];
gdjs.Percurso_32GinjaCode.GDtask_9595confirmationObjects2= [];
gdjs.Percurso_32GinjaCode.GDtask_9595confirmationObjects3= [];
gdjs.Percurso_32GinjaCode.GDgmapsObjects1= [];
gdjs.Percurso_32GinjaCode.GDgmapsObjects2= [];
gdjs.Percurso_32GinjaCode.GDgmapsObjects3= [];


gdjs.Percurso_32GinjaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24919988);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().getFromIndex(6));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(6));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(6));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(6));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(6));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(6));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "notification-140376.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 0, 1);
}}

}


};gdjs.Percurso_32GinjaCode.userFunc0x1656b38 = function GDJSInlineCode(runtimeScene) {
"use strict";
var myVar = runtimeScene.getVariables().get("Longitude");
function geoFindMe() {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        myVar.setNumber(`${longitude}`);
    }

    function error(error) {
        myVar.setString("unable to retrieve your location" + error.code + error.message);
    }

    if (!navigator.geolocation) {
        myVar.setString('Geolocation is not supported by your browser');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

}
geoFindMe();
};
gdjs.Percurso_32GinjaCode.userFunc0x1651ce0 = function GDJSInlineCode(runtimeScene) {
"use strict";
var myVar = runtimeScene.getVariables().get("Latitude");
function geoFindMe() {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        myVar.setNumber(`${latitude}`);
    }

    function error(error) {
        myVar.setString("unable to retrieve your location" + error.code + error.message);
    }

    if (!navigator.geolocation) {
        myVar.setString('Geolocation is not supported by your browser');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

}
geoFindMe();
};
gdjs.Percurso_32GinjaCode.mapOfGDgdjs_9546Percurso_959532GinjaCode_9546GDpercursoObjects2Objects = Hashtable.newFrom({"percurso": gdjs.Percurso_32GinjaCode.GDpercursoObjects2});
gdjs.Percurso_32GinjaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24936956);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "notification-140376.mp3", false, 100, 1);
}}

}


};gdjs.Percurso_32GinjaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24901452);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32GinjaCode.GDgmapsObjects1);
/* Reuse gdjs.Percurso_32GinjaCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32GinjaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDgmapsObjects1[i].hide();
}
}}

}


};gdjs.Percurso_32GinjaCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9483820);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32GinjaCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32GinjaCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32GinjaCode.GDnoObjects1);
/* Reuse gdjs.Percurso_32GinjaCode.GDyesObjects1 */
{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDgmapsObjects1[i].hide();
}
}{gdjs.evtTools.window.openURL((( gdjs.Percurso_32GinjaCode.GDURLObjects1.length === 0 ) ? "" :gdjs.Percurso_32GinjaCode.GDURLObjects1[0].getString()), runtimeScene);
}}

}


};gdjs.Percurso_32GinjaCode.eventsList4 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9495804);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(6));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects1[0].getBehavior("Text").getText()), false);
}}

}


};gdjs.Percurso_32GinjaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32GinjaCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(32);
}{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects1[i].setString("Ginja Enigma");
}
}{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDURLObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDURLObjects1[i].setString("https://www.google.com/maps/place/Ginginha+do+Carmo/@38.7134461,-9.1432708,17z/data=!3m2!4b1!5s0xd193380a8575e83:0x4755a932a1b21dc7!4m6!3m5!1s0xd193380a899e875:0x29995a7999bbfe6f!8m2!3d38.7134419!4d-9.1406959!16s%2Fg%2F1tflhh9r?entry=ttu");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(38.7130);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(38.7138);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(-(9.1402));
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(-(9.1410));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32GinjaCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32GinjaCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32GinjaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32GinjaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDgmapsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDURLObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDURLObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "desvio");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
}
{ //Subevents
gdjs.Percurso_32GinjaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber());
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().getFromIndex(10), runtimeScene.getScene().getVariables().getFromIndex(6));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(6));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scene_start") >= 2;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() != "TESTE");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GM"), gdjs.Percurso_32GinjaCode.GDGMObjects1);
{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDGMObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDGMObjects1[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32GinjaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDscoreObjects1[i].setString("00" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32GinjaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDscoreObjects1[i].setString("0" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 100);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32GinjaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDscoreObjects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "Percurso Bica");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("percurso"), gdjs.Percurso_32GinjaCode.GDpercursoObjects1);
{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDpercursoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDpercursoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32GinjaCode.GDgmapsObjects1);
{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDgmapsObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32GinjaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32GinjaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDyesObjects1[i].SetLabelText("SIM", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDnoObjects1[i].SetLabelText("NÃO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32GinjaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32GinjaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDyesObjects1[i].SetLabelText("YES", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDnoObjects1[i].SetLabelText("NO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32GinjaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32GinjaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDyesObjects1[i].SetLabelText("OUI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDnoObjects1[i].SetLabelText("NON", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32GinjaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32GinjaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDyesObjects1[i].SetLabelText("SI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDnoObjects1[i].SetLabelText("NO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


gdjs.Percurso_32GinjaCode.userFunc0x1656b38(runtimeScene);

}


{


gdjs.Percurso_32GinjaCode.userFunc0x1651ce0(runtimeScene);

}


{



}


{

gdjs.Percurso_32GinjaCode.GDgmapsObjects1.length = 0;

gdjs.Percurso_32GinjaCode.GDpercursoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Percurso_32GinjaCode.GDgmapsObjects1_1final.length = 0;
gdjs.Percurso_32GinjaCode.GDpercursoObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32GinjaCode.GDgmapsObjects2);
gdjs.copyArray(runtimeScene.getObjects("percurso"), gdjs.Percurso_32GinjaCode.GDpercursoObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32GinjaCode.GDgmapsObjects2.length;i<l;++i) {
    if ( !(gdjs.Percurso_32GinjaCode.GDgmapsObjects2[i].isVisible()) ) {
        isConditionTrue_2 = true;
        gdjs.Percurso_32GinjaCode.GDgmapsObjects2[k] = gdjs.Percurso_32GinjaCode.GDgmapsObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32GinjaCode.GDgmapsObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.cursorOnObject(gdjs.Percurso_32GinjaCode.mapOfGDgdjs_9546Percurso_959532GinjaCode_9546GDpercursoObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Percurso_32GinjaCode.GDgmapsObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32GinjaCode.GDgmapsObjects1_1final.indexOf(gdjs.Percurso_32GinjaCode.GDgmapsObjects2[j]) === -1 )
            gdjs.Percurso_32GinjaCode.GDgmapsObjects1_1final.push(gdjs.Percurso_32GinjaCode.GDgmapsObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Percurso_32GinjaCode.GDpercursoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32GinjaCode.GDpercursoObjects1_1final.indexOf(gdjs.Percurso_32GinjaCode.GDpercursoObjects2[j]) === -1 )
            gdjs.Percurso_32GinjaCode.GDpercursoObjects1_1final.push(gdjs.Percurso_32GinjaCode.GDpercursoObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "maps") >= 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Percurso_32GinjaCode.GDgmapsObjects1_1final, gdjs.Percurso_32GinjaCode.GDgmapsObjects1);
gdjs.copyArray(gdjs.Percurso_32GinjaCode.GDpercursoObjects1_1final, gdjs.Percurso_32GinjaCode.GDpercursoObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "maps2");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "maps2") >= 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32GinjaCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32GinjaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32GinjaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Percurso_32GinjaCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32GinjaCode.GDgmapsObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Percurso_32GinjaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32GinjaCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32GinjaCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32GinjaCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32GinjaCode.GDnoObjects1[k] = gdjs.Percurso_32GinjaCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32GinjaCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32GinjaCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32GinjaCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32GinjaCode.GDnoObjects1[k] = gdjs.Percurso_32GinjaCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32GinjaCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps2");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
}
{ //Subevents
gdjs.Percurso_32GinjaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32GinjaCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32GinjaCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32GinjaCode.GDyesObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32GinjaCode.GDyesObjects1[k] = gdjs.Percurso_32GinjaCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32GinjaCode.GDyesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32GinjaCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32GinjaCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32GinjaCode.GDyesObjects1[k] = gdjs.Percurso_32GinjaCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32GinjaCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps2");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
}
{ //Subevents
gdjs.Percurso_32GinjaCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Percurso_32GinjaCode.GDGMObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Percurso_32GinjaCode.GDGMObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("GM"), gdjs.Percurso_32GinjaCode.GDGMObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32GinjaCode.GDGMObjects2.length;i<l;++i) {
    if ( gdjs.Percurso_32GinjaCode.GDGMObjects2[i].isVisible() ) {
        isConditionTrue_2 = true;
        gdjs.Percurso_32GinjaCode.GDGMObjects2[k] = gdjs.Percurso_32GinjaCode.GDGMObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32GinjaCode.GDGMObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32GinjaCode.GDGMObjects2.length;i<l;++i) {
    if ( gdjs.Percurso_32GinjaCode.GDGMObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.Percurso_32GinjaCode.GDGMObjects2[k] = gdjs.Percurso_32GinjaCode.GDGMObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32GinjaCode.GDGMObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Percurso_32GinjaCode.GDGMObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32GinjaCode.GDGMObjects1_1final.indexOf(gdjs.Percurso_32GinjaCode.GDGMObjects2[j]) === -1 )
            gdjs.Percurso_32GinjaCode.GDGMObjects1_1final.push(gdjs.Percurso_32GinjaCode.GDGMObjects2[j]);
    }
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsString() == gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Percurso_32GinjaCode.GDGMObjects1_1final, gdjs.Percurso_32GinjaCode.GDGMObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().getFromIndex(10).setString("");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
{ //Subevents
gdjs.Percurso_32GinjaCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.Percurso_32GinjaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Percurso_32GinjaCode.GDnoObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDnoObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDnoObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDyesObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDyesObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDyesObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDpercursoObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDpercursoObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDpercursoObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDGMObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDGMObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDGMObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDscoreObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDscoreObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDscoreObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDURLObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDURLObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDURLObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDfundopistagmObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDfundopistagmObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDfundopistagmObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDpistagmObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDpistagmObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDpistagmObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDdigitsObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDdigitsObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDdigitsObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDgmapsObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDgmapsObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDgmapsObjects3.length = 0;

gdjs.Percurso_32GinjaCode.eventsList5(runtimeScene);
gdjs.Percurso_32GinjaCode.GDnoObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDnoObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDnoObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDyesObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDyesObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDyesObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDpercursoObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDpercursoObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDpercursoObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDGMObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDGMObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDGMObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDscoreObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDscoreObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDscoreObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDURLObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDURLObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDURLObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDfundopistagmObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDfundopistagmObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDfundopistagmObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDpistagmObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDpistagmObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDpistagmObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDdigitsObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDdigitsObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDdigitsObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Percurso_32GinjaCode.GDgmapsObjects1.length = 0;
gdjs.Percurso_32GinjaCode.GDgmapsObjects2.length = 0;
gdjs.Percurso_32GinjaCode.GDgmapsObjects3.length = 0;


return;

}

gdjs['Percurso_32GinjaCode'] = gdjs.Percurso_32GinjaCode;
