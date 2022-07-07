# Préréquis

- MongoDB installé sur le poste;
- Robo 3T ou Compass;

Lancer MongoDB :
Dans le dossier bin executer le fichier `mongod.exe`

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

**GET api/get-animals-by-location/:location**

Affiche la liste des animaux en fonction de la geoposition

Request body example

`{name: "", latin_name: "", animal_type: "", active_time: "", length_min: number, length_max: number, lifespan: number, habitat: "", diet: "", geo_range: "",image_link: ""}`

**DELETE api/animals/:id**

Suppression d'un animal

_USER_

**POST api/users**

Request body example

`{email:"",password:"",firstname:"",lastname: ""}`

**GET api/users**

**GET api/users/:id**

Affiche l'utilisateur en fonction de son id

_FEEDING_

**GET api/feedings**

**POST api/feedings**

Request body example

`{animal_name: "African Lion", diet: "Hoofed mammals, hares, small birds and reptiles", zoo_assistant: "user"}`
