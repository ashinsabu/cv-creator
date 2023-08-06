# CV Creator

A React app which allows users to create their own resume using a ready template and download it in a PDF or DOC format.
Now uses functional components and hooks as of 8th February, 2023.

<a href="https://ashinsabu.github.io/cv-creator/" target="_blank" style="font-size: 24px;">Live Demo</a> :point_left:

## Getting started

```
git clone https://github.com/ashinsabu/cv-creator.git
cd cv-creator
npm install
npm start
```
## Building docker image

Build "cv-creator-deploy" image with 

```
docker build -t cv-creator-deploy -f Dockerfile.build .
```

Run cv-creator-deploy image with 

```
docker run -p 80:80 cv-creator-deploy  
```

Run locally the same image with

## Built with

- [React](https://reactjs.org/)
- [uniqid](https://www.npmjs.com/package/uniqid)
- [gh-pages](https://www.npmjs.com/package/gh-pages)
- [react-to-print](https://github.com/gregnb/react-to-print)

