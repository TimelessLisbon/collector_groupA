gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDscoreObjects1= [];
gdjs.LeaderboardCode.GDscoreObjects2= [];
gdjs.LeaderboardCode.GDnext_9595sceneObjects1= [];
gdjs.LeaderboardCode.GDnext_9595sceneObjects2= [];
gdjs.LeaderboardCode.GDURLObjects1= [];
gdjs.LeaderboardCode.GDURLObjects2= [];
gdjs.LeaderboardCode.GDfundopistagmObjects1= [];
gdjs.LeaderboardCode.GDfundopistagmObjects2= [];
gdjs.LeaderboardCode.GDpistagmObjects1= [];
gdjs.LeaderboardCode.GDpistagmObjects2= [];
gdjs.LeaderboardCode.GDdigitsObjects1= [];
gdjs.LeaderboardCode.GDdigitsObjects2= [];
gdjs.LeaderboardCode.GDlocal_9595erradoObjects1= [];
gdjs.LeaderboardCode.GDlocal_9595erradoObjects2= [];
gdjs.LeaderboardCode.GDtask_9595confirmationObjects1= [];
gdjs.LeaderboardCode.GDtask_9595confirmationObjects2= [];
gdjs.LeaderboardCode.GDgmapsObjects1= [];
gdjs.LeaderboardCode.GDgmapsObjects2= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), true);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(31);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9857196);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().get("hour"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().get("minute"), runtimeScene.getScene().getVariables().get("error"));
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDscoreObjects1.length = 0;
gdjs.LeaderboardCode.GDscoreObjects2.length = 0;
gdjs.LeaderboardCode.GDnext_9595sceneObjects1.length = 0;
gdjs.LeaderboardCode.GDnext_9595sceneObjects2.length = 0;
gdjs.LeaderboardCode.GDURLObjects1.length = 0;
gdjs.LeaderboardCode.GDURLObjects2.length = 0;
gdjs.LeaderboardCode.GDfundopistagmObjects1.length = 0;
gdjs.LeaderboardCode.GDfundopistagmObjects2.length = 0;
gdjs.LeaderboardCode.GDpistagmObjects1.length = 0;
gdjs.LeaderboardCode.GDpistagmObjects2.length = 0;
gdjs.LeaderboardCode.GDdigitsObjects1.length = 0;
gdjs.LeaderboardCode.GDdigitsObjects2.length = 0;
gdjs.LeaderboardCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.LeaderboardCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.LeaderboardCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.LeaderboardCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.LeaderboardCode.GDgmapsObjects1.length = 0;
gdjs.LeaderboardCode.GDgmapsObjects2.length = 0;

gdjs.LeaderboardCode.eventsList0(runtimeScene);
gdjs.LeaderboardCode.GDscoreObjects1.length = 0;
gdjs.LeaderboardCode.GDscoreObjects2.length = 0;
gdjs.LeaderboardCode.GDnext_9595sceneObjects1.length = 0;
gdjs.LeaderboardCode.GDnext_9595sceneObjects2.length = 0;
gdjs.LeaderboardCode.GDURLObjects1.length = 0;
gdjs.LeaderboardCode.GDURLObjects2.length = 0;
gdjs.LeaderboardCode.GDfundopistagmObjects1.length = 0;
gdjs.LeaderboardCode.GDfundopistagmObjects2.length = 0;
gdjs.LeaderboardCode.GDpistagmObjects1.length = 0;
gdjs.LeaderboardCode.GDpistagmObjects2.length = 0;
gdjs.LeaderboardCode.GDdigitsObjects1.length = 0;
gdjs.LeaderboardCode.GDdigitsObjects2.length = 0;
gdjs.LeaderboardCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.LeaderboardCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.LeaderboardCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.LeaderboardCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.LeaderboardCode.GDgmapsObjects1.length = 0;
gdjs.LeaderboardCode.GDgmapsObjects2.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
