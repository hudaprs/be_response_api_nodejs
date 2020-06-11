# Response API with NodeJS

# Exampe Response

```json
{
  "message": "OK",
  "error": false,
  "code": 200,
  "results": {
    "user": "Huda Prasetyo"
  }
}
```

# Usage

```javascript
const { success, error } = require('./responseApi');

app.get('/', async (req, res) => {
  try {
    // Dome some with success here
    res.json(success('OK', {user: 'Huda Prasetyo'}, res.statusCode));
  } catch(err) {
    // Do some with error here
    res.json(error('Something went wrong', res.statusCode);
  }
});
```
