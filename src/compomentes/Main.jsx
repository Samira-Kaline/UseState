import React, { useState } from 'react';

const itens = ['maçã', 'laranja', 'kiwi', 'pitaya', 'mirtilo'];

const Main = () => {
  const [quantidade, setQuantidade] = useState(0);
  let [novafruta,setNovafruta] = useState('');
  let [frutas, setFrutas] = useState(itens);

  function handleClickIncrementar(event) {
    setQuantidade(quantidade + 1);
  }

  const handleClickAdicionar = (e) => {
    setFrutas([...frutas, novafruta]);
  };

  const setInput = (event) => {
    setNovafruta(event.target.value);
  };

  return (
    <main>
      Quantidade: {quantidade}
      <button onClick={handleClickIncrementar}>Incrementar</button>
      <ol>
        {frutas.map((fruta) => {
          return <li>{fruta}</li>;
        })}
      </ol>
      <input type='text' onChange={setInput}></input>
      <button onClick={handleClickAdicionar}>Adicionar</button>
    </main>
  );
};

export default Main;