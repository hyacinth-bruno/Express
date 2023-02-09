import Express, {Request, Response} from "express";

const app = Express();

app.use(Express.json());

///// methods
//GET => endpoint: http://localhost:800/
app.get("/", (req: Request, res: Response) => {
    res.json("This is get method");
});

//POST => endpoint: http://localhost:800/users
app.post("/users", (req: Request, res: Response) => {
    res.json("This is post method");
});


//DELETE => endpoint: http://localhost:8000/users/1
app.delete("/users/1", (req: Request, res: Response) => {
    //request, response
    res.json("This is delete method");
});


// PUT => endpoint: http://localhost:8000/users/1
app.put("/users/1", (req: Request, res: Response) => {
    res.json("This is put method");
});

// PATCH => endpoint: http://localhost:8000/users/1
app.patch("/users/1", (req: Request, res: Response) => {
    res.json("This is patch method");
});


// OPTIONS => endpoint: http://localhost:8000/
app.options("/", (req: Request, res: Response) => {
    res.json("This is options method");
});



const port = 8000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost: ${port}`);
});




/**
 import Express, {Request, Response} from "express": This line imports the Express.js library and destructures two types, Request and Response, from it. These two types are used to define the signature of the request and response objects in the handler functions.

const app = Express(): This line creates an instance of an Express.js application.

app.use(Express.json());: This line adds middleware to the Express.js application to parse incoming JSON requests.

app.get("/", (req: Request, res: Response) => { ... }: This line defines a route that responds to a GET request to the root endpoint ("/"). The function passed to app.get() handles the request and sends a JSON response with the message "This is get method".

app.post("/users", (req: Request, res: Response) => { ... }: This line defines a route that responds to a POST request to the "/users" endpoint. The function passed to app.post() handles the request and sends a JSON response with the message "This is post method".

app.delete("/users/1", (req: Request, res: Response) => { ... }: This line defines a route that responds to a DELETE request to the "/users/1" endpoint. The function passed to app.delete() handles the request and sends a JSON response with the message "This is delete method".

const port = 8000: This line sets the port number that the Express.js application will listen on.

app.listen(port, () => { ... });: This line starts the Express.js application and makes it listen on the specified port number. When the application is up and running, a message is logged to the console to indicate that the server is running on http://localhost:8000.
 */