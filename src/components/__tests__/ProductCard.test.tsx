import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '../ProductCard';

const mockProduct = {
  image: '/test-image.jpg',
  name: 'Test Product',
  price: 100,
  oldPrice: 150,
  discount: 33,
  badge: 'Yeni',
  info: 'Test info',
  rating: 4.5,
};

const mockOnAddToCart = jest.fn();

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('100 TL')).toBeInTheDocument();
    expect(screen.getByText('150 TL')).toBeInTheDocument();
    expect(screen.getByText('%33 off')).toBeInTheDocument();
    expect(screen.getByText('Yeni')).toBeInTheDocument();
    expect(screen.getByText('Test info')).toBeInTheDocument();
    expect(screen.getByText('4.5')).toBeInTheDocument();
  });

  it('calls onAddToCart when add to cart button is clicked', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);

    const addToCartButton = screen.getByText('Sepete Ekle');
    fireEvent.click(addToCartButton);

    expect(mockOnAddToCart).toHaveBeenCalledWith(mockProduct);
  });

  it('renders product link with correct href', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);

    const productLink = screen.getByRole('link');
    expect(productLink).toHaveAttribute('href', '/products/test-image');
  });
}); 