# Tutorial 29: Resuelvo Prueba Técnica Front End para empresa de EE. UU.



[![Resuelvo Prueba Técnica Front End para empresa de EE. UU.](https://img.youtube.com/vi/-xbe8Fw1-d0/0.jpg)](https://www.youtube.com/watch?v=-xbe8Fw1-d0)

## Como correr este código

Desde la terminal ejecuta:

```sh
npm install
npm run dev
```

## La prueba ténica:

### Front End Sample Project

#### Internet choice awards web app

With the following data structure

```json
[
  {
    "name": "",
    "description": "",
    "year": "",
    "likes": 0,
    "dislikes": 0,
    "reviews": [""]
  }
]
```

Create 10 items with the data of your choice and create a Single Page Application with the following features

#### `/` All items view

The root route would allow the user to view a view with all the items and their most relevant information, the user should be able to toggle between a Table view and a Grid view.

On each of the items the user should be able to click a like/dislike button that updates the total rating of the item.

The user should be able to view the details page of the item from the table/grid view.

#### `/{slug}` Detail view

In the details view the user should be able to view all the data from a single item and allow the user to click a like/dislike button and write a text review. 

#### Consistent Global state

If the user refresh the page the likes/dislikes and reviews should be saved on local storage

#### Responsive

The SPA should look good on any resolution

#### VCS

Upload your project to a version control system of your choice (Github, Gitlab, Codeberg, Source Hut) that would allow us to inspect the code

#### Deploy

Deploy your SPA to a hosting provider and provide a link where we can access the app (Netlify, Zeit, GH Pages)

#### Notes

- You can use any React library you want but no design system libraries (Material Design, Bootstrap, Ant Design etc).
- You can choose any theme you like, a couple of examples include:
    - Best movies of all time
    - Best video games
    - Best books
    - Best restaurants around the block
    - Best music records
- We are looking for someone who has a good eye for UI/UX and can solve small problems by themselves
- We will focus on good programming patterns and code structure.
