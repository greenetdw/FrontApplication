/**
 * Created by 01375677 on 2018/7/11.
 */

class HelloGui extends egret.DisplayObjectContainer {

    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private uiStage:egret.gui.UIStage;

    private onAddToStage(event:egret.Event){
        this.uiStage = new egret.gui.UIStage();
        this.addChild(this.uiStage);

        var label:egret.gui.Label = new egret.gui.Label();
        label.text = "Hello 大家好";
        this.uiStage.addElement(label);

        label.fontFamily = "Tahoma";
        label.textColor = 0xff000;
        label.textAlign = "left";
        label.lineSpacing = 2;
        label.maxDisplayedLines = 2;
    }
}