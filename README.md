<h1 align="center">
	<img src="public/logo192.png"> Second Helpings
</h1>

> A MERN stack project with a REST API

Second Helpings is a resource for students who are impacted by food insecurities. Second Helpings provides an online access point for event organizers and departments who have extra food to give out to students in need.

Second Helpings mission to help students with food insecurities and cut down the food thrown away on campus.

## [Webpage](http://www.cppsecondhelpings.net "Demo")

## Prerequisites
- [NodeJS](https://nodejs.org/en/ "NodeJS") 
- [npm](https://www.npmjs.com/get-npm "npm") 

## Installation 
### Create and connect a MongoDB cluster
1. [Create a MongoDB account. ](https://docs.mongodb.com/guides/cloud/account/ "Create a MongoDB account ")
2. [Create a MongoDB cluster. ](https://docs.atlas.mongodb.com/tutorial/create-new-cluster/ "Create a MongoDB cluster ")
3. [Configure a *user*. ](https://docs.atlas.mongodb.com/security-add-mongodb-users/ "Configure a user ")
4. [Get the connection string. ](https://docs.mongodb.com/guides/cloud/connectionstring/ "Get the connection string ")
5. Create `.env` file in the `backend` folder.
6. Paste the connection string from the cluster into the file replacing `<password>` with the *user* password. 

### Install dependencies
```bash
SecondHelpings> $ npm install
SecondHelpings/backend> $ npm install
```

### Build the project 
```bash
SecondHelpings> $ npm run build 
```

## Run the project
```bash
SecondHelpings> $ npm start 
```
The project will be open on port `5000` or the enviroment variable `PORT`

## API
Root endpoint: www.cppsecondhelpings.net/api

| Path  | Method  | Description  | Data Constraint |
| ------------ | ------------ | ------------ | ------------ |
| /events  | GET  | Read all events in the database  | {}
| /events/add  | POST  | Create a event to the database  | *Below* |
| /events/:id  | GET  | Read a specific event  | {} |
| /events/:id  | DELETE  | Delete a specific event  | {} |
| /events/:id  | POST  | Update a specific event  | {} |

##### /events
Content examples
```json
[
	{
		"_id":"123",
		"product_name":"Pizza",
		"quantity":6,
		"date_entered":"2021-02-02T05:26:06.249Z",
		"event_start":"2021-03-17T04:26:06.000Z",
		"event_end":"2021-04-30T04:26:06.000Z",
		"location":"Bld 1",
		"contact_info":"John Smith
		"description":"Pepperoni",
		"createdAt":"2021-02-02T05:26:26.585Z",
		"updatedAt":"2021-03-27T08:24:13.575Z",
		"__v":0
	},
	{
		"_id":"456",
		"product_name":"Sandwich",
		"quantity":19,
		"date_entered":"2021-02-02T05:37:24.255Z",
		"event_start":"2021-02-18T05:37:24.000Z",
		"event_end":"2021-02-19T05:37:24.000Z",
		"location":"Bld 2 ",
		"contact_info":"Jane Smith",
		"description":"Ham and Cheese",
		"createdAt":"2021-02-02T05:37:45.622Z",
		"updatedAt":"2021-03-28T07:10:05.393Z",
		"__v":0
	}
]
```

##### /events/add
Data constraints
```json
{
    "product_name": "[product name string]",
    "quantity": "[value between 1-2147483647]",
    "date_entered": "[ISO 8601 format]",
    "event_start": "[ISO 8601 format]",
    "event_end": "[ISO 8601 format]",
    "location": "[location string]",
    "contact_info": "[contact information string]",
    "description": "[description string]"
}
```
Data example 
```json
{
    "product_name": "French Onion Soup",
    "quantity": "100",
    "date_entered": "2021-03-29T03:19:05.117Z",
    "event_start": "2021-03-30T03:19:05.117Z",
    "event_end": "2021-03-29T05:19:05.117Z",
    "location": "Quad",
    "contact_info": "Dr. Johnson",
    "description": "Contains onion, butter, garlic, bay leaves, thyme sprigs, red win, all-purpose flour, beef broth and Gruyere"
}
```


## License
[MIT](https://github.com/amazingandyyy/mern/blob/master/LICENSE)
