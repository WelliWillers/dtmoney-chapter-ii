import LogoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface Props { 
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: Props){

    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
                
            </Content>
        </Container>
    )
}