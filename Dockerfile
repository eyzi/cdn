FROM node:alpine as base
WORKDIR /app
COPY . .
RUN yarn build:install:clean

FROM nginx:alpine
WORKDIR /app
RUN apk --no-cache add nodejs npm yarn
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/lib ./lib
COPY --from=base /app/node_modules ./node_modules
CMD ["yarn", "start"]
