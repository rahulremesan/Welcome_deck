# Stage 1: Build Stage
FROM node:16-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Production Stage
FROM nginx:alpine

# Copy the build output from the build stage to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx will serve on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
