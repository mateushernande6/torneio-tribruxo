import styled from 'styled-components'

export const Card = styled.div`
    width: 300px ;
    height: 400px;
    border: 2.5px solid ${(props) => 
    `${props.idd === 0 ? 'red' : props.idd === 1 ? 'yellow' : 'green'}
     
    `
    };
    border-radius: 10px;
    background-color: transparent;
    margin: 0 1rem 1.3rem 1rem;
    h2{
        font-size: 1.5rem;
        margin:0;
    }
    p{
        font-size: 1rem;
        margin: 0.5rem 0 0 0;
        color: orange;
    }
    object-fit: contain;
`
export const Img = styled.img`
    width: 250px ;
    height: 300px;
    object-fit:contain;
    margin: 1rem 0 0 0;

`