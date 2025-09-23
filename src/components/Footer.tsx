const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-md"></div>
              <h3 className="text-xl font-bold">BusinessHub</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Ihr zuverlässiger Partner für umfassende Geschäftslösungen in Deutschland.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Dienstleistungen</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Personalvermittlung</li>
              <li>Produkte & Haushaltswaren</li>
              <li>Medizinische Geräte</li>
              <li>Baumaterialien</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Deutschland</p>
              <p>info@businesshub.de</p>
              <p>+49 (0) 123 456 789</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 BusinessHub. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;