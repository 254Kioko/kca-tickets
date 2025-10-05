import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCartStore } from '@/store/cartStore';
import { CheckCircle, Download, Home } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { generateTicketPDF, TicketData } from '@/utils/pdfGenerator';

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearCart } = useCartStore();
  
  const { buyerInfo, totalAmount, quantity } = location.state || {};

  useEffect(() => {
    if (!buyerInfo) {
      navigate('/');
      return;
    }
    clearCart();
  }, [buyerInfo, clearCart, navigate]);

  const handleDownloadTicket = () => {
    const ticketData: TicketData = {
      buyerName: buyerInfo.name,
      buyerEmail: buyerInfo.email,
      eventName: 'Tech Innovation Summit',
      eventDate: 'Monday to Wednesday',
      venue: 'KCA University',
      ticketId: `TIS-${Date.now().toString().slice(-8)}`,
      quantity: quantity,
      totalAmount: totalAmount,
      purchaseDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };

    generateTicketPDF(ticketData);
  };

  if (!buyerInfo) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 bg-card border-border">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="rounded-full bg-secondary/20 p-4">
              <CheckCircle className="h-16 w-16 text-secondary" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
              Payment Successful!
            </h1>
            <p className="text-muted-foreground text-lg">
              Your tickets have been confirmed
            </p>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-3 text-left">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Order Date:</span>
              <span className="font-medium text-foreground">
                {new Date().toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Name:</span>
              <span className="font-medium text-foreground">{buyerInfo.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Email:</span>
              <span className="font-medium text-foreground">{buyerInfo.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tickets:</span>
              <span className="font-medium text-foreground">{quantity}</span>
            </div>
            <div className="flex justify-between border-t border-border pt-3 mt-3">
              <span className="text-muted-foreground">Total Paid:</span>
              <span className="font-bold text-lg text-foreground">
                KES {totalAmount.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={handleDownloadTicket}
            >
              <Download className="h-5 w-5 mr-2" />
              Download E-Ticket
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={() => navigate('/')}
            >
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            A confirmation email has been sent to {buyerInfo.email}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Confirmation;
