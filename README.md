# gatsby-starter-devresume

![Test Status](https://github.com/cooljeffrey/gatsby-starter-devresume/workflows/test/badge.svg)

This starter ships the devresume Designed by <a class="theme-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers.

## 🚀 Quick start

1.  **Create a devresume site.**

    Use the Gatsby CLI to create a your resume.

    ```shell
    gatsby new my-devresume https://github.com/cooljeffrey/gatsby-starter-devresume
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-devresume/
    npm install
    ```

    then

    ```
    npm start
    ```

    or

    ```
    gatsby develop
    ```

1.  **Resume data files**

    Your resume data should be organized as yaml format in `src/data/resumes`.
    Multiple resumes are supported.
    Any resume with `default: true` will be created at root path `/`.
    By default, the resume file name without extension will be used as path.
    For example :

        http://localhost:8000/        - The default one
        http://localhost:8000/simon   - Simon's resume

    You can change this behaviour in `createPages` of `gatsby-node.js`.

1.  **Control which fields are going to be parsed as markdown**

    Check the `markdownMappings` array in `gatsby-node.js`.
