var base64 = (function () {
    "use strict";
    var sd = "";

    function getBase64Image() {
        var canvas = document.createElement("canvas");
        var img = document.getElementById("show-picture");

        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        //return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        return dataURL;
    }

    function decodeBase64(s) {
        var e = {}, i, b = 0, c, x, l = 0, a, r = '', w = String.fromCharCode, L = s.length;
        var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (i = 0; i < 64; i++) {
            e[A.charAt(i)] = i;
        }
        for (x = 0; x < L; x++) {
            c = e[s.charAt(x)];
            b = (b << 6) + c;
            l += 6;
            while (l >= 8) {
                ((a = (b >>> (l -= 8)) & 0xff) || (x < (L - 2))) && (r += w(a));
            }
        }
        return r;
    }


    function encodeBase64(s) {
        return window.btoa(unescape(encodeURIComponent(s)));
    }

    // Public
    return {

        getBase64Image: getBase64Image,
        encodeBase64: encodeBase64,
        decodeBase64: decodeBase64


    };
// Singleton,therefore self executor
})();