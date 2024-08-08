The project's deployment Link is directly located in the description! 
If you desire to install it, it is of utmost importance to know that his program needs the framework Flask to be executed correctly. There are several options for doing that: 


Option 1: Run the Flask app locally and share your IP address

Run the Flask app using python tax_calculator.py (assuming that's the name of your Python file)
Open a web browser and navigate to http://localhost:5000 (or the IP address and port number you specified in your Flask app).
Share your IP address with the person you want to show the website to. For example, if your IP address is 192.168.1.100, they can access the website by visiting http://192.168.1.100:5000 in their web browser.
Note: This method only works if the person you're sharing with is on the same network as you

Option 2: Deploy to a cloud platform or hosting service

Choose a cloud platform or hosting service, such as Heroku, AWS, Google Cloud, or Microsoft Azure.
Create an account and set up a new project or instance
Follow the platform's instructions to deploy your Flask app. This typically involves creating a requirements.txt file, installing dependencies, and configuring the app to run on the platform.
Once deployed, you'll receive a public URL that you can share with others.
if you deploy to Heroku, you might get a URL like https://tax-calculator.herokuapp.com

Option 3: Use a tunneling service

Install a tunneling service like ngrok or localtunnel.
Run the tunneling service to create a temporary public URL that forwards requests to your local machine.
Share the public URL with the person you want to show the website to.
For example, with ngrok, you might run ngrok http 5000 and get a public URL like https://123456.ngrok.io
