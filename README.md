# Repo That Demonstrate the implementation of **Yarn Workspaces** :man_technologist: :woman_technologist:

Hello there!

To implement the code step by step please head to [my blog on medium](https://medium.com/@rashadattaf/yarn-workspaces-for-reactjs-nestjs-typescript-fastify-vite-19a25dd6bb42)

## How To Use

- clone the repo to your local and **cd** to cloned folder
  
```bash
git clone https://github.com/rashadataf/real_estate.git

cd real_estate/
```

- you will find four folders *api*, *dashboard*, *common* and *client*
- the **api** was generated using **NestJS**
- the **client** and **dashboard** are **ReactJS** apps and were generated using **vite**
- now you have to install dependencies in the folders
- just execute the following command from the root folder

```bash
yarn install
```
- now after installing the dependencies you are ready to start the front and back end servers.

```bash
yarn start:dev
```
- The **client** app will be runing on *port:* 4000
- The **dashboard** app will be runing on *port:* 4500
- The **api** will be runing on *port:* 3000

## API Endpoints

## Get Hello World message

  Returns a plain text includes greetings with my name

- **URL**

  `http://localhost:3000/`

- **Method:**

  `GET`
  
- **URL Params**
  None

- **Data Params**
  None

- **Success Response:**
  - **Code:** 200
  - **Content:** <br />Hello World!<br />User Name: Rashad Ataf<br />User Email: rashadattaf@gmail.com

- **Error Response:**
  None

- **Sample Call:**

  ```javascript
  async function getData(url = '') {
        const response = await fetch(url, {
            method: 'GET'
        });
        const data = await response.text();
        console.log('data: ', data)
  }
  getData('http://localhost:3000/');
  ```
  