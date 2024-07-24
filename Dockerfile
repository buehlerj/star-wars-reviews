FROM node:16.17.0 as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build-prod-deploy

FROM nginx:1.21.0

COPY --from=build /usr/local/app/dist /usr/share/nginx/html

EXPOSE 80