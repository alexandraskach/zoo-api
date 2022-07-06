# Installation & lancement de l'API

` npm install`

` nodemon index.js`

# Routes

_ANIMAL_

**POST api/animals**

Request body example

`{name: "", latin_name: "", animal_type: "", active_time: "", length_min: number, length_max: number, lifespan: number, habitat: "", diet: "", geo_range: "",image_link: ""}`

**GET api/animals**

**PUT api/animals/:id**

Request body example

`{name: "", latin_name: "", animal_type: "", active_time: "", length_min: number, length_max: number, lifespan: number, habitat: "", diet: "", geo_range: "",image_link: ""}`

**DELETE api/animals/:id**

_USER_

**POST api/users**

**GET api/users**

_FEEDING_

**GET api/feedings**

**POST api/feedings**

Request body example

`{animal_name: "African Lion", diet: "Hoofed mammals, hares, small birds and reptiles", zoo_assistant: "user"}`
