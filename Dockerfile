# Use the official Node.js 20 image
FROM node:21-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port that Vite will use (we will use 5173 internally, mapped to 7775)
EXPOSE 7775

# Start the Vite development server
CMD ["npm", "run", "dev"]
