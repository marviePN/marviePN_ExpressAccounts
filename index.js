const express = require('express');
const app = express();
const Joi = require('joi');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//database sample
const courses = [
    {
        name:'Marvie' ,
        id: 1
    },
    {
        name: 'Deregino',
        id: 2
    },
    {
        name: 'Cauyan',
        id: 3
    }
];

app.get('/', (request, response) => {
    response.send(courses);
});


app.get('/courses/:id', (request, response) => {
    const course = courses.find(course => course.id === parseInt(request.params.id));
    //query database
    if(!course) response.status(404).send('Course does not exist');
    response.send(course);
});

app.post('/courses', (request, response) => {
    
    const result = validateData(request.body);
    if(result.error){
        response.status(404).send(result.error.details[0].message);
        return;
    }

    const course = {
        name: request.body.name,
        id: courses.length + 1
    }

    //push to database
    courses.push(course);
    response.send(course);
});

validateData = (course) => {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course.body, schema);
}

app.put('/courses/:id', (request, response) => {
    const course = courses.find(course => course.id === parseInt(request.params.id));
    if(!course) response.status(404).send('Course does not exist');
    const {error} = validateData(request.body);
    if(error){
        response.send(error);
        return;
    }

    course.name = request.body.name;
    response.send(course);
});

app.delete('/courses/:id', (request, response) => {
    console.log('delete');
    const course = courses.find(course => course.id === parseInt(request.params.id));
    if(!course) response.status(404).send('Course does not exist');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    response.send('Deleted');
});

app.listen(3000, () => {
    console.log('Listening on port : 3000');
});