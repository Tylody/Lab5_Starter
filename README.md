# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Check your understanding:
1. I would not use a unit test to test the "message" feature of a messaging application, as it would involve writing and sending a message from one user to another. This would require writing a message to the database, testing confirmation of sent messages, testing successful reception of messages on the other user's end, and testing successful message history saving, and potentially other moving parts. Unit tests are meant for debugging on a small scale, however the message feature is on the feature-level, and changing other features may affect this test, therefore it is ill-suited to a unit test.
2. I would use a unit test on the max message length feature, as it is is a single encapsulated unit as part of the message content unit. We would simply need to retrieve the message content unit, and then test if the app successfully recognizes when the message length has exceeded the max, and modifying other app features would likely not affect this, so it is well-suited to a unit test.

Site Links:
[Expose](https://tylody.github.io/Lab5_Starter/expose.html)
[Explore](https://tylody.github.io/Lab5_Starter/explore.html)