# Use official Node.js image as the base image
FROM node:16-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Serve the React app using a simple HTTP server
RUN npm install -g serve

# Expose the port that the app will run on
EXPOSE 5000

# Start the application
CMD ["serve", "-s", "build", "-l", "5000"]
