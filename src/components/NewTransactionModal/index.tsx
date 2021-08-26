import Modal from 'react-modal';

import { Container, TransitionTypeContent } from './styles';
import CloseImg from '../../assets/close.svg';
import incomeIgm from '../../assets/income.svg';
import outcomeIgm from '../../assets/outcome.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={CloseImg} alt="Fexar modal" />
      </button>

      <Container>
        <h2>Cadastrar tranação</h2> 
        <form>

          <input type="text" placeholder="Título" />

          <input type="number" placeholder="Valor" />

          <TransitionTypeContent>
            <button type="button">
              <img src={incomeIgm} alt="Entrada" />
              <span>Entrada</span>
            </button>
            <button type="button">
              <img src={outcomeIgm} alt="Saída" />
              <span>Saída</span>
            </button>
          </TransitionTypeContent>

          <input placeholder="Categoria" />

          <button type="submit">
            Cadastrar
          </button>

        </form>
      </Container>
    </Modal>
  );
};

