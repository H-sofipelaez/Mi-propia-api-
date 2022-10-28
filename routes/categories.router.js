const express = require('express')
const router = express.Router()

router.get("/",(req,res) => {
  res.json([
    {
      name: "Amor",


    },


    {
      name: "Tristeza",


    },


    {
      name:"Alegria",

    },


    {
      name:"Melancolia"
    },


    {
      name:"Disco"
    }

]
)

})

module.exports = router




