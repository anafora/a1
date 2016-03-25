'use strict'; // However, no fetch, no let , and no const.

var app = {
    image: null,
    imgOption: null,
    imgData: null,
    uuid: null,
    urlGetAllReviews: 'https://griffis.edumedia.ca/mad9022/reviewr/reviews/get/',
    urlGetReview: 'https://griffis.edumedia.ca/mad9022/reviewr/review/get/'
    ,
    urlSetNewReview: 'https://griffis.edumedia.ca/mad9022/reviewr/review/set/',

    // Application Constructor
    initialize: function() {
        //document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('DOMContentLoaded', this.onDeviceReady, false);
        // we change it to DOMContentLoaded because it will not initiate any code since a browser is not a device.
        // default does not exist. It is up to the browsers choice. However, for cordova, it should be false.

    },
    onDeviceReady: function() {
        // this.ajaxCall();

        // get the device uuid, note: we will use the device plugin for this.

        app.uuid = 4242;  //device.uuid;*************************************************************************************************
        // (supposed to be this but we fake it because it is a browser now.)
        // better to use app instead of 'this' because it is clearer to understand

        console.log(app.uuid);

        // FormData interface provides an easy way to construct

        var params = new FormData();
        params.append('uuid', app.uuid);
        // if the key 'uuid' exists, then it updates the key. If it does not, then it adds the key.

        app.ajaxCall(app.urlGetAllReviews,
                     params,
                     app.gotList,
                     app.ajaxErr);


    },
    ajaxCall: function(url, formData, success, fail) {
        //url - the url to call for xhr
        //formData - the data to be sent to the AJAX call
        //success - the functino to call when successful
        //fail - the function to call

        //you have to make three different ajax calls

        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', success);
        xhr.addEventListener('error', fail);
        xhr.send(formData);


    },

    gotList: function(ev) {
        console.log(ev);

    },

    ajaxErr: function(err) {
        console.log(err.message);
        //Houston we have an AJAX problem.
    }
};

app.initialize();




// Bind Event Listeners
//
// Bind any events that are required on startup. Common events are:
// 'load', 'deviceready', 'offline', and 'online'.

//bindEvents: function() {
//},
// In Tony's opinion, bindEvent seems to be unnecessary
