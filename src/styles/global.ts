import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --color-black-transparent: #00000029;
  --color-dl: #FE5201;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Roboto Slab', serif !important;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button {
  cursor: pointer;
}

/* BEGIN CONTAINER */
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }

}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }

}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}


@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}

/* END CONTAINER */


`;
