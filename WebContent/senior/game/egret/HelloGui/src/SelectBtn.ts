/**
 * Created by 01375677 on 2018/7/11.
 */
class SelectBtn extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
        egret.gui.Theme.load("resource/theme.thm");
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);

        RES.loadConfig("resource/resource.json", "resource/");
    }

    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadGroup("preload");
    }

    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        this.createScene();
    }

    private guiLayer:egret.gui.UIStage;

    private createScene():void {
        this.guiLayer = new egret.gui.UIStage();
        this.addChild(this.guiLayer);

        var hSlider:egret.gui.HSlider = new egret.gui.HSlider();
        hSlider.width = 200;
        hSlider.x = 20;
        hSlider.y = 20;
        hSlider.minimum = 0;
        hSlider.maximum = 100;
        hSlider.value = 50;

        hSlider.addEventListener(egret.Event.CHANGE, this.changeHandler, this);

        this.guiLayer.addElement(hSlider);

    }

    private changeHandler(event:egret.TouchEvent):void {
        console.log(event.target.value);
    }
}