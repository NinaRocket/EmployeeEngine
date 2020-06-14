# EmployeeEngine

This application builds a website that displays a development team. Inquirer is used to prompt the user to answer questions in the command line. The first question will ask the user to select the role the employee holds.

![](/Assets/roleprompt.png)

When manager is selected, the following questions will be asked:

![](/Assets/Managerprompt.png)

But what if the user did not enter a valid email address or integer for office number or ID. Validation is used in the inquirer prompts to handle these:

![](/Assets/managervalidation.png)

The user will be asked to select a role once again. If an intern is then selected, the following questions are asked, again, validation is used for appropriate responses.

![](/Assets/intern.png)


Once again, the user will continue to be asked to select an employee role until the user selects none. Let's now select engineer, the following questions will be asked, again, validation is used for appropriate responses.

![](/Assets/engineer.png)

Now, if the user has entered all team members, they may select none. The command line will state that no employee was added and the html was created:

![](/Assets/none.png)

We will now open the team.html file in the browser:

![](/Assets/teamdisplay.png)

The team is displayed with working email and github links. 

The following is a link to a video of the application being used:

[Team Generator Video](https://vimeo.com/user116981336/review/429064500/9a582da750)



Technologies/languages used: inquirer, node, javascript, html, css, and jest was used for testing.
The link to this repo is located at: [Nina Rocket's GitHub](https://github.com/NinaRocket/EmployeeEngine)





