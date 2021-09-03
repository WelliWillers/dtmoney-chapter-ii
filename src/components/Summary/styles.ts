import styled from 'styled-components';

interface props {
    background: string;
}

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -7rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    
        strong { 
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;    
        }

        &.greencontainer {
            background: var(--green);
            color: var(--input);
        }
        &.redcontainer {
            background: var(--red);
            color: var(--input);
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
`;
