import jsPDF from 'jspdf';

export interface TicketData {
  buyerName: string;
  buyerEmail: string;
  eventName: string;
  eventDate: string;
  venue: string;
  ticketId: string;
  quantity: number;
  totalAmount: number;
  purchaseDate: string;
}

export const generateTicketPDF = (ticketData: TicketData) => {
  const doc = new jsPDF();
  
  // Set colors and fonts
  const primaryColor: [number, number, number] = [124, 58, 237]; // Purple
  const secondaryColor: [number, number, number] = [6, 182, 212]; // Cyan
  
  // Header with gradient effect simulation
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, 210, 40, 'F');
  
  // Event name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text(ticketData.eventName, 105, 20, { align: 'center' });
  
  // Ticket ID
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`Ticket ID: ${ticketData.ticketId}`, 105, 32, { align: 'center' });
  
  // Reset text color for body
  doc.setTextColor(0, 0, 0);
  
  // Buyer Information Section
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Ticket Holder Information', 20, 55);
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`Name: ${ticketData.buyerName}`, 20, 65);
  doc.text(`Email: ${ticketData.buyerEmail}`, 20, 72);
  
  // Event Details Section
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Event Details', 20, 90);
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`Date: ${ticketData.eventDate}`, 20, 100);
  doc.text(`Venue: ${ticketData.venue}`, 20, 107);
  doc.text(`Number of Tickets: ${ticketData.quantity}`, 20, 114);
  
  // Payment Information
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Payment Information', 20, 132);
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`Total Amount Paid: KES ${ticketData.totalAmount.toLocaleString()}`, 20, 142);
  doc.text(`Purchase Date: ${ticketData.purchaseDate}`, 20, 149);
  
  // QR Code placeholder (simulated with text)
  doc.setFillColor(240, 240, 240);
  doc.rect(150, 80, 40, 40, 'F');
  doc.setFontSize(8);
  doc.text('QR CODE', 170, 102, { align: 'center' });
  doc.text(ticketData.ticketId.substring(0, 8), 170, 108, { align: 'center' });
  
  // Footer with instructions
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text('Please present this ticket at the venue entrance.', 105, 180, { align: 'center' });
  doc.text('For inquiries, contact: events@kcauniversity.ac.ke', 105, 187, { align: 'center' });
  
  // Border
  doc.setDrawColor(...primaryColor);
  doc.setLineWidth(1);
  doc.rect(10, 45, 190, 150);
  
  // Save the PDF
  doc.save(`ticket-${ticketData.ticketId}.pdf`);
};
