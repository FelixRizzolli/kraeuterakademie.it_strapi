# Build Stage
FROM node:22-alpine AS build
WORKDIR /opt/app

# Install system dependencies
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git

# Enable corepack and install dependencies
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source code and build
COPY . .
RUN pnpm run build

# Production Stage
FROM node:22-alpine
WORKDIR /opt/app

# Install necessary system dependencies
RUN apk add --no-cache vips-dev

# Copy built application
COPY --from=build /opt/app /opt/app

# Install only production dependencies
RUN corepack enable && \
    pnpm install --frozen-lockfile --prod

# Expose port and start application
EXPOSE 1337
CMD ["pnpm", "start"]
