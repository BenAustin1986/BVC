# Use the official Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) from the frontend directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application from the frontend directory
COPY . .

# Set environment variable to fix OpenSSL issue (if needed)
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the React app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Serve the React app
CMD ["npx", "serve", "-s", "build"]
