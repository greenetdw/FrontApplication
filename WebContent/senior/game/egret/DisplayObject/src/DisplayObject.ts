/**
 * Created by 01375677 on 2018/7/10.
 */

class DisplayObject extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        var spr:egret.Sprite = new egret.Sprite();
        spr.graphics.beginFill(0xff0000);
        spr.graphics.drawRect(0, 0, 100, 100);
        spr.graphics.endFill();

        spr.x = 100;
        spr.y = 100;
        spr.scaleX = 0.5;
        spr.scaleY = 0.5;
        spr.alpha = 0.2;

        //spr.rotation = 45;
        //spr.skewX = 35;//Ð±ÇÐ
        //spr.visible = false;
        this.addChild(spr);


    }
}