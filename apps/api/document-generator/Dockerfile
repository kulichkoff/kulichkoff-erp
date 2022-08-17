FROM node:16.15.1-alpine AS build
WORKDIR /usr/src/app
COPY ../../.. ./
RUN yarn
RUN yarn nx run api-document-generator:build:prod

FROM node:16.15.1-alpine
WORKDIR /usr/share/app
COPY --from=build /usr/src/app/dist/ dist/
COPY --from=build /usr/src/app/package.json /usr/src/app/yarn.lock ./
RUN yarn install --prod --ignore-scripts && rm yarn.lock
EXPOSE 3333
CMD ["node", "dist/apps/api/document-generator/main.js"]
