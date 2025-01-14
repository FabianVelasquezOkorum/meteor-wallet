import { ContactsCollection } from './ContactsCollection.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('allContacts', function publishContacts() {
  return ContactsCollection.find();
});
Meteor.publish('contacts', function publishContacts() {
  return ContactsCollection.find({ archived: { $ne: true }});
});