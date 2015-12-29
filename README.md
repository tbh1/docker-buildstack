#Dockerized Buildstack
This is a simple starting point for a containerized build pipeline using Docker and Docker-Compose.

##Motivation
- A fast and simple way to spin up a build pipeline
- A customizable build-server dashboard
- A way to keep the entire pipeline in source control

## Using this project:
- Fork this repository and clone
- Make sure you have [Docker](https://www.docker.com/) and [Docker-Compose](https://docs.docker.com/compose/install/) installed and working
- Run `docker-compose up` from the root of your clone
- Use git to track changes to the pipeline

The included dashboard is a simple Angular app. It should be easy to extend/customize to your liking.

![dashboard](https://github.com/toxicblu/docker-buildstack/blob/gh-pages/images/dashboard_preview.png)

##TODO: 
- make aggregated docker logs available in the dashboard
- Make jenkins install all missing plugins on initial run
