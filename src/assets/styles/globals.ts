import { createGlobalStyle } from 'styled-components'
import {images} from "../../services/constants";

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
      scroll-behavior: smooth;
    }
    body {
      font-family: "Inter", sans-serif !important;
      padding: 0;
      margin: 0;
      background-image: url(${images.cloudy});
      background-position: center;
      background-size: cover;
    }
    a {
      color: inherit;
    }

    .swiper-button-next {
      color: red;
    }
    
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      @media (max-width: 600px) {
        width: 5px;
        height: 5px;
      }
      &-track {
        background: #f1f1f1;
      }
      &-thumb {
        background: #888;
        :hover {
          background: #555;
        }
      }
    }
`
