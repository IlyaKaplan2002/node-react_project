# node-react_project

You can run installation of all packages both backend and frontend from root directory
`npm run installation`

To run in dev mode both backend and frontend you can use in the root directory this command:
`npm run start:dev`

## Backend

To run backend in dev mode you can use in `backend` directory this command:
`npm run start:dev`

# Important: do not forget to create `.env` file, you can find an example in `.env.example`

## Frontend

To run frontend in dev mode you can use in `frontend` directory this command:
`npm start`

# Structure of DB

## Users

```
{
    name: string('John Doe'),
    email: string('test@mail.com'),
    password: string('hashed password)',
}
```

## Books

```
{
    name: string,
    author: string,
    year: number,
    pages: number,
    rating: number,
    review: string,
    owner: ObjectId (key to user),
}
```

## Trainings

```
{
    start: date,
    end: date,
    books: [ObjectId] (keys to books),
    owner: ObjectId (key to user),
}
```

## Statistics

```
{
    data: Date,
    pages: number,
    owner: owner (key to user),
}
```

# Structure of project

## Backend

```
    backend
        src
            controllers (dirs with controllers to each entity)
            helpers (all helpers with reexport)
            middlewares (all middlewares with reexport)
            models (files with all joi-models to each entity, with reexport)
            routes
                api (file with all routes to each entity, with reexport)
            service (dirs with all operations with db to each entity)
                schemas (files with shemas to each entity)
            app.js
            server.js

```

## Frontend

```
    frontend
        src
            api (dirs with all operations with our REST API to each entity)
                helpers (files with all helpers you need in your api, with reexport)
            components (dirs with all components)
                utils (util components)
                App.js
            constants (dirs with all non-secure constants we need)
            redux (dirs with reducer, actions, selectors with reexport to each entity)
                store.js
                rootReducer.js
            views (files with view to each page)
            index.js
```

### Component structure

```
    Component
        Component.js (markup and logic)
        Component.styled.js (styles)
        index.js (reexport)
```

### Redux entity structure

```
    entity
        reducer.js
        actions.js
        selectors.js
        index.js (reexport)
```
