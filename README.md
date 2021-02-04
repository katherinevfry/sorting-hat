# Link to deployed app

https://kf-sorting-hat.netlify.app/

# Wrapping Things Up

## Name of the Project
Sorting Hat!
## Overview of the project
The sorting hat allows you to submit a name, which is then sorted into one of the four hogwarts houses. The name populates a card in the First Year Students area. The card displays the student's name, random hogwarts house, and the crest of the corresponding house. The user can expel a student, which will move that student's card into the Voldermort's Army area. 

If a user forgets to type a name, a friendly reminder appears to remind the user that he or she must enter a name. 

First year students are sorted alphabetically.

The application is designed responsively, so the user can use the application on a mobile device.
## Link to your wireframes/prototype
N/A
## Link to the deployed project 

https://kf-sorting-hat.netlify.app/

## Link to your project board 

https://github.com/katherinevfry/sorting-hat/projects/1

## Description of the user

The user is likely a huge Potterhead. She wants to know what Hogwarts house she would likely belong to. When she clicks the sort button, she is randomly assigned to a house. Should she dare press the expel button, she will immediately become a death eater, a member of Voldemort's evil army.

## List of features
- Jumbotron greeting the user
- Form that populates on button click
- Data entry point that stores the name value to an object on button click
- Function that assigns user to a random hogwarts house
- Hogwarts house crest displayed on student card
- Expel button which deletes the student card from the First Year Students and moves it to Voldermort's Army
- Warning message when the user tries to submit without a name
- All first year students are displayed alphabetically
- Responsive design allows user to use application on all screen sizes
## Screenshots of your project
![screenshot](https://github.com/katherinevfry/sorting-hat/blob/main/Screenshot%20(21).png)
## List of contributors and links to their GH profiles
n/a
## Link to Loom video walkthrough of your app 
https://www.loom.com/share/8414ea36ffdc41febc098a6ccd7a4758

# Sorting Hat

## Goals
The goal of this project is to test your knowledge and to have a FUN time stretching yourself on your FIRST independent application that will become a part of your portfolio.

Focus on MVP. Do not spend a ton of time styling initially. Hit functionality first and then spend time on the styling of the project using bootstrap.

- READ THROUGH ALL OF THE INFORMATION BELOW before planning how you will tackle the project.
- Check the Issue Tickets to organize your process. You will have all week in class to work on this in class. 
- PLEASE submit questions along with a link to an issue/discussion ticket to the entire instructional team if you need help. We will guide you to the resources that are available to you.
- On Saturday, everyone will present how far they got AND their favorite piece of code that they wrote for everyone to share in the Glory!
- MOST OF ALL HAVE FUN!!!!!

## Instructions
You are in charge of bringing the Hogwarts sorting hat to life! 

This is what the finished app should have:
- To start off with, you will use a [bootstrap jumbotron](https://getbootstrap.com/docs/4.0/components/jumbotron/) to have your sorting hat introduce itself and start the sorting process (by clicking on a button). The form should not be on the DOM until the button click happens.

- A [bootstrap form](https://getbootstrap.com/docs/4.1/components/forms/) will then appear to fill in the student's name and a button to sort. This should then assign the student to a random house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin). 

- On sorting a student, the form should clear and a [bootstrap card](https://getbootstrap.com/docs/4.1/components/card/) with the student's name and a random house assignment should print below the form. 

- You should also be able to expel a student after they have been sorted, which should remove their card from the student record.

In the end, your app will look something like: 
![Sorting Hat Mockup](https://github.com/nss-nightclass-projects/exercise-vault/raw/master/images/sorting-hat-mockup.png)

[See Demo](https://drt-sortinghat.netlify.app/)

## Technical Requirements
- You MUST plan your project and create issue tickets and a project board fro your project
- You MAY use the `printToDom()` function that we worked on in class, but you also need to be able to explain it if you use it
- You have to create a data structure for your project. Review all the elements that need to be on the DOM and create the structure accordingly
- You must use [Boostrap](https://getbootstrap.com/) to style your page components
- You must use a loop other than a `for loop`
- Your JS file should be comprised of functions, no actions should happen in your code outside of a function except for your initial `init()` function
- Your code MUST be YOUR code. Do not copy and paste code into your project. Type every bit of it out
- Your HTML and JS should all have proper indentation
- Helpful Form: An error message shows if a user tries to sort a student without filling out the form
- You should apply responsive design to your page (aka your app should be designed to work on small screens)

## Add Button Hints
When a new student is added an object should be created and that object should be pushed into an array of students that then prints to the DOM.

## Expel Button Hints
Think of a way you can expel students without just hiding those divs on the page. This would mean when the button is clicked you modify the array of students and pass the new array into your print to dom function.  Double hint - put a unique id in the student object when you create them.

## Optional Bonus
- House Colors: The color of the student's card changes depending on which house they were sorted. 
- Card Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.
