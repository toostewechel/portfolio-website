# Snapshot Labs

This is the source code for Snapshot Labs, a personal portfolio site built using Next.js.

## Technologies Used

- [NextJS](https://nextjs.org/) - A React framework for building static and dynamic websites.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components for building high‑quality design systems and web apps in React.
- [Stitches.dev](https://stitches.dev/) - A CSS-in-JS library for styling React components.
- [Akash Network](https://akash.network/) - Open network that lets users buy and sell computing resources securely and efficiently.
- [Docker](https://www.docker.com/) - Platform designed to help developers build, share, and run modern applications.
- [Prettier](https://prettier.io/) - Tools for ensuring code consistency and style.

## Getting Started

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)

### Installation

1. Clone this repository:

```bash
git clone https://github.com/toostewechel/portfolio-website.git
```

2. Navigate to the project directory:

```bash
cd project-folder
```

3. Instal the dependencies with your package manager:

```bash
npm install
```

```bash
yarn install
```

### Running the Project

To start the development server, run the following command:

```bash
npm dev
```

```bash
yarn dev
```

The site will be available at http://localhost:3000.

### Formatting Code

To format all files inside the project, you can use the following script:

```bash
yarn fm
```

### Building for Production

To build the site for production, run the following command:

```
docker build --platform linux/amd64 . -t  <docker-hub-username>/<projectname>:<tag>
```

This will generate a Docker Image containing the optimised production build that can be run locally or deployed to Akash Network. To run the image locally, run the following command:

```
docker run -p 3000:3000 <docker-hub-username>/<projectname>:<tag>
```

The site will be available at http://localhost:3000.

## Contributing

If you find any bugs or issues with the site, please feel free to open an issue or submit a pull request.

## Licence

This project is licensed under the [MIT License](https://opensource.org/license/mit/).
