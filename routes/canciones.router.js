const express = require('express')
const router = express.Router()

router.get("/",(req,res) => {
  res.json([
    {
      name: "tengo ganas",
      autor: "andres cepeda" ,


    },
    {
      name: "muelle de samblas",
      autor:"Mana",

    },
    {
      name: "Hasta que el cuerpo aguante",
      autor: "mago de oz",
    },

    {
      name: "Softly",
      autor:"clairo"
    },
    {
      name: "all the she wants",
      autor: "ace of base"
    }


]
)
})

module.exports = router
