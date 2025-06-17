gdjs.QR_95Code_95readerCode = {};
gdjs.QR_95Code_95readerCode.localVariables = [];
gdjs.QR_95Code_95readerCode.GDfundoObjects1= [];
gdjs.QR_95Code_95readerCode.GDfundoObjects2= [];
gdjs.QR_95Code_95readerCode.GDfundoObjects3= [];
gdjs.QR_95Code_95readerCode.GDfundoObjects4= [];
gdjs.QR_95Code_95readerCode.GDcancelObjects1= [];
gdjs.QR_95Code_95readerCode.GDcancelObjects2= [];
gdjs.QR_95Code_95readerCode.GDcancelObjects3= [];
gdjs.QR_95Code_95readerCode.GDcancelObjects4= [];
gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1= [];
gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects2= [];
gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects3= [];
gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects4= [];
gdjs.QR_95Code_95readerCode.GDscoreObjects1= [];
gdjs.QR_95Code_95readerCode.GDscoreObjects2= [];
gdjs.QR_95Code_95readerCode.GDscoreObjects3= [];
gdjs.QR_95Code_95readerCode.GDscoreObjects4= [];
gdjs.QR_95Code_95readerCode.GDnext_9595sceneObjects1= [];
gdjs.QR_95Code_95readerCode.GDnext_9595sceneObjects2= [];
gdjs.QR_95Code_95readerCode.GDnext_9595sceneObjects3= [];
gdjs.QR_95Code_95readerCode.GDnext_9595sceneObjects4= [];
gdjs.QR_95Code_95readerCode.GDURLObjects1= [];
gdjs.QR_95Code_95readerCode.GDURLObjects2= [];
gdjs.QR_95Code_95readerCode.GDURLObjects3= [];
gdjs.QR_95Code_95readerCode.GDURLObjects4= [];
gdjs.QR_95Code_95readerCode.GDfundopistagmObjects1= [];
gdjs.QR_95Code_95readerCode.GDfundopistagmObjects2= [];
gdjs.QR_95Code_95readerCode.GDfundopistagmObjects3= [];
gdjs.QR_95Code_95readerCode.GDfundopistagmObjects4= [];
gdjs.QR_95Code_95readerCode.GDpistagmObjects1= [];
gdjs.QR_95Code_95readerCode.GDpistagmObjects2= [];
gdjs.QR_95Code_95readerCode.GDpistagmObjects3= [];
gdjs.QR_95Code_95readerCode.GDpistagmObjects4= [];
gdjs.QR_95Code_95readerCode.GDdigitsObjects1= [];
gdjs.QR_95Code_95readerCode.GDdigitsObjects2= [];
gdjs.QR_95Code_95readerCode.GDdigitsObjects3= [];
gdjs.QR_95Code_95readerCode.GDdigitsObjects4= [];
gdjs.QR_95Code_95readerCode.GDlocal_9595erradoObjects1= [];
gdjs.QR_95Code_95readerCode.GDlocal_9595erradoObjects2= [];
gdjs.QR_95Code_95readerCode.GDlocal_9595erradoObjects3= [];
gdjs.QR_95Code_95readerCode.GDlocal_9595erradoObjects4= [];
gdjs.QR_95Code_95readerCode.GDtask_9595confirmationObjects1= [];
gdjs.QR_95Code_95readerCode.GDtask_9595confirmationObjects2= [];
gdjs.QR_95Code_95readerCode.GDtask_9595confirmationObjects3= [];
gdjs.QR_95Code_95readerCode.GDtask_9595confirmationObjects4= [];
gdjs.QR_95Code_95readerCode.GDgmapsObjects1= [];
gdjs.QR_95Code_95readerCode.GDgmapsObjects2= [];
gdjs.QR_95Code_95readerCode.GDgmapsObjects3= [];
gdjs.QR_95Code_95readerCode.GDgmapsObjects4= [];


