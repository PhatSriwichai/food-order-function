// import {database, models} from '../models'
import admin from 'firebase-admin';
export const getUsers = (req, res) => {
    const original = req.query.text;
    admin.database().ref('/message').push({ original: original }).then(snapshot => {
        res.redirect(303, snapshot.ref);
    });
}
