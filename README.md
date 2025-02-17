# IowaKeyboards.com

[![Build Eleventy with GitHub Pages](https://github.com/Iowa-Keyboards/iowa-keyboard-meetup/actions/workflows/build.yml/badge.svg)](https://github.com/Iowa-Keyboards/iowa-keyboard-meetup/actions/workflows/build.yml)

Welcome to the repo for [IowaKeyboards.com](https://iowakeyboards.com).

## Developing Locally

- Download this repo
- Run `npm install` to load all dependencies
- Run `npm run start` to start your local development server on `http://localhost:8080`
- To debug, run `DEBUG=Eleventy* npx eleventy`

> [!NOTE]
> Any changes you make to the site while running the local development server should be reflected in real time. Any errors in the build path will be reflected in the terminal window, and must be fixed before real-time builds can continue.

## Deploying

- Any merge to the `main` branch will cause the site to build based off of `.github/workflows/build.yml`
- If you need to rebuild, click the Actions tab, select `Build Eleventy with GitHub Pages`, then choose `Run workflow` and run from the `main` branch
