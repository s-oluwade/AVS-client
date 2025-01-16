# Use Node.js as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
# Needed only for production environment
RUN npm run build

# Expose the port the app runs on
EXPOSE 3001

# Command to run the application
CMD [ "npm", "start" ]
