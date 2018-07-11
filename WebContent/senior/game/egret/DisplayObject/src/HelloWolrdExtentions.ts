/**
 * Created by 01375677 on 2018/7/10.
 */

class HelloWolrdExtentions extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    /**
     *  DisplayObject
     *
     *  DisplayObjectContainer  Bitmap  Shape   TextField   TextInput
     *  Sprite  Stage   MovieClip BitmapText
     *
     * @param event
     */
    private onAddToStage(event:egret.Event) {
        /**
         * 1、draw：描述了当前画面渲染时候drawcall的次数
         * 2.cost：包含了4个参数，EnterFrame阶段开销，引擎updateTransfrom开销
         * 引擎draw的开销， Html5中canvas.draw的开销
         * 3.FPS 当前画面的帧频
         */
        egret.Profiler.getInstance().run();

        console.log("Hello Egret");
    }
}