#FROM node: 18-alpine
FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

# Copies the rest of the app source code to the working directory.
COPY . .

# Expose the application port
EXPOSE 7000

#CMD [ "node", "server.js" ]
CMD ["npm", "start"]