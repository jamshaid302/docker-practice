# Docker Setup

## Install Docker
  - Ensure Docker is installed on your system. You can download it from the Docker website.
  - Docker Commands
    - Check Docker version:
      ```bash
      docker --version
      ```
      
    - Build Docker image:
      ```bash
      docker build -t docker-practice .
      ```
      
    - Run Docker image in a container:
      ```bash
      docker run -d -p 7000:7000 docker-practice
      ```
      
    - Save Docker image as a .tar file:
      ```bash
      docker save -o docker-practice.tar docker-practice
      ```
      
    - Load Docker image from a .tar file:
      ```bash
      docker load -i docker-practice.tar
      ```
      
## Create Dockerfile in the Project
  - Here is an example Dockerfile for your project:
    ```bash
    FROM node:20-alpine
    WORKDIR /app
    
    COPY package.json .
    COPY package-lock.json .
    
    RUN npm install

    COPY . .

    EXPOSE 7000

    CMD ["npm", "start"]
    ```

## How to Share the Docker Image with Anyone
  - Create an account on Docker Hub:
    ```bash
    Go to Docker Hub and create an account.
    
    Create a repository on Docker Hub:
      - Create a new repository on your Docker Hub account.

    Push the image to the repository:
      - Tag the image:
        - docker tag docker-practice your-dockerhub-username/testing:latest

      - Push the image:
        - docker push your-dockerhub-username/testing:latest

    Share the repository link:
      - Share the Docker Hub repository link with others.

    Pull the image:
      - Pull the image using the repository link:
        - docker pull your-dockerhub-username/testing:latest

    Run the Docker image:
      - Run the pulled image in a container:
        - docker run -d -p <host-port>:<container-port> your-dockerhub-username/testing:latest

    For example, if your Express app runs on port 3000:
      - docker run -d -p 3000:3000 your-dockerhub-username/testing:latest
    ```
    
## Why Use docker-compose up
  ```bash
  The docker-compose up command is used to start and run multi-container Docker applications defined in a docker-compose.yml file. Docker Compose simplifies managing and running           multiple Docker containers as a single service, making it easier to define, configure, and orchestrate complex applications.
  ```

## Example docker-compose.yml File
  - Here is an example of a docker-compose.yml file for an Express.js application with a MongoDB database:
      ```bash
      yaml
      version: '3.8'

      services:
        app:
          build:
            context: .
            dockerfile: Dockerfile
          ports:
            - "3000:3000"
          environment:
            NODE_ENV: development
            PORT: 7000
            MONGO_URI: mongodb://db:27017/docker-practice
          depends_on:
            - db

        db:
          image: mongo:latest
          ports:
            - "27017:27017"
          volumes:
            - db-data:/data/db

      volumes:
        data:
          driver: local
      ```

## Commands to Run the Services
  - Start the services:
    ```bash
    docker-compose up
    ```
    
  - Run the containers in the background:
    ```bash
    docker-compose up -d
    ```
    
  - Stop the running containers:
    ```bash
    docker-compose down
    ```

  - Rebuild and run your Docker containers:
    ```bash
    docker-compose up --build -d
    ```

  - Check container status:
    ```bash
    docker-compose ps
    ```

  - View logs:
    ```bash
    docker-compose logs app
    ```
