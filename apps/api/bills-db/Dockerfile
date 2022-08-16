FROM node:16.15.1-alpine AS build
WORKDIR /usr/src/app
COPY ../../.. ./
RUN yarn
RUN yarn nx run api-bills-db:build:prod

FROM node:16.15.1-alpine
WORKDIR /usr/share/app
COPY --from=build /usr/src/app/dist/ dist/
COPY --from=build /usr/src/app/package.json \
    /usr/src/app/yarn.lock \
    /usr/src/app/ormconfig.json \
    ./
COPY --from=build /usr/src/app/tools/ tools/
COPY --from=build /usr/src/app/apps/api/bills-db/src/config/config.service.ts apps/api/bills-db/src/config/
RUN yarn install --prod --ignore-scripts
EXPOSE 3333
CMD ["yarn", "migrate", "&&", "node", "dist/apps/api/bills-db/main.js"]
