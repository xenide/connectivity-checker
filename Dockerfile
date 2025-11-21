# Build stage
FROM node:alpine AS build
WORKDIR /usr/src/app

# Install app dependencies (including dev)
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Release stage
FROM node:alpine AS release
WORKDIR /usr/src/app

# Install only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy built files from build stage
COPY --from=build /usr/src/app/dist ./dist

ENV NODE_ENV=production
CMD [ "node", "dist/index.js" ]
