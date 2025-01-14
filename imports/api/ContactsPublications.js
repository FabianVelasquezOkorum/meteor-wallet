import { ContactsCollection } from './ContactsCollection.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('contacts', function publishContacts() {
  return ContactsCollection.find();
});