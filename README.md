# hello-graphql
A soft project to exercise about queries and mutations in GraphQL.

### To Execute
OBS: you must have NPM installed.

1. Clone the repository;
2. In "hello-graphql" folder, run ```npm install``` to install all project dependencies;
3. Run ```npm start``` to start the application.

### To Use
After doing the above steps:

1. Open your favorite browser;
2. Type ```localhost:4000```.

### Examples

##### Queries:
After Apollo Server is running:

```query {

	drivers { 
		id
		name
		country 
	}
	
	driver(id: 1) { 
		name
		country
	}

}
```

##### Mutations:
After Apollo Server is running:

```
mutation { 
    
    addDriver ( 
        data: {	name: "New Pilot Name", country: "New Pilot Country" }
    ) { id, name }
    
    alterDriver (
        filter: { id: 1 } 
        data: { name: "New name", country: "New Country" } 
    ) { id, name }
    
    deleteDriver ( 
        filter: { id: 4 } 
    ) { id, name }
    
}
```