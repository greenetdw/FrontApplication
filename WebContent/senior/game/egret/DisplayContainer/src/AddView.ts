/**
 * Created by wwtliu on 14/12/9.
 */

class AddView extends  egret.DisplayObjectContainer{

    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(event:egret.Event){
        var spr:egret.Sprite = new egret.Sprite();
        spr.graphics.beginFill(0xff0000);
        spr.graphics.drawRect(0,0,100,100);
        spr.graphics.endFill();
        spr.x = 120;
        //该对象存在
        this.addChild(spr);
        //参与渲染过程
        //this.removeChild(spr);
        //改对象存在，驻足与内存中

        var spr1:egret.Sprite = new egret.Sprite();
        spr1.graphics.beginFill(0x00ff00);
        spr1.graphics.drawRect(0,0,100,100);
        spr1.graphics.endFill();
        spr1.y = 130;
        this.addChild(spr1);

        var spr2:egret.Sprite = new egret.Sprite();
        spr2.graphics.beginFill(0x0000ff);
        spr2.graphics.drawRect(0,0,50,50);
        spr2.graphics.endFill();
        spr2.x = 10;
        spr2.y = 10;
        this.addChild(spr2);

        spr.addChild(spr2);
        spr1.addChild(spr2);

        if(spr2.parent){
            spr1.parent.removeChild(spr2);
        }
    }
}