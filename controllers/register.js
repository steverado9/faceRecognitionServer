const handleRegister = async (req, res, db, bcrypt) => {
    const { email, name, password } = req.body;
    if (!email || !name || !password) {
        return res.status(400).json('incorrect from submission')
    }
    const hash = bcrypt.hashSync(password);
    try {
        const data = await db.transaction(trx => {
            trx.insert({
                hash: hash,
                email: email
            }).into('login').returning('email')
            console.log('loginEmail', loginEmail);
        const user = await db('users')
            .returning('*')
            .insert({
                email: email,
                name: name,
            })
            console.log('user', user);
            res.json(user[0]);
            trx.commit.catch(trx.rollback)
        } catch (err) {
        res.status(400).json(err)
    }
    
     
            
           
            
       
        
    
    


// db.transaction(trx => {
//     trx.insert({
//         hash: hash,
//         email: email
//     })
//     .into('login')
//     .returning('email')
//     .then(loginEmail => {
//         console.log('loginEmail', loginEmail)
//         return db('users')
//         .returning('*')
//         .insert({
//             email: email,
//             name: name,
//         })
//         .then(user => {
//             console.log('user', user);
//             res.json(user[0]);
//         })
//     })
//     .then(trx.commit)
//     .catch(trx.rollback)
// })
// .catch(err => res.status(400).json(err))
}

module.exports = {
    handleRegister : handleRegister
}