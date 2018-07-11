/**
 * Created by 01375677 on 2018/7/11.
 */

class Mysound extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(event:egret.Event){
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
        RES.loadGroup("ms");
    }

    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        var _curSound:egret.Sound = RES.getRes("mysound");
        _curSound.play();
    }
}