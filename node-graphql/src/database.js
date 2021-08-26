
// node-graphql/src/schema.js

const students = [
    {
      id: 1,
      email: 'noleykuz01@yahoo.com',
      fullName: 'Okafor Emmanuel',
      dept: 'Software Engineering',
      enrolled: true,
    },
    {
      id: 2,
      email: 'ebere75@yahoo.com',
      fullName: 'Ugwu Ebere',
      dept: 'Data Engineering',
      enrolled: true,
    },
    {
      id: 3,
      email: 'job123@yahoo.com',
      fullName: 'Edeh Job',
      dept: 'System Security',
      enrolled: false,
    },
    {
        id: 4,
        email: 'Ezemichael@yahoo.com',
        fullName: 'Eze Michael',
        dept: 'Data science',
        enrolled: true,
    },
    {
        id: 5,
        email: 'iwuchukwu21@yahoo.com',
        fullName: 'Okafor Iwuchukwu',
        dept: 'Statistics',
        enrolled: true,
    },
    {
        id: 6,
        email: 'peacemartin',
        fullName: 'Martin Peace',
        dept: 'Mathematics',
        enrolled: false,
    },
  ]
  
  module.exports = {
    students,
  }