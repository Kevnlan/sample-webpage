var secondsPerMin = 60;
var minPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;

document.write("Time in the year");
var daysOfTheYear = (daysPerWeek * weeksPerYear) + 1;
var secondsPerDay = secondsPerMin * minPerHour * hoursPerDay;
var minsPerDay = minPerHour * hoursPerDay;
var secondsPerWeek = secondsPerDay * daysPerWeek;
var minsPerWeek = minsPerDay * daysPerWeek;
var hoursPerWeek = hoursPerDay * daysPerWeek;
var secondsPerYear = secondsPerDay * daysOfTheYear;
var minsPeryear = minsPerDay * daysOfTheYear;
var hoursPerYear = hoursPerDay * daysOfTheYear;

document.write("<br>")
document.write("There are " + secondsPerDay + " seconds in a day");
document.write("<br>")
document.write("There are " + minsPerDay + " minutes in a day");
document.write("<br>")
document.write("There are " + secondsPerWeek + " seconds in a week");
document.write("<br>")
document.write("There are " + minsPerWeek + " minutes in a week");
document.write("<br>")
document.write("There are " + hoursPerWeek + " hours in a week");
document.write("<br>")
document.write("There are " + secondsPerYear + " seconds in a year");
document.write("<br>")
document.write("There are " + minsPeryear + " minutes in a year");
document.write("<br>")
document.write("There are " + hoursPerYear + " hours in a year");
document.write("<br>")
document.write("There are " + daysOfTheYear + " days in a year");
