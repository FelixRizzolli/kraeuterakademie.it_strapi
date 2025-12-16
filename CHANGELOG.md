# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.5] - 2025-12-16


### Changed

- updated dependencies
    - @strapi/plugin-cloud 5.31.0 → 5.32.0
    - @strapi/plugin-graphql 5.31.0 → 5.32.0
    - @strapi/plugin-users-permissions 5.31.0 → 5.32.0
    - @strapi/strapi 5.31.0 → 5.32.0
    - mime-types 3.0.1 → 3.0.2
- updated devDependencies
    - @types/node 24.10.1 → 24.10.4

## [0.6.4] - 2025-11-18

### Changed

- updated environment variable names for Strapi configuration

- updated dependencies
  - react-router-dom 6.30.1 → 6.30.2
- updated devDependencies
  - @types/node 24.10.0 → 24.10.1

### Removed

- old unused scripts

## [0.6.3] - 2025-11-13

### Changed

- change database environment variable name

## [0.6.2] - 2025-11-12

### Changed

- Updated Dockerfile to use the Node 24 base image (switched from node:22-alpine to node:24-alpine).
- Added a repository_dispatch trigger to the build-and-push GitHub Actions workflow so the release workflow can programmatically trigger Docker image builds.
- Ensure Docker images pushed by the build-and-push workflow are tagged with the release version (added explicit version tagging to image pushes).
  - @strapi/plugin-cloud 5.30.1 → 5.31.0
  - @strapi/plugin-graphql 5.30.1 → 5.31.0
  - @strapi/plugin-users-permissions 5.30.1 → 5.31.0
  - @strapi/strapi 5.30.1 → 5.31.0
- updated dependencies
  - @strapi/plugin-cloud 5.30.1 → 5.31.0
  - @strapi/plugin-graphql 5.30.1 → 5.31.0
  - @strapi/plugin-users-permissions 5.30.1 → 5.31.0
  - @strapi/strapi 5.30.1 → 5.31.0

## [0.6.1] - 2025-11-11

### Fixed

- Added linux/arm64 and linux/amd64 platforms to the Docker build and push GitHub Actions workflows for Strapi
- use RELEASE_TOKEN instead of GITHUB_TOKEN for the auto-release-action to trigger subsequent workflows

### Changed

- updated environment variable names for Strapi configuration

## [0.6.0] - 2025-11-06

### Added

- GitHub Actions workflow for building and pushing Docker image (Strapi) to GitHub Container Registry
- GitHub Actions workflow for automatic release creation when version changes in package.json - FelixRizzolli/auto-release-action
- GitHub Actions step "Update CHANGELOG" (in .github/workflows/release.yml) that automatically updates CHANGELOG.md with dependency changes

### Changed

- updated dependencies
  - @strapi/plugin-cloud 5.23.1 → 5.30.1
  - @strapi/plugin-graphql 5.23.1 → 5.30.1
  - @strapi/plugin-users-permissions 5.23.1 → 5.30.1
  - @strapi/strapi 5.23.1 → 5.30.1
  - fs-extra 11.3.1 → 11.3.2
  - sharp 0.34.3 → 0.34.5
- updated devDependencies
  - @types/node 24.3.0 → 24.10.0

## [0.5.0] - 2025-08-29

## Changed

- @strapi/\* 5.15.0 -> 5.23.1
- fs-extra 11.3.0 -> 11.3.1
- pg 8.16.0 to 8.16.3
- typescript 5.8.3 -> 5.4.4
- sharp 0.34.2 -> 0.34.3
- @types/node 22.15.29 -> 24.3.0
- styled-components 6.1.18 -> 6.1.19

## [0.4.0] - 2025-05-30

### Changed

- add CHANGELOG.md file

## [0.3.0] - 2025-05-25

### Added

- added plugin graphql
- added single types: Cookies, Impressum, Contact, Kraeuterkurse, Privacy, Startseite, Über Mich
- added components: Accordions, AnimatedText, CourseList, HeroBig, HeroSmall, Infos, MoodPicture, TextElement
