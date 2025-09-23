import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-md"></div>
            <h1 className="text-xl font-bold text-foreground">BusinessHub</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">
              Dienstleistungen
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              Über uns
            </a>
            <Button variant="outline" size="sm">
              Kontakt
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-foreground hover:text-accent transition-colors">
                Dienstleistungen
              </a>
              <a href="#about" className="text-foreground hover:text-accent transition-colors">
                Über uns
              </a>
              <Button variant="outline" size="sm" className="w-fit">
                Kontakt
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;