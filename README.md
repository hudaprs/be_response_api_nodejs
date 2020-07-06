# Response API with NodeJS

Make your API nicer and readable, Version 1.0.0

## Read more about this code right here
[NodeJS - Make your response API nicely](https://medium.com/dev-genius/nodejs-make-your-api-response-nicely-f562f78cb67)

## Usage

```javascript
// Import the responseApi.js file
const { success, error, validation } = require('./responseApi');

// Make a request
app.get('/', async (req, res) => {
  // Do with validation here
  res.status(422).json(validation({username: 'Username is required.'}))

  try {
    // Dome some with success here
    res.status(200).json(success('OK', {user: 'Hi, John Doe.'}, res.statusCode));
  } catch(err) {
    // Do some with error here
    res.status(500).json(error('Something went wrong.', res.statusCode);
  }
});
```

## Example Success Response

```json
{
  "message": "OK",
  "error": false,
  "code": 200,
  "results": {
    "user": "Hi, John Doe."
  }
}
```

## Example Error Response

```json
{
  "message": "Something went wrong",
  "error": true,
  "code": 500
}
```

## Example Validation Response

```json
{
  "message": "Something went wrong",
  "error": true,
  "code": 422,
  "errors": {
    "username": "Username is required"
  }
}
```
