  import { render, screen } from '@testing-library/react';
  import '@testing-library/user-event';
  import Footer from './footer';

  describe('Footer', () => {
    it('renders the Footer component', () => {
      render(<Footer />);
      
      expect(screen.getByText('Facebook')).toBeTruthy();
      expect(screen.getByText('Twitter')).toBeTruthy();
      expect(screen.getByText('Instagram')).toBeTruthy();
      expect(screen.getByText('Telegram')).toBeTruthy();
      expect(screen.getByText('Reddit')).toBeTruthy();
      expect(screen.getByText('LinkedIn')).toBeTruthy();
      expect(screen.getByText('Youtube')).toBeTruthy();
      
      expect(screen.getByText('Privacy Policy')).toBeTruthy();
      expect(screen.getByText('Terms of Service')).toBeTruthy();
      expect(screen.getByText('Cookie policy')).toBeTruthy();
      expect(screen.getByText('Cookie preferences')).toBeTruthy();
      expect(screen.getByText('Community Rules')).toBeTruthy();
      expect(screen.getByText('Disclaimer')).toBeTruthy();
      
      expect(screen.getByText('Crypto Checker Basic')).toBeTruthy();
      expect(screen.getByText('Crypto Checker Standard')).toBeTruthy();
      expect(screen.getByText('Crypto Checker Developer')).toBeTruthy();
      expect(screen.getByText('Crypto Checker Educatieve')).toBeTruthy();
      expect(screen.getByText('Crypto Checker Premium')).toBeTruthy();
      
      expect(screen.getByText('Request Form')).toBeTruthy();
      expect(screen.getByText('Contact Support')).toBeTruthy();
      expect(screen.getByText('FAQ')).toBeTruthy();
      expect(screen.getByText('Glossary')).toBeTruthy();
      
      expect(screen.getByText('Crypto Checker is your go-to destination for reliable cryptocurrency data. Our platform provides real-time prices, historical trends, and in-depth market analysis, empowering you to make informed decisions in the dynamic world of digital assets. Join us as we navigate the future of finance together.')).toBeTruthy();
    });
  });
