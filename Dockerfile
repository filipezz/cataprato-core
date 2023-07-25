FROM node:18.17.1-alpine As development
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm i --force
COPY --chown=node:node . .
USER node
CMD ["node", "dist/main.js"]
HEALTHCHECK --interval=10m --timeout=5s \
    CMD curl -f http://localhost/ || exit 1
    
FROM node:16.17.1-alpine as build
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .
RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && cache clean --force
USER node

FROM node:16.17.1-alpine as production
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
CMD ["node","dist/main.js"]