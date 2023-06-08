FROM node:20.2.0 as node
WORKDIR /app
COPY /frontend .

RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/angular /usr/share/nginx/html
COPY --from=node /app/nginx/nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443
