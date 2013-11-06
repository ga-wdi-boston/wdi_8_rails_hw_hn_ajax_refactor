# Ajax Homework

Refactor your Hacker News OR Reddit assignment that we built in Sinatra many weeks ago. Note, this code may feel foreign, like someone else wrote it!

In refactoring, you should make it so that we are using jQuery and AJAX for as much interaction as possible. Adding new posts, comments and upvotes should all be done with AJAX requests. Loading the posts and comments should happen with AJAX as well. 

## Bonuses

- Implement user login, either with Bcrypt or Devise (using Devise in Sinatra is non-standard, poorly documented and hard. I suggest rolling your own with Bcrypt).
- Make it so that when user are logged in, posts and comments they make are properly attributed to them. Each user should only have one vote on each item they vote on. 
- Deploy to Heroku
- Figure out delete. We'll talk about this more tomorrow. Hint: You need to return javascript and use ids...
