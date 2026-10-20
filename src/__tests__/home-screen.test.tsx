import { render, screen } from '@testing-library/react-native';

import HomeScreen from '@/features/home/home-screen';

describe('<HomeScreen />', () => {
  it('muestra el nombre de la app y el saludo', async () => {
    await render(<HomeScreen />);

    expect(screen.getByRole('header', { name: 'Classence' })).toBeTruthy();
    expect(screen.getByText('Hola Classence')).toBeTruthy();
  });

  it('muestra la versión de la app', async () => {
    await render(<HomeScreen />);

    expect(screen.getByText(/^Versión /)).toBeTruthy();
  });
});
