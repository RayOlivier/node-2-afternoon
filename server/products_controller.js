module.exports = {
  create(req, res) {
    const db = req.app.get("db")
    const { name, description, price, imageurl } = req.body
    db.create_product([name, description, price, imageurl])
      .then(() => {
        res.sendStatus(200)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json("Oops!")
      })
  },
  getOne(req, res) {
    const db = req.app.get("db")
    const { id } = req.params
    db.read_product([id])
      .then((response) => {
        console.log("res", response)
        res.status(200).json(response)
      })
      .catch((err) => {
        res.status(500).json("Oops!")
        console.log(err)
      })
  },
  getAll(req, res) {
    const db = req.app.get("db")
    db.read_products().then((response) => {
      console.log("res", response)
      res.status(200).json(response)
    })
  },
  update(req, res) {
    const db = req.app.get("db")
    db.update_product([req.params.id, req.query.desc])
      .then(() => {
        res.sendStatus(200)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json("Oops!")
      })
  },
  delete(req, res) {
    const db = req.app.get("db")
    db.delete_product([req.params.id])
      .then(() => {
        res.sendStatus(200)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json("Oops!")
      })
  }
}
