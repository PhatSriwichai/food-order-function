import admin from 'firebase-admin';
import user from './user';

const User = admin.database().ref('/users')
const Message = admin.database().ref('/message')

export const database = {User, Message}
export const models = {User: user}
// export default {database, models}