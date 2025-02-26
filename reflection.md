### Reflection

I managed to get the basic requirement done, which was to deploy to Vercel. I did end up having to delete deployments and my supabase schema a few times because when I reset my google auth there was always a session id in supabase I think and I just wanted it fresh, and because I copy and pasted the code from `schema.sql` as it was ino supabase, it made it not too manageable, but I managed it in the end.

I actually spent a lot of my time going through all the code in the files and trying to figure out what bit does what. I did quickly realise though that reading someone elses code is a lot harder to know what each bit does what, for example in all my previous assignments I know what each line does because I wrote it from scratch. I think given an extra day I would fully understand it. However it has made me feel if I am really job ready because I feel like I have managed this course so far at a relatively good level, but I dread having to go through a mature codebase and have to scan through hundreds of files.

- Fix page titles on post pages to match the post title ✅
- Handle the error when you click to vote while not logged in to show a nice error message 🤔

The extra goals I chose was the 2 above, I got the dynamic titles to work using the `generateMetaData` function, but spending 45 minutes realising that in next 14 the params object is not asynchronous.

As for handling the error when user votes when logged sort of works, it does not display an error but the buttons are disabled of there is no `userId` and there is also a title prop on the button html so that when you hover over the vote buttons a little thing appears to you must be logged in. I did try to use `react-toastify` to give a little toast and after looking online at some articles and following them, I then realised I would have to do a lot of refactoring some of the server components to client components and for the time I had left I ended up just removing all the code for it and uninstalling `react-toastify`.

I also managed to do a profile route that should display the user details.
