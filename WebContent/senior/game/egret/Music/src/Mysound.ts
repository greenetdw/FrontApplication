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

    private _curSound:egret.Sound;

    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        //var _curSound:egret.Sound = RES.getRes("mysound");
        //_curSound.play();
        this.drawStopBtn();

        this._curSound = new egret.Sound();
        this._curSound = RES.getRes("mysound");

        this._curSound.play();

        this._curSound.addEventListener("ended", this.replay.bind(this));
    }

    private drawStopBtn() {
        var spr:egret.Sprite = new egret.Sprite();
        spr.graphics.beginFill(0xff0000);
        spr.graphics.drawRect(0,0, 100, 100);
        spr.graphics.endFill();
        spr.width = 100;
        spr.height = 100;
        this.addChild(spr);

        spr.touchEnabled = true;
        spr.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    }

    private onTouch(evt:egret.TouchEvent) {
        this._curSound.pause();
    }

    private replay():void {
        this._curSound.load();
        this._curSound.play();
    }
}