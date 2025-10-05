import { EventCard } from '@/components/EventCard';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import heroImage from '@/assets/hero-tech-summit.jpg';

const Index = () => {
  const navigate = useNavigate();
  const { addItem, getTotalItems } = useCartStore();
  const cartItemsCount = getTotalItems();

  const handleAddToCart = (quantity: number) => {
    addItem(
      {
        id: 'tech-summit-ticket',
        name: 'Tech Innovation Summit - General Admission',
        price: 3500,
      },
      quantity
    );
    toast.success('Ticket added to cart!');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            KCA Events
          </h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/cart')}
            className="relative"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Tech Innovation Summit 2025
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Experience the future of technology at KCA University. Three days of innovation,
              networking, and learning from industry pioneers.
            </p>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <EventCard onAddToCart={handleAddToCart} />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Expert Speakers',
                description: 'Learn from industry leaders and tech pioneers',
              },
              {
                title: 'Workshops',
                description: 'Hands-on sessions covering latest technologies',
              },
              {
                title: 'Networking',
                description: 'Connect with fellow innovators and professionals',
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
