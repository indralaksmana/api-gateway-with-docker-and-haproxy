FROM node:8.15.0-alpine

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package.json /app

# Install dependencies using npm
RUN npm install
RUN npm install -g nodemon

# Get all the code needed to run the app
COPY . /app
COPY ./docker/dev/.env.production /app/.env

#Build the app
EXPOSE 4200

CMD ["npm", "start"]