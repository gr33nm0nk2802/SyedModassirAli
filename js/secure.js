/*
*    Right Click
*   F12
*    Ctrl + Shift + I
*    Ctrl + Shift + J
*    Ctrl + Shift + C
*    Ctrl + U
*/



// Restrict Right Click from browser
    var isNS = (navigator.appName == "Netscape") ? 1 : 0;
        if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);
        
        function mischandler(){
            return false;
        }
        
        function mousehandler(e){
            var myevent = (isNS) ? e : event;
            var eventbutton = (isNS) ? myevent.which : myevent.button;
    
            if((eventbutton==2)||(eventbutton==3)) return false;
        }
    document.oncontextmenu = mischandler;
    document.onmousedown = mousehandler;
    document.onmouseup = mousehandler;

// Restrict keyboard shortcut to open developer tools and view the source code
        document.onkeydown = function(e) {
        if(event.keyCode == 123) {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0)||e.keyCode == 'i'.charCodeAt(0))) {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && (e.keyCode == 'C'.charCodeAt(0)||e.keyCode == 'c'.charCodeAt(0))) {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && (e.keyCode == 'J'.charCodeAt(0)||e.keyCode == 'j'.charCodeAt(0))) {
            return false;
        }
        if(e.ctrlKey && (e.keyCode == 'U'.charCodeAt(0)||e.keyCode == 'u'.charCodeAt(0))) {
            return false;
        }
    }

// Restrict Developer Console

if(!window.console) window.console = {};
var methods = ["log", "debug", "warn", "info", "dir", "dirxml", "trace", "profile"];
for(var i=0;i<methods.length;i++){
    console[methods[i]] = function(){};
}
