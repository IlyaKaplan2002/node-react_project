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
    owner: ObjectId,
}
```

## Trainings

```
{
    start: date,
    end: date,
    books: [ObjectId],
    owner: ObjectId,
}
```

## Statistics

```
{
    data: Date,
    pages: number,
    owner: owner,
}
```
