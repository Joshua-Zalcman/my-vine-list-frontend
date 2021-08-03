<br />
<p align="center">
  <h2 align="center">My Vine List (Backend)</h2>
<br>
<Br>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Technologies Used</a></li>
      </ul>
    </li>
    <li>
      <a href="#ERD">ERD</a>
    </li>
     <li><a href="#future-enhancements">Future Enhancements</a></li>
     <li><a href="#authors">Authors</a></li>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->

# **About The Project**

My vine list is built with Django + rest_framework on the backend and perfomrs full CRUD operations on the wine model and user model. The app serves JSON API to the frontend and uses token based authentication for logins/CRUD/protecting routes.

The live version of this app can be viewed [here.](https://cocky-aryabhata-964b73.netlify.app/)

The frontend GitHub can be found [here.](https://github.com/Joshua-Zalcman/my-vine-list-frontend)

# **Built With**

- [Django](https://docs.djangoproject.com/en/3.2/)
- [REST Framework](https://www.django-rest-framework.org/)

# **ERD**

![My Vine List ERD](./img/erd.png)

# **Future Enhancements**

- New drinks model
- Enable users to interact and send messages
- Enhance token authentication by bringing in 3rd party library
- Add user profile images
