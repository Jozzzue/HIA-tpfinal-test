FROM node:14.21-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "Skyloft/app.js"]
