let myDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.setDay = function (day) {
        this.day = day;
    }

    this.setMontt = function (month) {
        this.month = month;
    }

    this.setYear = function (year) {
        this.year = year;
    }

    this.getDay = function () {
        return this.day;
    }

    this.getMonth = function () {
        return this.month;
    }

    this.getYear = function () {
        return this.year;
    }

    this.setDate = function (day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
        return this.day + this.month + this.year;
    }
};

let date = new myDate(21,04,1996);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(day + "/" + month + "/" + year);

date.setDate(10,10,2019);
day = date.getDay();
month = date.getMonth();
year = date.getYear();
alert(day + "/" + month + "/" + year);

date.setDate(02,03,2020);
day = date.getDay();
month = date.getMonth();
year = date.getYear();
alert(day + "/" + month + "/" + year);
