# The image we want to run
FROM node:latest

# Where we want to save the data
WORKDIR /usr/app/

# We want to copy the package.json file to the container
COPY package.json ./

# We install the dependencies using npm since many docker images don't have yarn
RUN npm install

# Then we copy everything to the container
COPY . .

# We expose the port the application will be using
EXPOSE 3333

# We run the application
CMD ["npm", "run", "dev"]