import { Phone, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface BookingDialogProps {
  trigger?: ReactNode;
  variant?: "default" | "hero" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
  fullWidth?: boolean;
  children?: ReactNode;
}

const BOOKING_URL = "https://www.newlifepos.com/web/appt/VTBOZk9EZ3dNRGM9";

export const BookingDialog = ({ 
  trigger, 
  variant = "default",
  size = "default",
  className = "",
  fullWidth = false,
  children
}: BookingDialogProps) => {
  const defaultTrigger = (
    <Button 
      variant={variant as any} 
      size={size} 
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <Calendar className="h-4 w-4 mr-2" />
      {children || "Book Now"}
    </Button>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-primary">
            Book Your Appointment
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Schedule your professional nail care service online or by phone
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 py-4">
          {/* Primary CTA - Online Booking */}
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full luxury-gradient text-white hover:shadow-glow transition-luxury text-lg py-6">
              <Calendar className="h-5 w-5 mr-2" />
              Book Online
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </a>
          
          <div className="flex items-center w-full">
            <div className="flex-1 border-t border-border"></div>
            <span className="px-3 text-sm text-muted-foreground">or call us</span>
            <div className="flex-1 border-t border-border"></div>
          </div>
          
          {/* Secondary CTA - Phone */}
          <a 
            href="tel:+18036420096" 
            className="flex items-center gap-2 text-xl font-light text-primary hover:text-primary-glow transition-smooth"
          >
            <Phone className="h-5 w-5" />
            (803) 642-0096
          </a>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            407 Fabian Dr, Aiken, SC 29803
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Mon-Thu: 10:00am-6:00pm | Fri-Sat: 9:30am-6:00pm
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
