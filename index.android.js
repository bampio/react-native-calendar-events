'use strict';

import { NativeModules } from 'react-native';

const RNCalendarEvents = NativeModules.CalendarEvents

export default {

  authorizationStatus () {
    return RNCalendarEvents.getCalendarPermissions()
  },

  authorizeEventStore () {
    return RNCalendarEvents.requestCalendarPermissions()
  },

  fetchAllEvents (startDate, endDate, calendars = []) {
    return RNCalendarEvents.fetchAllEvents(startDate, endDate, calendars)
  },

  findCalendars () {
    return RNCalendarEvents.findCalendars();
  },

  findEventById (id) {
    return RNCalendarEvents.findEventById(id);
  },

  saveEvent (title, details, options = {}) {
    return RNCalendarEvents.saveEvent(title, details, options)
  },

  removeEvent (id, options = {futureEvents: false}) {
    return RNCalendarEvents.removeEvent(id, options)
  },

  removeFutureEvents (id, options = {futureEvents: true}) {
    return RNCalendarEvents.removeEvent(id, options)
  },

  async getSources() {
    return RNCalendarEvents.getSources();
  },

  async saveCalendar(title,sourceIdentifier){
    return RNCalendarEvents.saveCalendar(title,sourceIdentifier);
  },

  async removeCalendar(identifier){
    return RNCalendarEvents.removeCalendar(identifier);
  },
}
