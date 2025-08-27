import { Button } from "@/components/ui/button";

export const Map = () => {
  const address = "407 Fabian Dr, Aiken, SC 29803";
  const encodedAddress = encodeURIComponent(address);

  const handleGetDirections = () => {
    // Try Google Maps first, fallback to Apple Maps on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
      window.open(`maps://maps.google.com/maps?q=${encodedAddress}`, '_blank');
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    }
  };

  const handleViewOnMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="space-y-4">
      {/* Interactive Map Preview */}
      <div 
        className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden cursor-pointer group hover:shadow-luxury transition-luxury border border-border/50"
        onClick={handleViewOnMaps}
      >
        {/* Embedded Google Maps */}
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dotiHU1OriOGX4&q=${encodedAddress}&zoom=15&maptype=roadmap`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="group-hover:opacity-80 transition-opacity"
        />
      </div>
      
      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleGetDirections}
          className="text-xs"
        >
          Get Directions
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleViewOnMaps}
          className="text-xs"
        >
          View Larger Map
        </Button>
      </div>
      
      {/* Address Display */}
      <div className="text-center text-sm text-muted-foreground">
        <p className="font-medium text-primary mb-1">407 Fabian Dr</p>
        <p>Aiken, SC 29803</p>
        <p className="text-xs mt-2 opacity-75">Click map to view in Google Maps</p>
      </div>
    </div>
  );
};