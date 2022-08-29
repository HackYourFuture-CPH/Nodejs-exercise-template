# Exercises

We will be making an api for getting movies 🎞📽🎥🎦🎬

## Setup

While in `/Nodejs-exercise-template/week2`, run:

`npm install`. 

**Do you remember how to run server? If not, can you find out from some file in the root of this directory?** 

Try and begin by getting an overview of the project: what file is called when the server is started? What routes is that setting up? and so on. 

## Requirements

Check the [movies router file](./src/backend/api/movies-router.js). This is where you will be creating your routes. The `movies/` route has even been created for you (now you just need to return the movies). Pass back all the values from the endpoints in a JSON object with a key of `data` and then the information to be passed back. An example would be like:

```json
{
    "data": [
        {"title": "'71","year": 2014,"rating": 7.2,"votes": 41702,"running_times": 5940}
    ]
}
```

If returning a single item, do not return the information in an array, but an object instead:

```json
{
    "data": {
        "title": "'71",
        "year": 2014,
        "rating": 7.2,
        "votes": 41702,
        "running_times": 5940
    }
}
```


|Route|Requirement|
|---|---|
| `/api/movies/` | Return all movies |
| `/api/movies/<id>` | Return a single movie with that matching ID  |
| `/api/movies?beginYear=<year1>&endYear=<year2>` | Returns all movies with year between `beginYear` and `endYear`  |
| `/api/movies?beginYear=<year1>&endYear=<year2>&minRating=<minRating>` | Returns all movies with year between `beginYear` and `endYear` that are also of rating `minRating` or better |

Finally do some error handling for cases where `beginYear`, `endYear` or `minRating` are not specified.

## "isChromeBrowser" middleware

Create a middleware function that creates a key on the `request` object called `isChromeBrowser`. If the browser accessing the website is a chrome browser it should be assigned to `true`, otherwise `false`.

You can add this middleware to the [app.js](./src/backend/app.js)

Remember to test that the middleware works!
