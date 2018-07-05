/**
 * Created by wwtliu on 14/8/16.
 */
var numDiv;
var work = null;

window.onload = function(){
    numDiv = document.getElementById("numDiv");

    document.getElementById("start").onclick = startWorker;
    document.getElementById("stop").onclick = function(){
        if(work){
            work.terminate();
            work = null;
        }
    }
}

function startWorker(){
    if(work){
        return;
    }
    work = new Worker("count.js");
    work.onmessage = function(e){
        numDiv.innerHTML = e.data;
    }
}