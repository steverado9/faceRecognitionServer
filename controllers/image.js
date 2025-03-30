const handleImage = async (req, res) => {
  const { id } = req.body;
  try {
    const entries = await db('users').where('id', '=', id).increment('entries', 1).returning('entries');
    console.log(res.json(entries[0]));
  } catch (err) {
    console.log(res.status(400).json('unable to get entries'));
  }
}

// db('users').where('id', '=', id)
//     .increment('entries', 1)
//     .returning('entries')
//     .then(entries => {
//         res.json(entries[0]);
//     })
//     .catch(err => res.status(400).json('unable to get entries'));