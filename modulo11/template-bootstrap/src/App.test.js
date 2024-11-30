import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header and ListarTarefa components', () => {
  render(<App />);
  
  // Verifica se o título do Header está presente
  const headerElement = screen.getByText(/cronograma de estudos/i);
  expect(headerElement).toBeInTheDocument();

  // Verifica se o componente ListarTarefa está sendo renderizado
  const listarTarefaElement = screen.getByText(/tarefa/i); // Supondo que "tarefa" esteja presente no ListarTarefa
  expect(listarTarefaElement).toBeInTheDocument();
});