gdjs.QR_95Code_95readerCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17003892);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}}

}


};gdjs.QR_95Code_95readerCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17008908);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.QR_95Code_95readerCode.asyncCallback17008036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.QR_95Code_95readerCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BOMB DEACTIVATOR", false);
}
{ //Subevents
gdjs.QR_95Code_95readerCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.QR_95Code_95readerCode.localVariables.length = 0;
}
gdjs.QR_95Code_95readerCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.QR_95Code_95readerCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.QR_95Code_95readerCode.asyncCallback17008036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.QR_95Code_95readerCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17010852);
}
if (isConditionTrue_0) {
/* Reuse gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}{gdjs.evtTools.firebaseTools.database.updateField("QR_Code", "Text", (( gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1.length === 0 ) ? "" :gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1[0].DetectedText((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), runtimeScene.getScene().getVariables().getFromIndex(2));
}}

}


};gdjs.QR_95Code_95readerCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1, gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects2.length;i<l;++i) {
    if ( gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects2[i].DetectedText((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == "https://open-scene-x/" ) {
        isConditionTrue_0 = true;
        gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects2[k] = gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects2[i];
        ++k;
    }
}
gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.QR_95Code_95readerCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1.length;i<l;++i) {
    if ( gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1[i].DetectedText((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != "https://open-scene-x/" ) {
        isConditionTrue_0 = true;
        gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1[k] = gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1[i];
        ++k;
    }
}
gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.QR_95Code_95readerCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.QR_95Code_95readerCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MyQRScanner"), gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(41);
}{for(var i = 0, len = gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1.length ;i < len;++i) {
    gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1[i].SetBarcodeType("qr_code", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.QR_95Code_95readerCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MyQRScanner"), gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1);
{for(var i = 0, len = gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1.length ;i < len;++i) {
    gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MyQRScanner"), gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1.length;i<l;++i) {
    if ( gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1[i].HasJustScanned((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1[k] = gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1[i];
        ++k;
    }
}
gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.QR_95Code_95readerCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("cancel"), gdjs.QR_95Code_95readerCode.GDcancelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.QR_95Code_95readerCode.GDcancelObjects1.length;i<l;++i) {
    if ( gdjs.QR_95Code_95readerCode.GDcancelObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.QR_95Code_95readerCode.GDcancelObjects1[k] = gdjs.QR_95Code_95readerCode.GDcancelObjects1[i];
        ++k;
    }
}
gdjs.QR_95Code_95readerCode.GDcancelObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.QR_95Code_95readerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.QR_95Code_95readerCode.GDfundoObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDfundoObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDfundoObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDfundoObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDcancelObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDcancelObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDcancelObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDcancelObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDscoreObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDscoreObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDscoreObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDscoreObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDnext_9595sceneObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDnext_9595sceneObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDnext_9595sceneObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDnext_9595sceneObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDURLObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDURLObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDURLObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDURLObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDfundopistagmObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDfundopistagmObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDfundopistagmObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDfundopistagmObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDpistagmObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDpistagmObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDpistagmObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDpistagmObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDdigitsObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDdigitsObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDdigitsObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDdigitsObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDlocal_9595erradoObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDtask_9595confirmationObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDgmapsObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDgmapsObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDgmapsObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDgmapsObjects4.length = 0;

gdjs.QR_95Code_95readerCode.eventsList5(runtimeScene);
gdjs.QR_95Code_95readerCode.GDfundoObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDfundoObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDfundoObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDfundoObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDcancelObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDcancelObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDcancelObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDcancelObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDMyQRScannerObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDscoreObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDscoreObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDscoreObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDscoreObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDnext_9595sceneObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDnext_9595sceneObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDnext_9595sceneObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDnext_9595sceneObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDURLObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDURLObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDURLObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDURLObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDfundopistagmObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDfundopistagmObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDfundopistagmObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDfundopistagmObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDpistagmObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDpistagmObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDpistagmObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDpistagmObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDdigitsObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDdigitsObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDdigitsObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDdigitsObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDlocal_9595erradoObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDtask_9595confirmationObjects4.length = 0;
gdjs.QR_95Code_95readerCode.GDgmapsObjects1.length = 0;
gdjs.QR_95Code_95readerCode.GDgmapsObjects2.length = 0;
gdjs.QR_95Code_95readerCode.GDgmapsObjects3.length = 0;
gdjs.QR_95Code_95readerCode.GDgmapsObjects4.length = 0;


return;

}

gdjs['QR_95Code_95readerCode'] = gdjs.QR_95Code_95readerCode;
