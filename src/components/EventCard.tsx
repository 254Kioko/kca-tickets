import { Calendar, MapPin, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface EventCardProps {
  onAddToCart: (quantity: number) => void;
}

export const EventCard = ({ onAddToCart }: EventCardProps) => {
  return (
    <Card className="p-6 md:p-8 bg-card border-border hover:shadow-xl transition-all">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Tech Innovation Summit
          </h2>
          <p className="text-muted-foreground">
            Join industry leaders and innovators for three days of cutting-edge technology discussions, 
            workshops, and networking opportunities.
          </p>
        </div>

        <div className="space-y-3 text-foreground">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-primary" />
            <span>Monday 6th October to Wednesday 8th October</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span>KCA University</span>
          </div>
          <div className="flex items-center gap-3">
            <Ticket className="h-5 w-5 text-primary" />
            <span className="text-xl font-bold">KES 3,500</span>
          </div>
        </div>

        <div className="pt-4">
          <Button
            variant="hero"
            size="lg"
            className="w-full"
            onClick={() => onAddToCart(1)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};
