## Download and launch

Download the code as a zip file or copy the SSH key from Git hub. 

Open a terminal in a code program such as VS code.
 If you copied the SSH key, then write "git clone" in the terminal and paste the SSH key. Write "npm install" and "node -v" if the version is lower than 20, install it and write "nvm use 20". 
 After that, write "npm run dev". Press the command key and the link http://localhost:3000. 
 
 If you downloaded the zip archive, unzip it, open it with a code reader, and repeat all the commands in the terminal starting with "npm install". And follow the link.


## Getting Started

First, run the development server:

npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## About the project

In the project, I made similar components and pages to the ones you sent me in a message with a link to the site.  
I used the FSD architecture to make file nesting more understandable. 
In the api folder there is Mock JSON, logic and types. In the app folder, I divided the pages into two types. 
In the ui folder, I placed components that are used only on those pages. 
The shared folder contains small elements and components that are used in many places. In the widgets folder, there are larger components that are more important, such as the footer and the hamburger menu.  
I used clsx to make it easier to use styles.

