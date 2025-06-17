gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDnames_9595txtObjects1= [];
gdjs.LeaderboardCode.GDnames_9595txtObjects2= [];
gdjs.LeaderboardCode.GDnames_9595txtObjects3= [];
gdjs.LeaderboardCode.GDnames_9595txtObjects4= [];
gdjs.LeaderboardCode.GDscores_9595txtObjects1= [];
gdjs.LeaderboardCode.GDscores_9595txtObjects2= [];
gdjs.LeaderboardCode.GDscores_9595txtObjects3= [];
gdjs.LeaderboardCode.GDscores_9595txtObjects4= [];
gdjs.LeaderboardCode.GDfundoObjects1= [];
gdjs.LeaderboardCode.GDfundoObjects2= [];
gdjs.LeaderboardCode.GDfundoObjects3= [];
gdjs.LeaderboardCode.GDfundoObjects4= [];
gdjs.LeaderboardCode.GDscoreObjects1= [];
gdjs.LeaderboardCode.GDscoreObjects2= [];
gdjs.LeaderboardCode.GDscoreObjects3= [];
gdjs.LeaderboardCode.GDscoreObjects4= [];
gdjs.LeaderboardCode.GDnext_9595sceneObjects1= [];
gdjs.LeaderboardCode.GDnext_9595sceneObjects2= [];
gdjs.LeaderboardCode.GDnext_9595sceneObjects3= [];
gdjs.LeaderboardCode.GDnext_9595sceneObjects4= [];
gdjs.LeaderboardCode.GDURLObjects1= [];
gdjs.LeaderboardCode.GDURLObjects2= [];
gdjs.LeaderboardCode.GDURLObjects3= [];
gdjs.LeaderboardCode.GDURLObjects4= [];
gdjs.LeaderboardCode.GDfundopistagmObjects1= [];
gdjs.LeaderboardCode.GDfundopistagmObjects2= [];
gdjs.LeaderboardCode.GDfundopistagmObjects3= [];
gdjs.LeaderboardCode.GDfundopistagmObjects4= [];
gdjs.LeaderboardCode.GDpistagmObjects1= [];
gdjs.LeaderboardCode.GDpistagmObjects2= [];
gdjs.LeaderboardCode.GDpistagmObjects3= [];
gdjs.LeaderboardCode.GDpistagmObjects4= [];
gdjs.LeaderboardCode.GDdigitsObjects1= [];
gdjs.LeaderboardCode.GDdigitsObjects2= [];
gdjs.LeaderboardCode.GDdigitsObjects3= [];
gdjs.LeaderboardCode.GDdigitsObjects4= [];
gdjs.LeaderboardCode.GDlocal_9595erradoObjects1= [];
gdjs.LeaderboardCode.GDlocal_9595erradoObjects2= [];
gdjs.LeaderboardCode.GDlocal_9595erradoObjects3= [];
gdjs.LeaderboardCode.GDlocal_9595erradoObjects4= [];
gdjs.LeaderboardCode.GDtask_9595confirmationObjects1= [];
gdjs.LeaderboardCode.GDtask_9595confirmationObjects2= [];
gdjs.LeaderboardCode.GDtask_9595confirmationObjects3= [];
gdjs.LeaderboardCode.GDtask_9595confirmationObjects4= [];
gdjs.LeaderboardCode.GDgmapsObjects1= [];
gdjs.LeaderboardCode.GDgmapsObjects2= [];
gdjs.LeaderboardCode.GDgmapsObjects3= [];
gdjs.LeaderboardCode.GDgmapsObjects4= [];


gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("0");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24577804);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList3 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("1");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24582308);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList2(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList5 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("2");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24586900);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList4(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList7 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("3");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24591644);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList6(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList9 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("4");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24596388);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList8(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList11 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("5");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24601132);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList10(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList13 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("6");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24605940);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList12(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList15 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("7");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24610684);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList14(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList17 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("8");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24615428);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList16(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList19 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("9");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24620172);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList18(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList21 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("10");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24624916);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList20(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList23 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("11");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24629660);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList22(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList25 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("12");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24634404);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList24(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList27 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("13");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24639148);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList26(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList28 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList29 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("14");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24643756);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList28(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList30 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList31 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("15");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24648500);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList30(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList32 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList33 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("16");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24589428);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList32(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList34 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList35 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("17");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24646284);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList34(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList36 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList37 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("18");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24628724);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList36(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects = Hashtable.newFrom({"names_txt": gdjs.LeaderboardCode.GDnames_9595txtObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects = Hashtable.newFrom({"scores_txt": gdjs.LeaderboardCode.GDscores_9595txtObjects3});
gdjs.LeaderboardCode.eventsList38 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(15), "name");
if (isConditionTrue_0) {
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;

gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDnames_95959595txtObjects3Objects, 100, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDnames_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDnames_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("name").getAsString());
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDscores_95959595txtObjects3Objects, 550, 250 + runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() * 40, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDscores_9595txtObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDscores_9595txtObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(15).getChild("score").getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}}

}


};gdjs.LeaderboardCode.eventsList39 = function(runtimeScene) {

{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(16);
const valueIteratorReference2 = runtimeScene.getScene().getVariables().getFromIndex(15);
const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(12).getChild("docs").getChild("19");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24588476);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.LeaderboardCode.eventsList38(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.LeaderboardCode.eventsList40 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24570780);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(31);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().getFromIndex(11));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().getFromIndex(11));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().getFromIndex(11));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), runtimeScene.getScene().getVariables().getFromIndex(11));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(11));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(11));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.firestore.startQuery("Scores", "leaderboard");
}{gdjs.evtTools.firebaseTools.firestore.executeQuery("Scores", runtimeScene.getScene().getVariables().getFromIndex(12), runtimeScene.getScene().getVariables().getFromIndex(11));
}{gdjs.evtTools.firebaseTools.firestore.queryOrderBy("Scores", "score", "desc");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 3);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 4);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 5);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 6);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 7);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 8);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 9);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList19(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 10);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList21(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 11);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList23(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 12);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList25(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 13);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList27(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 14);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList29(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 15);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList31(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 16);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList33(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 17);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList35(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 18);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList37(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 19);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList39(runtimeScene);} //End of subevents
}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDnames_9595txtObjects1.length = 0;
gdjs.LeaderboardCode.GDnames_9595txtObjects2.length = 0;
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;
gdjs.LeaderboardCode.GDnames_9595txtObjects4.length = 0;
gdjs.LeaderboardCode.GDscores_9595txtObjects1.length = 0;
gdjs.LeaderboardCode.GDscores_9595txtObjects2.length = 0;
gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;
gdjs.LeaderboardCode.GDscores_9595txtObjects4.length = 0;
gdjs.LeaderboardCode.GDfundoObjects1.length = 0;
gdjs.LeaderboardCode.GDfundoObjects2.length = 0;
gdjs.LeaderboardCode.GDfundoObjects3.length = 0;
gdjs.LeaderboardCode.GDfundoObjects4.length = 0;
gdjs.LeaderboardCode.GDscoreObjects1.length = 0;
gdjs.LeaderboardCode.GDscoreObjects2.length = 0;
gdjs.LeaderboardCode.GDscoreObjects3.length = 0;
gdjs.LeaderboardCode.GDscoreObjects4.length = 0;
gdjs.LeaderboardCode.GDnext_9595sceneObjects1.length = 0;
gdjs.LeaderboardCode.GDnext_9595sceneObjects2.length = 0;
gdjs.LeaderboardCode.GDnext_9595sceneObjects3.length = 0;
gdjs.LeaderboardCode.GDnext_9595sceneObjects4.length = 0;
gdjs.LeaderboardCode.GDURLObjects1.length = 0;
gdjs.LeaderboardCode.GDURLObjects2.length = 0;
gdjs.LeaderboardCode.GDURLObjects3.length = 0;
gdjs.LeaderboardCode.GDURLObjects4.length = 0;
gdjs.LeaderboardCode.GDfundopistagmObjects1.length = 0;
gdjs.LeaderboardCode.GDfundopistagmObjects2.length = 0;
gdjs.LeaderboardCode.GDfundopistagmObjects3.length = 0;
gdjs.LeaderboardCode.GDfundopistagmObjects4.length = 0;
gdjs.LeaderboardCode.GDpistagmObjects1.length = 0;
gdjs.LeaderboardCode.GDpistagmObjects2.length = 0;
gdjs.LeaderboardCode.GDpistagmObjects3.length = 0;
gdjs.LeaderboardCode.GDpistagmObjects4.length = 0;
gdjs.LeaderboardCode.GDdigitsObjects1.length = 0;
gdjs.LeaderboardCode.GDdigitsObjects2.length = 0;
gdjs.LeaderboardCode.GDdigitsObjects3.length = 0;
gdjs.LeaderboardCode.GDdigitsObjects4.length = 0;
gdjs.LeaderboardCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.LeaderboardCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.LeaderboardCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.LeaderboardCode.GDlocal_9595erradoObjects4.length = 0;
gdjs.LeaderboardCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.LeaderboardCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.LeaderboardCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.LeaderboardCode.GDtask_9595confirmationObjects4.length = 0;
gdjs.LeaderboardCode.GDgmapsObjects1.length = 0;
gdjs.LeaderboardCode.GDgmapsObjects2.length = 0;
gdjs.LeaderboardCode.GDgmapsObjects3.length = 0;
gdjs.LeaderboardCode.GDgmapsObjects4.length = 0;

