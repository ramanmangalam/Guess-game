# Use the official Nginx image as the base
FROM nginx:alpine

# Copy everything from the current folder (the guess-game folder) into Nginx's web directory
COPY . /usr/share/nginx/html

# Expose port 80 so the web server is accessible
EXPOSE 80

# Start Nginx in the foreground to keep the container running
CMD ["nginx", "-g", "daemon off;"]
