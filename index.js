const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require('./data/courses.json');
const allCourses = require('./data/allCourses.json')

app.get('/', (req, res) => {
      res.send('Api Working')
})

app.get('/courses', (req, res) => {
      res.send(courses)
})

app.get('/all-courses', (req, res) => {
      res.send(allCourses)
})

app.get('/course-detail/:id', (req, res) => {
      const id = req.params.id;
      const providedCourses = allCourses.find(course => course._id === id);
      res.send(providedCourses)
})

app.get('/course/:id', (req, res) => {
      const id = req.params.id;
      const providedCourses = allCourses.find(course => course._id === id);
      res.send(providedCourses)
})


app.listen(port, () => {
      console.log('Learning Platform Server Runnig on port', port);
})