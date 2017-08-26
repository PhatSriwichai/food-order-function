import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import users from './users';

admin.initializeApp(functions.config().firebase);
export const getUsers = functions.https.onRequest(users.getUsers)
export const addUsers = functions.https.onRequest(users.addUsers)
export const addTest = functions.https.onRequest((req, res) => {
    res.send(req.method)
})
exports.functions;