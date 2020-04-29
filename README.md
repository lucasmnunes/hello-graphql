# hello-graphql
A soft project to exercise about queries and mutations in GraphQL.

### To Execute
OBS: you must have NPM installed.

1. Clone the repository;
2. In "hello-graphql" folder, run ```npm install``` to install all project dependencies;
3. Run ```npm start``` to star the application.

### To Use
After doing the above steps:

1. Open your favorite browser;
2. Type ```localhost:4000```.

### Examples

##### Queries
After Apollo Server is running:

```query { hi }```

```drivers { id, name, country }```

```driver(id: 1) { name }```

##### Mutations
After Apollo Server is running:

```mutation { addDriver ( data: {	name: "New Pilot Name", country: "New Pilot Country" } ) { id, name } }```

```mutation { alterDriver (filter: { id: 1 } data: { name: "New name", country: "New Country" } ) { id, name } }```

```mutation { deleteDriver ( filter: { id: 4 } ) { id, name } }```