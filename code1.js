gdjs.LanguageCode = {};
gdjs.LanguageCode.localVariables = [];
gdjs.LanguageCode.GDfundoObjects1= [];
gdjs.LanguageCode.GDfundoObjects2= [];
gdjs.LanguageCode.GDfundoObjects3= [];
gdjs.LanguageCode.GDportuguesObjects1= [];
gdjs.LanguageCode.GDportuguesObjects2= [];
gdjs.LanguageCode.GDportuguesObjects3= [];
gdjs.LanguageCode.GDinglesObjects1= [];
gdjs.LanguageCode.GDinglesObjects2= [];
gdjs.LanguageCode.GDinglesObjects3= [];
gdjs.LanguageCode.GDfrancesObjects1= [];
gdjs.LanguageCode.GDfrancesObjects2= [];
gdjs.LanguageCode.GDfrancesObjects3= [];
gdjs.LanguageCode.GDespanholObjects1= [];
gdjs.LanguageCode.GDespanholObjects2= [];
gdjs.LanguageCode.GDespanholObjects3= [];
gdjs.LanguageCode.GDfundo_9595limpoObjects1= [];
gdjs.LanguageCode.GDfundo_9595limpoObjects2= [];
gdjs.LanguageCode.GDfundo_9595limpoObjects3= [];
gdjs.LanguageCode.GDconfirmacaoObjects1= [];
gdjs.LanguageCode.GDconfirmacaoObjects2= [];
gdjs.LanguageCode.GDconfirmacaoObjects3= [];
gdjs.LanguageCode.GDyesObjects1= [];
gdjs.LanguageCode.GDyesObjects2= [];
gdjs.LanguageCode.GDyesObjects3= [];
gdjs.LanguageCode.GDnoObjects1= [];
gdjs.LanguageCode.GDnoObjects2= [];
gdjs.LanguageCode.GDnoObjects3= [];
gdjs.LanguageCode.GDscoreObjects1= [];
gdjs.LanguageCode.GDscoreObjects2= [];
gdjs.LanguageCode.GDscoreObjects3= [];
gdjs.LanguageCode.GDnext_9595sceneObjects1= [];
gdjs.LanguageCode.GDnext_9595sceneObjects2= [];
gdjs.LanguageCode.GDnext_9595sceneObjects3= [];
gdjs.LanguageCode.GDURLObjects1= [];
gdjs.LanguageCode.GDURLObjects2= [];
gdjs.LanguageCode.GDURLObjects3= [];
gdjs.LanguageCode.GDfundopistagmObjects1= [];
gdjs.LanguageCode.GDfundopistagmObjects2= [];
gdjs.LanguageCode.GDfundopistagmObjects3= [];
gdjs.LanguageCode.GDpistagmObjects1= [];
gdjs.LanguageCode.GDpistagmObjects2= [];
gdjs.LanguageCode.GDpistagmObjects3= [];
gdjs.LanguageCode.GDdigitsObjects1= [];
gdjs.LanguageCode.GDdigitsObjects2= [];
gdjs.LanguageCode.GDdigitsObjects3= [];
gdjs.LanguageCode.GDlocal_9595erradoObjects1= [];
gdjs.LanguageCode.GDlocal_9595erradoObjects2= [];
gdjs.LanguageCode.GDlocal_9595erradoObjects3= [];
gdjs.LanguageCode.GDtask_9595confirmationObjects1= [];
gdjs.LanguageCode.GDtask_9595confirmationObjects2= [];
gdjs.LanguageCode.GDtask_9595confirmationObjects3= [];
gdjs.LanguageCode.GDgmapsObjects1= [];
gdjs.LanguageCode.GDgmapsObjects2= [];
gdjs.LanguageCode.GDgmapsObjects3= [];


