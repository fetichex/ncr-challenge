***********************************************************
**               NCR Challenge Version 1.0               **
***********************************************************
- Date: 09/11/2022
- Author: Diego Cano Mera
- Phone: +541159965231
- [linkedin](https://www.linkedin.com/in/diegocano-fullstackdeveloper/)
- [Portfolio](https://portfolio-diego-cano.netlify.app/)
- Email: diegocanomera@gmail.com

------------------------------------------------------------
Development Notes:

The project is distributed in two folders
/frontend: The frontend was developed using: React, zustand, wouter, axios, styled-components
	       The frontend invokes the backend using Fastify.
		   
/backend: The backend invokes to the external backend system 
		  <<https://api.npoint.io/97d89162575a9d816661>>
		  The backend exposes an endpoint to retrieve the 
		  accounts information filtered by $, u$s, CA, CC  

The decision regarding the filter in the backend was taken 
thinking about the number of accounts that the endpoint might
return. 
This filter can be placed on the front-end side after it 
invokes the endpoint using states.


------------------------------------------------------------
Installation Notes:

- Clone the repository Link: 
- Go to the frontend folder
- If you need to check, execute the frontend's tests using the command:
	npm test
To start the application:

- On the frontend folder, execute the commands below:
	npm install (or npm i)
	npm run dev
	or
	npm run build
	npm tun preview
- Review the console to confirm the frontend is up and running.
- Go to the backend folder
- Execute the commands below:
	npm install (or npm i)
	npm run dev
- Review the console to confirm the backend is up and running.

------------------------------------------------------------
Usage Notes: 

You can access to the NCR Challenge UI using the URL:  http://localhost:5173




