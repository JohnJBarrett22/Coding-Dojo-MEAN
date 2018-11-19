// Assignment: Intro to MongoDB
// For This section, we want you to do the following operations in a MongoDB database. Work with a partner or a small group so everyone gets a chance to collaborate and work as a team. For some of these, you may have to refer to MongoDB's operator documentation. This is one of the most important assignments in this section, make sure you answer all questions and take notes for future assignments.

// Create a database called 'my_first_db'.
use my_first_db

// Create students collection.
db.createCollection("students")

// Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
// Create 5 students with the appropriate info.
db.students.insert({name:"Rosslyn", home_state:"Washington", lucky_number:77, birthday:{month:1, day:27, year:1983}})
db.students.insert({name:"John", home_state:"California", lucky_number:22, birthday:{month:5, day:22, year:1982}})
db.students.insert({name:"Matt", home_state:"Texas", lucky_number:68, birthday:{month:2, day:11, year:1985}})
db.students.insert({name:"Ross", home_state:"Idaho", lucky_number:42, birthday:{month:12, day:4, year:1987}})
db.students.insert({name:"Jairo", home_state:"Arizona", lucky_number:13, birthday:{month:5, day:15, year:1995}})

// Get all students.
db.students.find()
// Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
db.students.find({$or:[{home_state:"California"},{home_state:"Washington"}]})

// Get all students whose lucky number is:
// greater than 3
db.students.find({lucky_number: {$gt:3}})

// less than or equal to 10
db.students.find({lucky_number: {$lte:10}})

// between 1 and 9 (inclusive)
db.students.find({ $and: [{lucky_number: {$gte:1}}, {lucky_numbers: {$lte:9}}]})

// Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.update({},{$set:{interests:["coding", "brunch", "MongoDB"]}},{multi:true})

// Add some unique interests for each particular student into each of their interest arrays.
db.students.update({name:"Rosslyn"},{$push:{interests:"silkscreening"}})
db.students.update({name:"John"},{$push:{interests:"weight training"}})
db.students.update({name:"Matt"},{$push:{interests:"rap"}})
db.students.update({name:"Ross"},{$push:{interests:"Nintendo"}})
db.students.update({name:"Jairo"},{$push:{interests:"cars"}})

// Add the interest 'taxes' into someone's interest array.
db.students.update({name:"John"},{$push:{interests:"taxes"}})

// Remove the 'taxes' interest you just added.
db.students.update({name:"John"},{$pull:{interests:"taxes"}})

// Remove all students who are from California (or Washington).
db.students.remove({$or:[{home_state:"California"},{home_state:"Washington"}]})

// Remove a student by name. 
db.students.remove({name:"Ross"})

// Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({lucky_number:{$gt:5}},true)

// Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.insert({},{$set:{number_of_belts:0}},{multi:true})

// Increment this field by 1 for all students in Arizona.
db.students.update({home_state:"Arizona"},{$inc:{number_of_belts:1}},{multi:true})

// Rename the 'number_of_belts' field to 'belts_earned'
db.students.update({home_state:"Arizona"},{$inc:{number_of_belts:1}},{multi:true})

// Remove the 'lucky_number' field.
db.students.update({},{$unset:{lucky_number:""}},{multi:true})

// Add a 'updated_on' field, and set the value as the current date.
db.students.update({},{$currentDate:{"updated_on":{$type:"date"}}},{multi:true})