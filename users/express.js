
const express = require('express');
const app = express();



// app.get('/', (req, res) => {
//   return res.send('Received a GET HTTP method');
// });
// app.post('/', (req, res) => {
//   return res.send('Received a POST HTTP method');
// });
// app.put('/', (req, res) => {
//   return res.send('Received a PUT HTTP method');
// });
// app.delete('/', (req, res) => {
//   return res.send('Received a DELETE HTTP method');
// });
// app.listen(3000, () => {
//   console.log('Listening on port : 3000');
// });



// app.get('/users', (req, res) => {
//   return res.send('GET HTTP method on user resource');
// });
// app.post('/users', (req, res) => {
//   return res.send('POST HTTP method on user resource');
// });
// app.put('/users', (req, res) => {
//   return res.send('PUT HTTP method on user resource');
// });
// app.delete('/users', (req, res) => {
//   return res.send('DELETE HTTP method on user resource');
// });
// app.listen(3000, () => {
//   console.log('Listening on port : 3000');
// });



// app.get('/users', (req, res) => {
//   return res.send('GET HTTP method on user resource');
// });
// app.post('/users', (req, res) => {
//   return res.send('POST HTTP method on user resource');
// });
// app.put('/users/:userId', (req, res) => {
//   return res.send(
//     `PUT HTTP method on user/${req.params.userId} resource`,
//   );
// });
// app.delete('/users/:userId', (req, res) => {
//   return res.send(
//     `DELETE HTTP method on user/${req.params.userId} resource`,
//   );
// });


let users = {
  1: {
    id: '1',
    username:'Marvie',
  },
  2:{
    id: '2',
    username:'Tugna'
  }
};


app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

app.post('/users', (req, res) => {
  return res.send(users[req.params.userId]);
});
app.put('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});
app.delete('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});


app.listen(3000, () => {
  console.log('Listening on port : 3000');
});