gdjs.LeaderboardCode.eventsList40(runtimeScene);
gdjs.LeaderboardCode.GDnames_9595txtObjects1.length = 0;
gdjs.LeaderboardCode.GDnames_9595txtObjects2.length = 0;
gdjs.LeaderboardCode.GDnames_9595txtObjects3.length = 0;
gdjs.LeaderboardCode.GDnames_9595txtObjects4.length = 0;
gdjs.LeaderboardCode.GDscores_9595txtObjects1.length = 0;
gdjs.LeaderboardCode.GDscores_9595txtObjects2.length = 0;
gdjs.LeaderboardCode.GDscores_9595txtObjects3.length = 0;
gdjs.LeaderboardCode.GDscores_9595txtObjects4.length = 0;
gdjs.LeaderboardCode.GDfundoObjects1.length = 0;
gdjs.LeaderboardCode.GDfundoObjects2.length = 0;
gdjs.LeaderboardCode.GDfundoObjects3.length = 0;
gdjs.LeaderboardCode.GDfundoObjects4.length = 0;
gdjs.LeaderboardCode.GDscoreObjects1.length = 0;
gdjs.LeaderboardCode.GDscoreObjects2.length = 0;
gdjs.LeaderboardCode.GDscoreObjects3.length = 0;
gdjs.LeaderboardCode.GDscoreObjects4.length = 0;
gdjs.LeaderboardCode.GDnext_9595sceneObjects1.length = 0;
gdjs.LeaderboardCode.GDnext_9595sceneObjects2.length = 0;
gdjs.LeaderboardCode.GDnext_9595sceneObjects3.length = 0;
gdjs.LeaderboardCode.GDnext_9595sceneObjects4.length = 0;
gdjs.LeaderboardCode.GDURLObjects1.length = 0;
gdjs.LeaderboardCode.GDURLObjects2.length = 0;
gdjs.LeaderboardCode.GDURLObjects3.length = 0;
gdjs.LeaderboardCode.GDURLObjects4.length = 0;
gdjs.LeaderboardCode.GDfundopistagmObjects1.length = 0;
gdjs.LeaderboardCode.GDfundopistagmObjects2.length = 0;
gdjs.LeaderboardCode.GDfundopistagmObjects3.length = 0;
gdjs.LeaderboardCode.GDfundopistagmObjects4.length = 0;
gdjs.LeaderboardCode.GDpistagmObjects1.length = 0;
gdjs.LeaderboardCode.GDpistagmObjects2.length = 0;
gdjs.LeaderboardCode.GDpistagmObjects3.length = 0;
gdjs.LeaderboardCode.GDpistagmObjects4.length = 0;
gdjs.LeaderboardCode.GDdigitsObjects1.length = 0;
gdjs.LeaderboardCode.GDdigitsObjects2.length = 0;
gdjs.LeaderboardCode.GDdigitsObjects3.length = 0;
gdjs.LeaderboardCode.GDdigitsObjects4.length = 0;
gdjs.LeaderboardCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.LeaderboardCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.LeaderboardCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.LeaderboardCode.GDlocal_9595erradoObjects4.length = 0;
gdjs.LeaderboardCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.LeaderboardCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.LeaderboardCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.LeaderboardCode.GDtask_9595confirmationObjects4.length = 0;
gdjs.LeaderboardCode.GDgmapsObjects1.length = 0;
gdjs.LeaderboardCode.GDgmapsObjects2.length = 0;
gdjs.LeaderboardCode.GDgmapsObjects3.length = 0;
gdjs.LeaderboardCode.GDgmapsObjects4.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
