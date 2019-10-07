import { createGlobalStyle } from "styled-components";

export const GlobleStyles = createGlobalStyle`
    body{
        font-family: "Open Sans Condensed";
        padding: 0;
        
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
    .main-container {
        padding: 20px 50px;
        @media screen and (max-width: 800px){
            padding: 10px;
        }
    }


`;
