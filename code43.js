gdjs.CoordenadasCode = {};
gdjs.CoordenadasCode.localVariables = [];
gdjs.CoordenadasCode.GDlatitudeObjects1= [];
gdjs.CoordenadasCode.GDlatitudeObjects2= [];
gdjs.CoordenadasCode.GDlongitudeObjects1= [];
gdjs.CoordenadasCode.GDlongitudeObjects2= [];
gdjs.CoordenadasCode.GDscoreObjects1= [];
gdjs.CoordenadasCode.GDscoreObjects2= [];
gdjs.CoordenadasCode.GDnext_9595sceneObjects1= [];
gdjs.CoordenadasCode.GDnext_9595sceneObjects2= [];
gdjs.CoordenadasCode.GDURLObjects1= [];
gdjs.CoordenadasCode.GDURLObjects2= [];
gdjs.CoordenadasCode.GDfundopistagmObjects1= [];
gdjs.CoordenadasCode.GDfundopistagmObjects2= [];
gdjs.CoordenadasCode.GDpistagmObjects1= [];
gdjs.CoordenadasCode.GDpistagmObjects2= [];
gdjs.CoordenadasCode.GDdigitsObjects1= [];
gdjs.CoordenadasCode.GDdigitsObjects2= [];
gdjs.CoordenadasCode.GDlocal_9595erradoObjects1= [];
gdjs.CoordenadasCode.GDlocal_9595erradoObjects2= [];
gdjs.CoordenadasCode.GDtask_9595confirmationObjects1= [];
gdjs.CoordenadasCode.GDtask_9595confirmationObjects2= [];
gdjs.CoordenadasCode.GDgmapsObjects1= [];
gdjs.CoordenadasCode.GDgmapsObjects2= [];


gdjs.CoordenadasCode.userFunc0x9a60a0 = function GDJSInlineCode(runtimeScene) {
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
gdjs.CoordenadasCode.userFunc0xc1aa20 = function GDJSInlineCode(runtimeScene) {
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
gdjs.CoordenadasCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("latitude"), gdjs.CoordenadasCode.GDlatitudeObjects1);
gdjs.copyArray(runtimeScene.getObjects("longitude"), gdjs.CoordenadasCode.GDlongitudeObjects1);
{for(var i = 0, len = gdjs.CoordenadasCode.GDlatitudeObjects1.length ;i < len;++i) {
    gdjs.CoordenadasCode.GDlatitudeObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.CoordenadasCode.GDlatitudeObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.CoordenadasCode.GDlongitudeObjects1.length ;i < len;++i) {
    gdjs.CoordenadasCode.GDlongitudeObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.CoordenadasCode.GDlongitudeObjects1[i].getWidth())) / 2);
}
}}

}


{



}


{


gdjs.CoordenadasCode.userFunc0x9a60a0(runtimeScene);

}


{


gdjs.CoordenadasCode.userFunc0xc1aa20(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("latitude"), gdjs.CoordenadasCode.GDlatitudeObjects1);
gdjs.copyArray(runtimeScene.getObjects("longitude"), gdjs.CoordenadasCode.GDlongitudeObjects1);
{for(var i = 0, len = gdjs.CoordenadasCode.GDlatitudeObjects1.length ;i < len;++i) {
    gdjs.CoordenadasCode.GDlatitudeObjects1[i].setString("LATITUDE: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Latitude")));
}
}{for(var i = 0, len = gdjs.CoordenadasCode.GDlongitudeObjects1.length ;i < len;++i) {
    gdjs.CoordenadasCode.GDlongitudeObjects1[i].setString("LONGITUDE: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Longitude")));
}
}}

}


};

gdjs.CoordenadasCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CoordenadasCode.GDlatitudeObjects1.length = 0;
gdjs.CoordenadasCode.GDlatitudeObjects2.length = 0;
gdjs.CoordenadasCode.GDlongitudeObjects1.length = 0;
gdjs.CoordenadasCode.GDlongitudeObjects2.length = 0;
gdjs.CoordenadasCode.GDscoreObjects1.length = 0;
gdjs.CoordenadasCode.GDscoreObjects2.length = 0;
gdjs.CoordenadasCode.GDnext_9595sceneObjects1.length = 0;
gdjs.CoordenadasCode.GDnext_9595sceneObjects2.length = 0;
gdjs.CoordenadasCode.GDURLObjects1.length = 0;
gdjs.CoordenadasCode.GDURLObjects2.length = 0;
gdjs.CoordenadasCode.GDfundopistagmObjects1.length = 0;
gdjs.CoordenadasCode.GDfundopistagmObjects2.length = 0;
gdjs.CoordenadasCode.GDpistagmObjects1.length = 0;
gdjs.CoordenadasCode.GDpistagmObjects2.length = 0;
gdjs.CoordenadasCode.GDdigitsObjects1.length = 0;
gdjs.CoordenadasCode.GDdigitsObjects2.length = 0;
gdjs.CoordenadasCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.CoordenadasCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.CoordenadasCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.CoordenadasCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.CoordenadasCode.GDgmapsObjects1.length = 0;
gdjs.CoordenadasCode.GDgmapsObjects2.length = 0;

gdjs.CoordenadasCode.eventsList0(runtimeScene);
gdjs.CoordenadasCode.GDlatitudeObjects1.length = 0;
gdjs.CoordenadasCode.GDlatitudeObjects2.length = 0;
gdjs.CoordenadasCode.GDlongitudeObjects1.length = 0;
gdjs.CoordenadasCode.GDlongitudeObjects2.length = 0;
gdjs.CoordenadasCode.GDscoreObjects1.length = 0;
gdjs.CoordenadasCode.GDscoreObjects2.length = 0;
gdjs.CoordenadasCode.GDnext_9595sceneObjects1.length = 0;
gdjs.CoordenadasCode.GDnext_9595sceneObjects2.length = 0;
gdjs.CoordenadasCode.GDURLObjects1.length = 0;
gdjs.CoordenadasCode.GDURLObjects2.length = 0;
gdjs.CoordenadasCode.GDfundopistagmObjects1.length = 0;
gdjs.CoordenadasCode.GDfundopistagmObjects2.length = 0;
gdjs.CoordenadasCode.GDpistagmObjects1.length = 0;
gdjs.CoordenadasCode.GDpistagmObjects2.length = 0;
gdjs.CoordenadasCode.GDdigitsObjects1.length = 0;
gdjs.CoordenadasCode.GDdigitsObjects2.length = 0;
gdjs.CoordenadasCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.CoordenadasCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.CoordenadasCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.CoordenadasCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.CoordenadasCode.GDgmapsObjects1.length = 0;
gdjs.CoordenadasCode.GDgmapsObjects2.length = 0;


return;

}

gdjs['CoordenadasCode'] = gdjs.CoordenadasCode;
