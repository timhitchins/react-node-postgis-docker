## Install Docker

Follow the docker install instructions.

Make a new directory and clone this repo.
```
mkdir property-praxis && cd property-praxis
git clone ...
```

To run this stack in development, navigate to the 
root directory of the repo and run:
```
docker-compose up --build
docker-compose up
```

To run the front-end build in Nginx, naigate to the 
client directory and run:
(you will not see any output)
```
docker build .
docker run -p 8080:80 \<containerid\>
```
 