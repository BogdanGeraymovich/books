#Book api

##Get all books
GET /books
####Response
```json
[{
    "_id":"af0775ca-73f2-4c83-8e30-39400be1ea8a",
    "title":"454353454",
    "rate":7,
    "__v":0}, {
    "_id":"5e2ee1d8-f064-4fcb-8efa-0935e3ac85ca",
    "title":"454353454",
    "rate":1,
    "__v":0
}]
```
##Create new book
POST /books

####Request body
```json
{
    "title":"454353454",
    "rate":7
}
```

###Response
```json
[{
    "_id":"af0775ca-73f2-4c83-8e30-39400be1ea8a",
    "title":"454353454",
    "rate":7,
    "__v":0
}]
```
##Get one book by id
GET /books/:id

###Response
```json
[{
    "_id":"af0775ca-73f2-4c83-8e30-39400be1ea8a",
    "title":"454353454",
    "rate":7,
    "__v":0
}]
```

##Rate book by id
PATCH /books/:id

###Response
```json
[{
    "_id":"af0775ca-73f2-4c83-8e30-39400be1ea8a",
    "title":"454353454",
    "rate":7,
    "__v":0
}]
```