import { Phone, MapPin } from "lucide-react";
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
      <Phone className="h-4 w-4 mr-2" />
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
            Contact us to schedule your professional nail care service
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 py-4">
          <Phone className="h-12 w-12 text-primary" />
          <p className="text-center text-muted-foreground">
            Call us to schedule your appointment
          </p>
          <a 
            href="tel:+18036420096" 
            className="text-2xl font-light text-primary hover:text-primary-glow transition-smooth"
          >
            (803) 642-0096
          </a>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            407 Fabian Dr, Aiken, SC 29803
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Available during business hours<br/>
            Mon-Thu: 10:00am-6:00pm | Fri-Sat: 9:30am-6:00pm
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
