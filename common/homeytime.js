'use strict';

/** ****************************************************************************************************
 * HomeyTime
 ** ****************************************************************************************************
 * Handling of insane localtime implementation for Homey.
 * Do NOT use this for anything other than display as it offset the UTC time!!!
 * @param homeyTime is the localtime as reported by the Date object on Homey
 * @param homey an instance of homey to get which timezone it is in
 */
function toLocalTime(homeyTime, homey) {
  const tz = homey.clock.getTimezone();
  const localTime = new Date(homeyTime.toLocaleString('en-US', { timeZone: tz }));
  return localTime;
}

/**
 * Returns the number of milliseconds until next hour
 */
function timeToNextHour(inputTime) {
  return 60 * 60 * 1000
  - inputTime.getMinutes() * 60 * 1000
  - inputTime.getSeconds() * 1000
  - inputTime.getMilliseconds();
}

/**
 * Rounds a time object to nearest hour
 */
function roundToNearestHour(date) {
  date.setMinutes(date.getMinutes() + 30);
  date.setMinutes(0, 0, 0);
  return date;
}

/**
 * Rounds a time object to start of the day in local time
 */
function roundToStartOfDay(time, homey) {
  const localTime = toLocalTime(time, homey);
  const localTimeDiff = Math.round((time.getTime() - localTime.getTime()) / (60 * 60 * 1000));
  localTime.setHours(localTimeDiff, 0, 0, 0);
  return localTime;
}

module.exports = {
  toLocalTime,
  timeToNextHour,
  roundToNearestHour,
  roundToStartOfDay,
};
