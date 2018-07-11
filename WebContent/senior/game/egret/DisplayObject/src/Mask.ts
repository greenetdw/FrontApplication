/**
 * Created by 01375677 on 2018/7/10.
 */

class Mask extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        var shp1:egret.Shape = new egret.Shape();
        shp1.graphics.beginFill(0xff0000);
        shp1.graphics.drawRect(0, 0, 100, 100);
        shp1.graphics.endFill();
        this.addChild(shp1);

        var shp2:egret.Shape = new egret.Shape();
        shp2.graphics.beginFill(0x00ff00);
        shp2.graphics.drawCircle(0, 0, 20);
        shp2.graphics.endFill();
        this.addChild(shp2);
        shp2.x = 20;
        shp2.y = 20;

        var rect:egret.Rectangle = new egret.Rectangle(20, 20, 30, 50);
        shp1.mask = rect;
    }
}