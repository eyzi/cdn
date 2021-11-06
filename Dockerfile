FROM node:alpine AS base
WORKDIR /app
COPY . .
RUN yarn build:install