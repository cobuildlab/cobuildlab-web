import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: ${({ theme }) => theme.fontFamily.latoRegular}
    }

    html {
        overflow-x: hidden;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        transition: background 0.5s linear;
    }

    a { 
        text-decoration: none;
    }
`;
