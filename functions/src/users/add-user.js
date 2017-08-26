import admin from 'firebase-admin';
export const addUsers = async (req, res) => {
    // const { user } = req.body;
    // admin.database().ref('/users').push({ 
    //     name: user.displayName,
    //     avatar: user.photoURL,
    //     uid: user.uid
    // }).then(snapshot => {
    //     res.redirect(303, snapshot.ref);
    // });
    try {
        admin.database().ref('/message').once('value')
            .then(snapshot => {
                res.send(snapshot)
            })
        
    } catch(err) {
        res.status(500).send(err)
    }
    
   
}
