var wx = {
    preferredFramesPerSecond : 60,
    setPreferredFramesPerSecond : function(frame){
        _preferredFramesPerSecond = frame;
        if(window.canvas){
            window.canvas.setPreferredFramesPerSecond(frame);
        }
    },
    getSystemInfoSync : function(){
        return {
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            devicePixelRatio: 3.0,
            platform: 'iOS'
        }
    },
    createCanvas : function(){ return window.canvas},
    createImage : Ejecta.Image,
    createInnerAudioContext : Ejecta.Audio,

    onTouchStart : function(touchEvent) {
        document.dispatchEvent( touchEvent );
    },
    onTouchMove : function(touchEvent) {
        document.dispatchEvent( touchEvent );
    },
    onTouchEnd: function(touchEvent) {
        document.dispatchEvent( touchEvent );
    },
    onTouchCancel:function(touchEvent) {
        document.dispatchEvent( touchEvent );
    },
    request : Ejecta.HttpRequest,
    connectSocket : Ejecta.WebSocket,
    getStorageInfoSync : function(){
        return {
            keys:["1", "2"], 
            currentSize: 100,
            limitSize: 4000
        }
    },
    getStorageSync : function(key){
        return null;
    },
    setStorageSync : function(key, val) {
        return true;
    },
    removeStorageSync : function(key) {

    },
    clearStorageSync : function(key) {

    },
};

window.canvas.setPreferredFramesPerSecond(wx.preferredFramesPerSecond);

var GameGlobal = window;
GameGlobal.__isAdapterInjected = true;

