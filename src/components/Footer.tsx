
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary">
              TechRoadmap
            </Link>
            <p className="mt-2 text-muted-foreground">
              Your complete guide to a successful B.Tech journey. From foundation to placement, we've got you covered.
            </p>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Made with ❤️ for B.Tech students across India
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/first-year" className="text-muted-foreground hover:text-primary transition-colors">1st Year Guide</Link></li>
              <li><Link to="/second-year" className="text-muted-foreground hover:text-primary transition-colors">2nd Year Guide</Link></li>
              <li><Link to="/third-year" className="text-muted-foreground hover:text-primary transition-colors">3rd Year Guide</Link></li>
              <li><Link to="/fourth-year" className="text-muted-foreground hover:text-primary transition-colors">4th Year Guide</Link></li>
              <li><Link to="/domains" className="text-muted-foreground hover:text-primary transition-colors">Explore Domains</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Tools & Platforms</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog & Videos</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm">
            © 2024 TechRoadmap. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
