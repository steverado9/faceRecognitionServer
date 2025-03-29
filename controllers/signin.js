const handleSignin = (db, bcrypt) => async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json('incorrect from submission')
    }
    try {
        const data = await db.select('email', 'hash').from('login').where('email', '=', email);
        console.log('data', data);
        const isValid = bcrypt.compareSync(password, data[0].hash)
        console.log('isValid', isValid);
        if (isValid) {
            const user = await db.select('*').from('users').where('email', email).debug(true);
            console.log('user', user);
            res.json(user)
        } else {
            res.status(400).json('wrong credentials')
        }
    } catch (err) {
        console.log('err', err);
        res.status(400).json('wrong credentials');
    }

    // return db.select('email', 'hash').from('login')
    // .where('email', '=' , email)
    // .then(data => {
    //     const isValid = bcrypt.compareSync(password, data[0].hash)
    //     if (isValid) {
    //         db.select('email', 'name').from('users')
    //             .where('email', '=', email)
    //             .then(user => {
    //                 console.log('user', user);
    //                 res.json(user)
    //             })
    //             .catch(err => res.status(400).json('unable to get user'))
    //     } else {
    //         res.status(400).json('wrong credentials')
    //     }
    // })
    // .catch(err => res.status(400).json('wrong credentials'))


}

module.exports = {

    handleSignin
}