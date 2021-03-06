"use strict";

const getDate = function () {
    var date = new Date();

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();

    var fullDate = day + "-" + month + "-" + year;
    var fullTime = hour + min + sec;

    return {
        "day": fullDate,
        "time": fullTime
    }
}

exports.getDate = getDate;