
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        
        var size = cc.winSize;
        /*
        var rect = new cc.DrawNode();
        rect.drawRect(cc.p(0, 0), cc.p(300, 300), cc.color(), 5, cc.color(255, 0, 0, 255));
        var dot = new cc.DrawNode();
        dot.drawDot(cc.p(0, 0), 10, cc.color(255, 255, 255, 255));
        
        this.addChild(rect);
        rect.addChild(dot);

        rect.setPositionX(size.width / 2);
        rect.setPositionY(size.height / 2);
        dot.setPositionX(10);
        dot.setPositionY(10);
        rect.setContentSize(cc.size(300, 300));
        rect.setAnchorPoint(cc.p(0.5, 0.5));
        
        this.schedule(function(f) {
			rect.setRotation(rect.getRotation() + 1);
			var p = dot.convertToWorldSpace(cc.p(0, 0));
			cc.log("(" , p.x, ",", p.y, ")");
		});*/
        
        var dot = new cc.DrawNode();
        dot.drawDot(cc.p(0, 0), 10, cc.color(255, 255, 255, 255));
        this.addChild(dot);
        dot.setPositionX(size.width / 2);
        dot.setPositionY(size.height / 2);
        var angle = 0;
        this.schedule(function(f) {
        	dot.setPositionX(size.width/2 +  Math.sin(angle) * 100);
        	dot.setPositionY(size.height/2 + Math.cos(angle) * 150);
        	angle += 0.1;
        });
        
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