gdjs.LanguageCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9782708);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "notification-140376.mp3", false, 0, 1);
}}

}


};gdjs.LanguageCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9786460);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.LanguageCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9788868);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.LanguageCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9791172);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.LanguageCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9793628);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.LanguageCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.LanguageCode.GDnoObjects2);
gdjs.copyArray(gdjs.LanguageCode.GDyesObjects1, gdjs.LanguageCode.GDyesObjects2);

{for(var i = 0, len = gdjs.LanguageCode.GDyesObjects2.length ;i < len;++i) {
    gdjs.LanguageCode.GDyesObjects2[i].SetLabelText("SIM", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LanguageCode.GDnoObjects2.length ;i < len;++i) {
    gdjs.LanguageCode.GDnoObjects2[i].SetLabelText("NÃO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LanguageCode.GDyesObjects2.length ;i < len;++i) {
    gdjs.LanguageCode.GDyesObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.LanguageCode.GDnoObjects2.length ;i < len;++i) {
    gdjs.LanguageCode.GDnoObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.LanguageCode.GDnoObjects2);
gdjs.copyArray(gdjs.LanguageCode.GDyesObjects1, gdjs.LanguageCode.GDyesObjects2);

{for(var i = 0, len = gdjs.LanguageCode.GDyesObjects2.length ;i < len;++i) {
    gdjs.LanguageCode.GDyesObjects2[i].SetLabelText("YES", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LanguageCode.GDnoObjects2.length ;i < len;++i) {
    gdjs.LanguageCode.GDnoObjects2[i].SetLabelText("NO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LanguageCode.GDyesObjects2.length ;i < len;++i) {
    gdjs.LanguageCode.GDyesObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.LanguageCode.GDnoObjects2.length ;i < len;++i) {
    gdjs.LanguageCode.GDnoObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.LanguageCode.GDnoObjects2);
gdjs.copyArray(gdjs.LanguageCode.GDyesObjects1, gdjs.LanguageCode.GDyesObjects2);

{for(var i = 0, len = gdjs.LanguageCode.GDyesObjects2.length ;i < len;++i) {
    gdjs.LanguageCode.GDyesObjects2[i].SetLabelText("OUI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LanguageCode.GDnoObjects2.length ;i < len;++i) {
    gdjs.LanguageCode.GDnoObjects2[i].SetLabelText("NON", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LanguageCode.GDyesObjects2.length ;i < len;++i) {
    gdjs.LanguageCode.GDyesObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.LanguageCode.GDnoObjects2.length ;i < len;++i) {
    gdjs.LanguageCode.GDnoObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.LanguageCode.GDnoObjects2);
gdjs.copyArray(gdjs.LanguageCode.GDyesObjects1, gdjs.LanguageCode.GDyesObjects2);

{for(var i = 0, len = gdjs.LanguageCode.GDyesObjects2.length ;i < len;++i) {
    gdjs.LanguageCode.GDyesObjects2[i].SetLabelText("SI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LanguageCode.GDnoObjects2.length ;i < len;++i) {
    gdjs.LanguageCode.GDnoObjects2[i].SetLabelText("NO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LanguageCode.GDyesObjects2.length ;i < len;++i) {
    gdjs.LanguageCode.GDyesObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.LanguageCode.GDnoObjects2.length ;i < len;++i) {
    gdjs.LanguageCode.GDnoObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9750364);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "notification-140376.mp3", false, 100, 1);
}}

}


};gdjs.LanguageCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9740044);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.LanguageCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9728716);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.LanguageCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("confirmacao"), gdjs.LanguageCode.GDconfirmacaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.LanguageCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.LanguageCode.GDyesObjects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "nextscene");
}{for(var i = 0, len = gdjs.LanguageCode.GDconfirmacaoObjects1.length ;i < len;++i) {
    gdjs.LanguageCode.GDconfirmacaoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LanguageCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.LanguageCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LanguageCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.LanguageCode.GDnoObjects1[i].hide();
}
}
{ //Subevents
gdjs.LanguageCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("confirmacao"), gdjs.LanguageCode.GDconfirmacaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("portugues"), gdjs.LanguageCode.GDportuguesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LanguageCode.GDconfirmacaoObjects1.length;i<l;++i) {
    if ( !(gdjs.LanguageCode.GDconfirmacaoObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.LanguageCode.GDconfirmacaoObjects1[k] = gdjs.LanguageCode.GDconfirmacaoObjects1[i];
        ++k;
    }
}
gdjs.LanguageCode.GDconfirmacaoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LanguageCode.GDportuguesObjects1.length;i<l;++i) {
    if ( gdjs.LanguageCode.GDportuguesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LanguageCode.GDportuguesObjects1[k] = gdjs.LanguageCode.GDportuguesObjects1[i];
        ++k;
    }
}
gdjs.LanguageCode.GDportuguesObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "nextscene");
}
{ //Subevents
gdjs.LanguageCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("confirmacao"), gdjs.LanguageCode.GDconfirmacaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ingles"), gdjs.LanguageCode.GDinglesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LanguageCode.GDconfirmacaoObjects1.length;i<l;++i) {
    if ( !(gdjs.LanguageCode.GDconfirmacaoObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.LanguageCode.GDconfirmacaoObjects1[k] = gdjs.LanguageCode.GDconfirmacaoObjects1[i];
        ++k;
    }
}
gdjs.LanguageCode.GDconfirmacaoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LanguageCode.GDinglesObjects1.length;i<l;++i) {
    if ( gdjs.LanguageCode.GDinglesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LanguageCode.GDinglesObjects1[k] = gdjs.LanguageCode.GDinglesObjects1[i];
        ++k;
    }
}
gdjs.LanguageCode.GDinglesObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "nextscene");
}
{ //Subevents
gdjs.LanguageCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("confirmacao"), gdjs.LanguageCode.GDconfirmacaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("frances"), gdjs.LanguageCode.GDfrancesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LanguageCode.GDconfirmacaoObjects1.length;i<l;++i) {
    if ( !(gdjs.LanguageCode.GDconfirmacaoObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.LanguageCode.GDconfirmacaoObjects1[k] = gdjs.LanguageCode.GDconfirmacaoObjects1[i];
        ++k;
    }
}
gdjs.LanguageCode.GDconfirmacaoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LanguageCode.GDfrancesObjects1.length;i<l;++i) {
    if ( gdjs.LanguageCode.GDfrancesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LanguageCode.GDfrancesObjects1[k] = gdjs.LanguageCode.GDfrancesObjects1[i];
        ++k;
    }
}
gdjs.LanguageCode.GDfrancesObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(2);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "nextscene");
}
{ //Subevents
gdjs.LanguageCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("confirmacao"), gdjs.LanguageCode.GDconfirmacaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("espanhol"), gdjs.LanguageCode.GDespanholObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LanguageCode.GDconfirmacaoObjects1.length;i<l;++i) {
    if ( !(gdjs.LanguageCode.GDconfirmacaoObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.LanguageCode.GDconfirmacaoObjects1[k] = gdjs.LanguageCode.GDconfirmacaoObjects1[i];
        ++k;
    }
}
gdjs.LanguageCode.GDconfirmacaoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LanguageCode.GDespanholObjects1.length;i<l;++i) {
    if ( gdjs.LanguageCode.GDespanholObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LanguageCode.GDespanholObjects1[k] = gdjs.LanguageCode.GDespanholObjects1[i];
        ++k;
    }
}
gdjs.LanguageCode.GDespanholObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(3);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "nextscene");
}
{ //Subevents
gdjs.LanguageCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.LanguageCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LanguageCode.GDyesObjects1.length;i<l;++i) {
    if ( !(gdjs.LanguageCode.GDyesObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.LanguageCode.GDyesObjects1[k] = gdjs.LanguageCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.LanguageCode.GDyesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "nextscene") >= 0.1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "nextscene") < 0.2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("confirmacao"), gdjs.LanguageCode.GDconfirmacaoObjects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "nextscene");
}{for(var i = 0, len = gdjs.LanguageCode.GDconfirmacaoObjects1.length ;i < len;++i) {
    gdjs.LanguageCode.GDconfirmacaoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}{for(var i = 0, len = gdjs.LanguageCode.GDconfirmacaoObjects1.length ;i < len;++i) {
    gdjs.LanguageCode.GDconfirmacaoObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.LanguageCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("confirmacao"), gdjs.LanguageCode.GDconfirmacaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.LanguageCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LanguageCode.GDconfirmacaoObjects1.length;i<l;++i) {
    if ( gdjs.LanguageCode.GDconfirmacaoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.LanguageCode.GDconfirmacaoObjects1[k] = gdjs.LanguageCode.GDconfirmacaoObjects1[i];
        ++k;
    }
}
gdjs.LanguageCode.GDconfirmacaoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LanguageCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.LanguageCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LanguageCode.GDyesObjects1[k] = gdjs.LanguageCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.LanguageCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "nextscene");
}
{ //Subevents
gdjs.LanguageCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("confirmacao"), gdjs.LanguageCode.GDconfirmacaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.LanguageCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LanguageCode.GDconfirmacaoObjects1.length;i<l;++i) {
    if ( gdjs.LanguageCode.GDconfirmacaoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.LanguageCode.GDconfirmacaoObjects1[k] = gdjs.LanguageCode.GDconfirmacaoObjects1[i];
        ++k;
    }
}
gdjs.LanguageCode.GDconfirmacaoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LanguageCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.LanguageCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LanguageCode.GDnoObjects1[k] = gdjs.LanguageCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.LanguageCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LanguageCode.GDconfirmacaoObjects1 */
/* Reuse gdjs.LanguageCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.LanguageCode.GDyesObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "nextscene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "nextscene");
}{for(var i = 0, len = gdjs.LanguageCode.GDconfirmacaoObjects1.length ;i < len;++i) {
    gdjs.LanguageCode.GDconfirmacaoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LanguageCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.LanguageCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LanguageCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.LanguageCode.GDnoObjects1[i].hide();
}
}
{ //Subevents
gdjs.LanguageCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "nextscene") >= 0.2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("confirmacao"), gdjs.LanguageCode.GDconfirmacaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.LanguageCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.LanguageCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.LanguageCode.GDfundoObjects1[i].getBehavior("Opacity").setOpacity(gdjs.LanguageCode.GDfundoObjects1[i].getBehavior("Opacity").getOpacity() - (gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "nextscene") * 13));
}
}{for(var i = 0, len = gdjs.LanguageCode.GDconfirmacaoObjects1.length ;i < len;++i) {
    gdjs.LanguageCode.GDconfirmacaoObjects1[i].getBehavior("Opacity").setOpacity(gdjs.LanguageCode.GDconfirmacaoObjects1[i].getBehavior("Opacity").getOpacity() - (gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "nextscene") * 13));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "nextscene") >= 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("espanhol"), gdjs.LanguageCode.GDespanholObjects1);
gdjs.copyArray(runtimeScene.getObjects("frances"), gdjs.LanguageCode.GDfrancesObjects1);
gdjs.copyArray(runtimeScene.getObjects("ingles"), gdjs.LanguageCode.GDinglesObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.LanguageCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("portugues"), gdjs.LanguageCode.GDportuguesObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.LanguageCode.GDyesObjects1);
{for(var i = 0, len = gdjs.LanguageCode.GDportuguesObjects1.length ;i < len;++i) {
    gdjs.LanguageCode.GDportuguesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LanguageCode.GDinglesObjects1.length ;i < len;++i) {
    gdjs.LanguageCode.GDinglesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LanguageCode.GDfrancesObjects1.length ;i < len;++i) {
    gdjs.LanguageCode.GDfrancesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LanguageCode.GDespanholObjects1.length ;i < len;++i) {
    gdjs.LanguageCode.GDespanholObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LanguageCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.LanguageCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LanguageCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.LanguageCode.GDnoObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "nextscene") >= 1.5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Login", false);
}}

}


};

gdjs.LanguageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LanguageCode.GDfundoObjects1.length = 0;
gdjs.LanguageCode.GDfundoObjects2.length = 0;
gdjs.LanguageCode.GDfundoObjects3.length = 0;
gdjs.LanguageCode.GDportuguesObjects1.length = 0;
gdjs.LanguageCode.GDportuguesObjects2.length = 0;
gdjs.LanguageCode.GDportuguesObjects3.length = 0;
gdjs.LanguageCode.GDinglesObjects1.length = 0;
gdjs.LanguageCode.GDinglesObjects2.length = 0;
gdjs.LanguageCode.GDinglesObjects3.length = 0;
gdjs.LanguageCode.GDfrancesObjects1.length = 0;
gdjs.LanguageCode.GDfrancesObjects2.length = 0;
gdjs.LanguageCode.GDfrancesObjects3.length = 0;
gdjs.LanguageCode.GDespanholObjects1.length = 0;
gdjs.LanguageCode.GDespanholObjects2.length = 0;
gdjs.LanguageCode.GDespanholObjects3.length = 0;
gdjs.LanguageCode.GDfundo_9595limpoObjects1.length = 0;
gdjs.LanguageCode.GDfundo_9595limpoObjects2.length = 0;
gdjs.LanguageCode.GDfundo_9595limpoObjects3.length = 0;
gdjs.LanguageCode.GDconfirmacaoObjects1.length = 0;
gdjs.LanguageCode.GDconfirmacaoObjects2.length = 0;
gdjs.LanguageCode.GDconfirmacaoObjects3.length = 0;
gdjs.LanguageCode.GDyesObjects1.length = 0;
gdjs.LanguageCode.GDyesObjects2.length = 0;
gdjs.LanguageCode.GDyesObjects3.length = 0;
gdjs.LanguageCode.GDnoObjects1.length = 0;
gdjs.LanguageCode.GDnoObjects2.length = 0;
gdjs.LanguageCode.GDnoObjects3.length = 0;
gdjs.LanguageCode.GDscoreObjects1.length = 0;
gdjs.LanguageCode.GDscoreObjects2.length = 0;
gdjs.LanguageCode.GDscoreObjects3.length = 0;
gdjs.LanguageCode.GDnext_9595sceneObjects1.length = 0;
gdjs.LanguageCode.GDnext_9595sceneObjects2.length = 0;
gdjs.LanguageCode.GDnext_9595sceneObjects3.length = 0;
gdjs.LanguageCode.GDURLObjects1.length = 0;
gdjs.LanguageCode.GDURLObjects2.length = 0;
gdjs.LanguageCode.GDURLObjects3.length = 0;
gdjs.LanguageCode.GDfundopistagmObjects1.length = 0;
gdjs.LanguageCode.GDfundopistagmObjects2.length = 0;
gdjs.LanguageCode.GDfundopistagmObjects3.length = 0;
gdjs.LanguageCode.GDpistagmObjects1.length = 0;
gdjs.LanguageCode.GDpistagmObjects2.length = 0;
gdjs.LanguageCode.GDpistagmObjects3.length = 0;
gdjs.LanguageCode.GDdigitsObjects1.length = 0;
gdjs.LanguageCode.GDdigitsObjects2.length = 0;
gdjs.LanguageCode.GDdigitsObjects3.length = 0;
gdjs.LanguageCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.LanguageCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.LanguageCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.LanguageCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.LanguageCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.LanguageCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.LanguageCode.GDgmapsObjects1.length = 0;
gdjs.LanguageCode.GDgmapsObjects2.length = 0;
gdjs.LanguageCode.GDgmapsObjects3.length = 0;

gdjs.LanguageCode.eventsList8(runtimeScene);
gdjs.LanguageCode.GDfundoObjects1.length = 0;
gdjs.LanguageCode.GDfundoObjects2.length = 0;
gdjs.LanguageCode.GDfundoObjects3.length = 0;
gdjs.LanguageCode.GDportuguesObjects1.length = 0;
gdjs.LanguageCode.GDportuguesObjects2.length = 0;
gdjs.LanguageCode.GDportuguesObjects3.length = 0;
gdjs.LanguageCode.GDinglesObjects1.length = 0;
gdjs.LanguageCode.GDinglesObjects2.length = 0;
gdjs.LanguageCode.GDinglesObjects3.length = 0;
gdjs.LanguageCode.GDfrancesObjects1.length = 0;
gdjs.LanguageCode.GDfrancesObjects2.length = 0;
gdjs.LanguageCode.GDfrancesObjects3.length = 0;
gdjs.LanguageCode.GDespanholObjects1.length = 0;
gdjs.LanguageCode.GDespanholObjects2.length = 0;
gdjs.LanguageCode.GDespanholObjects3.length = 0;
gdjs.LanguageCode.GDfundo_9595limpoObjects1.length = 0;
gdjs.LanguageCode.GDfundo_9595limpoObjects2.length = 0;
gdjs.LanguageCode.GDfundo_9595limpoObjects3.length = 0;
gdjs.LanguageCode.GDconfirmacaoObjects1.length = 0;
gdjs.LanguageCode.GDconfirmacaoObjects2.length = 0;
gdjs.LanguageCode.GDconfirmacaoObjects3.length = 0;
gdjs.LanguageCode.GDyesObjects1.length = 0;
gdjs.LanguageCode.GDyesObjects2.length = 0;
gdjs.LanguageCode.GDyesObjects3.length = 0;
gdjs.LanguageCode.GDnoObjects1.length = 0;
gdjs.LanguageCode.GDnoObjects2.length = 0;
gdjs.LanguageCode.GDnoObjects3.length = 0;
gdjs.LanguageCode.GDscoreObjects1.length = 0;
gdjs.LanguageCode.GDscoreObjects2.length = 0;
gdjs.LanguageCode.GDscoreObjects3.length = 0;
gdjs.LanguageCode.GDnext_9595sceneObjects1.length = 0;
gdjs.LanguageCode.GDnext_9595sceneObjects2.length = 0;
gdjs.LanguageCode.GDnext_9595sceneObjects3.length = 0;
gdjs.LanguageCode.GDURLObjects1.length = 0;
gdjs.LanguageCode.GDURLObjects2.length = 0;
gdjs.LanguageCode.GDURLObjects3.length = 0;
gdjs.LanguageCode.GDfundopistagmObjects1.length = 0;
gdjs.LanguageCode.GDfundopistagmObjects2.length = 0;
gdjs.LanguageCode.GDfundopistagmObjects3.length = 0;
gdjs.LanguageCode.GDpistagmObjects1.length = 0;
gdjs.LanguageCode.GDpistagmObjects2.length = 0;
gdjs.LanguageCode.GDpistagmObjects3.length = 0;
gdjs.LanguageCode.GDdigitsObjects1.length = 0;
gdjs.LanguageCode.GDdigitsObjects2.length = 0;
gdjs.LanguageCode.GDdigitsObjects3.length = 0;
gdjs.LanguageCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.LanguageCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.LanguageCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.LanguageCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.LanguageCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.LanguageCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.LanguageCode.GDgmapsObjects1.length = 0;
gdjs.LanguageCode.GDgmapsObjects2.length = 0;
gdjs.LanguageCode.GDgmapsObjects3.length = 0;


return;

}

gdjs['LanguageCode'] = gdjs.LanguageCode;
