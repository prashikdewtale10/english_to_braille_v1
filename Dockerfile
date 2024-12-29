# Setting light weight server
FROM nginx:alpine

# Copy source code
COPY index.html /usr/share/nginx/html/
COPY static /usr/share/nginx/html/static
COPY menifest.json /usr/share/nginx/html/
COPY serviceWorker.js /usr/share/nginx/html/
COPY *.svg /usr/share/nginx/html/

# Expose port 
EXPOSE 80

# Start NGINX server
CMD [ "nginx", "-g", "daemon off;" ]