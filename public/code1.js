gdjs.PauseCode = {};
gdjs.PauseCode.localVariables = [];
gdjs.PauseCode.idToCallbackMap = new Map();
gdjs.PauseCode.GDPause_9595Objects1= [];
gdjs.PauseCode.GDPause_9595Objects2= [];


gdjs.PauseCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.PauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseCode.GDPause_9595Objects1.length = 0;
gdjs.PauseCode.GDPause_9595Objects2.length = 0;

gdjs.PauseCode.eventsList0(runtimeScene);
gdjs.PauseCode.GDPause_9595Objects1.length = 0;
gdjs.PauseCode.GDPause_9595Objects2.length = 0;


return;

}

gdjs['PauseCode'] = gdjs.PauseCode;
