import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { Container, TransitionTypeContent, RadioBox } from './styles';
import CloseImg from '../../assets/close.svg';
import incomeIgm from '../../assets/income.svg';
import outcomeIgm from '../../assets/outcome.svg';

import { useTransactions } from '../../context/transactionsContext';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const { createTransaction } = useTransactions();

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    await createTransaction({
      title, 
      type, 
      category, 
      amount,
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');

    onRequestClose();
  }

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

          <input 
            type="text"
            placeholder="Título" 
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <input 
            type="number" 
            placeholder="Valor"
            value={amount}
            onChange={event => setAmount(Number(event.target.value))} 
          />

          <TransitionTypeContent>

            <RadioBox 
              type="button" 
              onClick={() => {setType('deposit')}}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeIgm} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox 
              type="button" 
              onClick={() => {setType('withdraw')}}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeIgm} alt="Saída" />
              <span>Saída</span>
            </RadioBox>

          </TransitionTypeContent>

          <input 
            placeholder="Categoria" 
            value={category}
            onChange={event => setCategory(event.target.value)}
          />

          <button type="submit" onClick={handleCreateNewTransaction}>
            Cadastrar
          </button>

      </Container>
    </Modal>
  );
};

