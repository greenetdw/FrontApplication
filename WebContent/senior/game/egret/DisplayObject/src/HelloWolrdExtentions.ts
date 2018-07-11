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
         * 1��draw�������˵�ǰ������Ⱦʱ��drawcall�Ĵ���
         * 2.cost��������4��������EnterFrame�׶ο���������updateTransfrom����
         * ����draw�Ŀ����� Html5��canvas.draw�Ŀ���
         * 3.FPS ��ǰ�����֡Ƶ
         */
        egret.Profiler.getInstance().run();

        console.log("Hello Egret");
    }
}