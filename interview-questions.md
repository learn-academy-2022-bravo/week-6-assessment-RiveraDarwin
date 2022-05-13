# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: This invloves associations in the Cohort Model you would have a has_many relationship. A cohort has many students.

  Researched answer: An association is a connection between two Active Record models. Rails supports 6 types of associations.



2. Which RESTful routes must always be passed params? Why?

  Your answer: GET,PATCH,DELETE will require a params. In the form of :id.  

  Researched answer: ID will then point to the given value when an ID is passed in the route. Example: 'student/2' the student with an ID of 2.



3. Name three rails generator commands. What is created by each?

  Your answer:The 3 generate commands I've used have been Rails g Model, Rails g Controlller,Rails g resource

  Researched answer:Rails g Model: Creates a Model, Rails g Controlller: creates a Controller, Rails g resource: Generates a resource.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?
   <!-- this will call the students controller and return all students  -->
action: "GET"    location: /students
       <!-- This will fire up the POST method in the controller -->
action: "POST"   location: /students       
   <!--This will get the form to create a new student  -->
action: "GET"    location: /students/new
   <!-- This will call the student with the ID of 2 and return it -->
action: "GET"    location: /students/2  
   <!-- This will edit the information for the student with an ID of 2 -->
action: "GET"    location: /students/2/edit    
   <!-- This will update the information for the student with an ID of 2 -->
action: "PATCH"  location: /students/2      
   <!--  This will delete the student with an ID of 2-->
action: "DELETE" location: /students/2      



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

-As a user I can create a new to-do.
-As a user I can delete a completed task.
-As a user I can update an existing task.
-As a user I can view all tasks.
-As a user I can view tasks by :id.
-As a user I can confirm tasks update as changes occur.
-As a user I can view completed tasks.
-As a user I can view when tasks were created.
-As a user I can view when tasks were completed.
-As a user I can set tasks status like in progress.
