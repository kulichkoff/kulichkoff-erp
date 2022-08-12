FROM node:16.15.1-alpine AS build
WORKDIR /usr/src/app
COPY . .
RUN yarn
RUN yarn build

FROM node:16.15.1-alpine
WORKDIR /usr/share/app
COPY --from=build /usr/src/app/dist/ dist/
EXPOSE 4000
CMD ["node", "dist/apps/admin/server/main.js"]
