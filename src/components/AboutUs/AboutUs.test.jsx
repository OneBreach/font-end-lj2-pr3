import { render, screen } from '@testing-library/react';
import '@testing-library/user-event'; 
import AboutUs from './AboutUs';

describe('AboutUs', () => {
  it('renders the AboutUs component', () => {
    render(<AboutUs />);
    
    expect(screen.getByText('Ontdek alle actuele cryptocurrency-gegevens')).toBeTruthy();
    expect(screen.getByText('Welkom op onze crypto-website, waar u alle benodigde informatie vindt over de huidige stand van de cryptocurrency-markten. Van de laatste prijzen tot marktkapitalisatie, handelsvolume en meer, bieden wij een uitgebreid overzicht van de cryptocurrency-gegevens die u nodig heeft om geïnformeerde beslissingen te nemen.')).toBeTruthy();
    expect(screen.getByText('Met onze intuïtieve interface kunt u gemakkelijk door verschillende cryptocurrencies bladeren en gedetailleerde informatie vinden over individuele munten en tokens. Of u nu een doorgewinterde handelaar bent of gewoon geïnteresseerd bent in de wereld van crypto, onze site heeft voor elk wat wils.')).toBeTruthy();
    expect(screen.getByText('Blijf op de hoogte van de laatste trends, volg de prijsbewegingen van uw favoriete munten en neem deel aan de spannende wereld van cryptocurrency-handel met vertrouwen, dankzij onze uitgebreide en up-to-date gegevens.')).toBeTruthy();
  });
});
