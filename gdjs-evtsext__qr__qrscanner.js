
gdjs.evtsExt__QR__QRScanner = gdjs.evtsExt__QR__QRScanner || {};

/**
 * Object generated from QR ∕ Barcode Scanner
 */
gdjs.evtsExt__QR__QRScanner.QRScanner = class QRScanner extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.BarcodeType = objectData.content.BarcodeType !== undefined ? objectData.content.BarcodeType : "qr_code";
    this._objectData.LastDetectedString = "";
    this._objectData.JustDecodedValue = objectData.content.JustDecodedValue !== undefined ? objectData.content.JustDecodedValue : false;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.BarcodeType !== newObjectData.content.BarcodeType)
      this._objectData.BarcodeType = newObjectData.content.BarcodeType;
    if (oldObjectData.content.LastDetectedString !== newObjectData.content.LastDetectedString)
      this._objectData.LastDetectedString = newObjectData.content.LastDetectedString;
    if (oldObjectData.content.JustDecodedValue !== newObjectData.content.JustDecodedValue)
      this._objectData.JustDecodedValue = newObjectData.content.JustDecodedValue;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getBarcodeType() {
    return this._objectData.BarcodeType !== undefined ? this._objectData.BarcodeType : "qr_code";
  }
  _setBarcodeType(newValue) {
    this._objectData.BarcodeType = newValue;
  }
  _getLastDetectedString() {
    return this._objectData.LastDetectedString !== undefined ? this._objectData.LastDetectedString : "";
  }
  _setLastDetectedString(newValue) {
    this._objectData.LastDetectedString = newValue;
  }
  _getJustDecodedValue() {
    return this._objectData.JustDecodedValue !== undefined ? this._objectData.JustDecodedValue : false;
  }
  _setJustDecodedValue(newValue) {
    this._objectData.JustDecodedValue = newValue;
  }
  _toggleJustDecodedValue() {
    this._setJustDecodedValue(!this._getJustDecodedValue());
  }

  

  
}

// Methods:
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.onCreatedContext = {};
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.onCreatedContext.GDTextOnUnsupportedObjects1= [];


gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.onCreatedContext.userFunc0x150d4b8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
{
    /** @type {gdjs.CustomRuntimeObject} */
    const self = objects[0];

    if (!("BarcodeDetector" in globalThis)) {
        eventsFunctionContext.createObject("TextOnUnsupported");
        return;
    }

    const barcodeType = self._getBarcodeType();
    self.barcode =
        (barcodeType === "" || barcodeType === "all")
            ? new BarcodeDetector()
            : new BarcodeDetector({ formats: [barcodeType] });

    navigator
        .mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then(videoStream => {
            const videoElement = document.createElement("video");
            videoElement.srcObject = videoStream;
            self.videoElement = videoElement;

            const sprite = PIXI.Sprite.from(videoElement);
            sprite.width = 400;
            sprite.height = 400;
            sprite.anchor.set(0.5);  // Use center as anchor point
            self.sprite = sprite;

            // Position will be updated in doStepPostEvents
            self.getRenderer().getPIXIContainer().addChild(sprite);


        })
        .catch(() => {
            eventsFunctionContext.createObject("TextOnUnsupported");
        });

}
};
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.onCreatedContext.userFunc0x150d4b8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTextOnUnsupportedObjectsList = [...runtimeScene.getObjects("TextOnUnsupported")];
var GDTextOnUnsupportedObjects = Hashtable.newFrom({"TextOnUnsupported": thisGDTextOnUnsupportedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TextOnUnsupported": GDTextOnUnsupportedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "TextOnUnsupported": thisGDTextOnUnsupportedObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("QR"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("QR"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.onCreatedContext.GDTextOnUnsupportedObjects1.length = 0;

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.onCreatedContext.GDTextOnUnsupportedObjects1.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.doStepPostEventsContext.GDTextOnUnsupportedObjects1= [];


gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.doStepPostEventsContext.userFunc0x1525e30 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
{
    /** @type {gdjs.CustomRuntimeObject} */
    const self = objects[0];

    // Sync sprite to object position
    if (self.sprite) {
        self.sprite.x = self.getCenterX();
        self.sprite.y = self.getCenterY();
    }

    if (self.videoElement && self.barcode) {
        self.barcode
            .detect(self.videoElement)
            .then(barcodes => {
                const barcode = barcodes[0];
                if (barcode) {
                    self._setLastDetectedString(barcode.rawValue);
                    self._setJustDecodedValue(true);
                }
            });
    }
}

};
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.doStepPostEventsContext.userFunc0x1525e30(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTextOnUnsupportedObjectsList = [...runtimeScene.getObjects("TextOnUnsupported")];
var GDTextOnUnsupportedObjects = Hashtable.newFrom({"TextOnUnsupported": thisGDTextOnUnsupportedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TextOnUnsupported": GDTextOnUnsupportedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "TextOnUnsupported": thisGDTextOnUnsupportedObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("QR"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("QR"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.doStepPostEventsContext.GDTextOnUnsupportedObjects1.length = 0;

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.doStepPostEventsContext.GDTextOnUnsupportedObjects1.length = 0;


return;
}
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext = {};
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.GDObjectObjects1= [];
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.GDObjectObjects2= [];
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.GDTextOnUnsupportedObjects1= [];
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.GDTextOnUnsupportedObjects2= [];


gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.GDObjectObjects1[0]._getBarcodeType()); }}}

}


};

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeType = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTextOnUnsupportedObjectsList = [...runtimeScene.getObjects("TextOnUnsupported")];
var GDTextOnUnsupportedObjects = Hashtable.newFrom({"TextOnUnsupported": thisGDTextOnUnsupportedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TextOnUnsupported": GDTextOnUnsupportedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "TextOnUnsupported": thisGDTextOnUnsupportedObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("QR"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("QR"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.GDTextOnUnsupportedObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.GDTextOnUnsupportedObjects2.length = 0;

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.GDTextOnUnsupportedObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.BarcodeTypeContext.GDTextOnUnsupportedObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext = {};
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDObjectObjects1= [];
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDObjectObjects2= [];
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDTextOnUnsupportedObjects1= [];
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDTextOnUnsupportedObjects2= [];


gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.userFunc0xabc7b8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if ("BarcodeDetector" in globalThis) {
    const barcodeType = eventsFunctionContext.getArgument("NewBarcodeType");
    const self = objects[0];
    self.barcode =
        (barcodeType === "" || barcodeType === "all")
            ? new BarcodeDetector()
            : new BarcodeDetector({ formats: [barcodeType] });
}

};
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDObjectObjects1[i]._setBarcodeType(eventsFunctionContext.getArgument("NewBarcodeType"));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDObjectObjects1);
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.userFunc0xabc7b8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeType = function(NewBarcodeType, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTextOnUnsupportedObjectsList = [...runtimeScene.getObjects("TextOnUnsupported")];
var GDTextOnUnsupportedObjects = Hashtable.newFrom({"TextOnUnsupported": thisGDTextOnUnsupportedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TextOnUnsupported": GDTextOnUnsupportedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "TextOnUnsupported": thisGDTextOnUnsupportedObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("QR"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("QR"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NewBarcodeType") return NewBarcodeType;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDTextOnUnsupportedObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDTextOnUnsupportedObjects2.length = 0;

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDTextOnUnsupportedObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.SetBarcodeTypeContext.GDTextOnUnsupportedObjects2.length = 0;


return;
}
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext = {};
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.GDObjectObjects1= [];
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.GDObjectObjects2= [];
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.GDTextOnUnsupportedObjects1= [];
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.GDTextOnUnsupportedObjects2= [];


gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.GDObjectObjects1[0]._getLastDetectedString()); }}}

}


};

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedText = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTextOnUnsupportedObjectsList = [...runtimeScene.getObjects("TextOnUnsupported")];
var GDTextOnUnsupportedObjects = Hashtable.newFrom({"TextOnUnsupported": thisGDTextOnUnsupportedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TextOnUnsupported": GDTextOnUnsupportedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "TextOnUnsupported": thisGDTextOnUnsupportedObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("QR"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("QR"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.GDTextOnUnsupportedObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.GDTextOnUnsupportedObjects2.length = 0;

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.GDTextOnUnsupportedObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.DetectedTextContext.GDTextOnUnsupportedObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext = {};
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDObjectObjects1= [];
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDObjectObjects2= [];
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDTextOnUnsupportedObjects1= [];
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDTextOnUnsupportedObjects2= [];


gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.userFunc0x791db0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const self = objects[0];
runtimeScene.getScene().getAsyncTasksManager().addTask(new gdjs.ResolveTask(), () => {
    self._setJustDecodedValue(false);
});

};
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDObjectObjects1, gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDObjectObjects2);


var objects = [];
objects.push.apply(objects,gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDObjectObjects2);
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.userFunc0x791db0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{



}


{



}


};gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDObjectObjects1[i]._getJustDecodedValue() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDObjectObjects1[k] = gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}
{ //Subevents
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScanned = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTextOnUnsupportedObjectsList = [...runtimeScene.getObjects("TextOnUnsupported")];
var GDTextOnUnsupportedObjects = Hashtable.newFrom({"TextOnUnsupported": thisGDTextOnUnsupportedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TextOnUnsupported": GDTextOnUnsupportedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "TextOnUnsupported": thisGDTextOnUnsupportedObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("QR"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("QR"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDTextOnUnsupportedObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDTextOnUnsupportedObjects2.length = 0;

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDTextOnUnsupportedObjects1.length = 0;
gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.HasJustScannedContext.GDTextOnUnsupportedObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__QR__QRScanner.QRScanner.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("QR::QRScanner", gdjs.evtsExt__QR__QRScanner.QRScanner);
