/**
 * Created by 01375677 on 2018/7/10.
 */

class HitTest extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        this.drawText();

        var shp1:egret.Shape = new egret.Shape();
        shp1.graphics.beginFill(0xff0000);
        shp1.graphics.drawRect(0, 0, 100, 100);
        shp1.graphics.endFill();
        shp1.width = 100;
        shp1.height = 100;
        this.addChild(shp1);

        var isHit:boolean = shp1.hitTestPoint(10, 10);
        //var isHit:boolean = shp1.hitTestPoint(10, 10, true);
        this.infoText.text = "碰撞检测:" + isHit;
    }

    private infoText:egret.TextField;

    private drawText(){
        this.infoText = new egret.TextField();
        this.infoText.y = 200;
        this.infoText.text = "碰撞检测";
        this.addChild(this.infoText);
    }
}
