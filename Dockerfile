#FROM node: 18-alpine
FROM node:20-alpine

WORKDIR /src/app

COPY package*.json ./

RUN npm install

# Run `prisma generate` to create the client code inside the Docker environment
COPY prisma ./prisma
RUN npx prisma generate

# Copies the rest of the app source code to the working directory.
COPY . .

# Expose the application port
EXPOSE 8080

# Command to run the app
#CMD [ "node", "server.js" ]
CMD ["npm", "start"]