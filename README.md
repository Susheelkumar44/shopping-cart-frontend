# Shopping-cart applicaton
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Running on Docker and Hosting on AWS
1.	Create EC2-Instance on AWS and install docker in it. Then Copy angular code inside home directory.

2.	Configure your nginx with the help of nginx.conf:

	To tell NGINX, which files to serve under which domain, we need to provide it configuration file.

	This configuration has to be in a file called "nginx.conf" and be located in the projects' root. Inside of that file, we configure NGINX to listen on port 80 and server the index.html file from the defined directory.

3.	Dockerize the code with the help of Docker file.

	Follow below commands to dockerize:
	docker build -t "image_name" .
	// . here refers to the current directory where Docker file exist.
 
	After image is successfully built run the container using below command
	docker run -i -t -p 80:80 "image_name"
 
	//With -p we define a port mapping.  Basically, we define that the port 80 of our container should be exposed to the port 80 of our host machine. -i -t to run interactive container mode.
 
 