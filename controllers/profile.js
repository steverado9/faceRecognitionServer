const handleProfileGet = async (req, res, db) => {
    const { id } = req.params;
    try {
        const user = await db.select('*').from('users').where({ id })
        if (user.length) {
            res.json(user[0])
        } else {
            res.status(400).json('Not found')
        }
    } catch (err) {
        console.log(res.status(400).json('error getting user'));
    }
}

// db.select('*').from('users').where({id})
// .then(user => {
//     if (user.length) {
//         res.json(user[0])
//     } else {
//         res.status(400).json('Not found')
//     }
// })
// .catch(err => res.status(400).json('error getting user'))

module.exports = {
    handleProfileGet
}