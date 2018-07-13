/**
 * Created by 01375677 on 2018/7/11.
 */
class Button extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event){
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

        var button:egret.gui.Button = new egret.gui.Button();
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        button.label = '点击弹出';
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        this.guiLayer.addElement(button);
    }

    private onButtonClick(event:egret.TouchEvent):void {
        egret.gui.Alert.show("这是一个天窗", "弹窗", this.closeHandler, "ok", "cancel");
    }

    private closeHandler(event:egret.gui.CloseEvent):void {
        if(event.detail == egret.gui.Alert.FIRST_BUTTON) {
            console.log('用户点击了OK');
        } else {

        }
    }
}