import { Star, Play, TrendingUp, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function App() {
  const featuredShows = [
    { title: 'Cosmic Warriors', genre: 'Action', rating: '9.2', episodes: 24 },
    { title: 'Starlight Academy', genre: 'Drama', rating: '8.8', episodes: 12 },
    { title: 'Nebula Chronicles', genre: 'Adventure', rating: '9.5', episodes: 36 },
    { title: 'Blue Moon Rising', genre: 'Fantasy', rating: '8.9', episodes: 18 },
  ];

  const trendingNow = [
    { title: 'Galaxy Express', views: '2.4M' },
    { title: 'Stellar Dreams', views: '1.8M' },
    { title: 'Azure Knights', views: '1.5M' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/generated/ott-logo.dim_512x512.png" 
              alt="Star Anime OTT" 
              className="h-12 w-12 drop-shadow-glow"
            />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Star Anime
              </h1>
              <p className="text-xs text-muted-foreground">Premium Streaming</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Browse
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Trending
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              My List
            </a>
          </nav>
          <Button className="shadow-glow">
            <Play className="mr-2 h-4 w-4" />
            Watch Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold shadow-lg">
                <Sparkles className="mr-2 h-4 w-4" />
                New Episodes Every Week
              </Badge>
            </div>
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Your Gateway to
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Infinite Stories
              </span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Stream thousands of anime series and movies. Watch anywhere, anytime. 
              Experience the magic of storytelling in stunning quality.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="shadow-glow-lg">
                <Play className="mr-2 h-5 w-5" />
                Start Watching Free
              </Button>
              <Button size="lg" variant="outline">
                Browse Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Shows */}
      <section className="container py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-bold">Featured This Week</h3>
            <p className="text-muted-foreground">Handpicked shows just for you</p>
          </div>
          <Button variant="ghost">
            View All
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredShows.map((show, index) => (
            <Card key={index} className="group overflow-hidden border-border/50 transition-all hover:border-primary/50 hover:shadow-glow">
              <CardHeader className="pb-4">
                <div className="mb-4 aspect-video rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Star className="h-16 w-16 text-primary/50" />
                </div>
                <CardTitle className="line-clamp-1">{show.title}</CardTitle>
                <CardDescription className="flex items-center justify-between">
                  <span>{show.genre}</span>
                  <Badge variant="secondary" className="text-xs">
                    <Star className="mr-1 h-3 w-3 fill-current" />
                    {show.rating}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{show.episodes} Episodes</span>
                  <Button size="sm" variant="ghost" className="h-8 px-2">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section className="container py-16">
        <div className="mb-8">
          <h3 className="text-3xl font-bold flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            Trending Now
          </h3>
          <p className="text-muted-foreground">What everyone's watching</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {trendingNow.map((item, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.views} views</p>
                </div>
                <Button size="icon" variant="ghost">
                  <Play className="h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Continue Watching */}
      <section className="container py-16">
        <div className="mb-8">
          <h3 className="text-3xl font-bold flex items-center gap-2">
            <Clock className="h-8 w-8 text-primary" />
            Continue Watching
          </h3>
          <p className="text-muted-foreground">Pick up where you left off</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Star className="h-20 w-20 text-primary/30" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="lg" className="shadow-glow">
                      <Play className="mr-2 h-5 w-5" />
                      Resume
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-1">Episode {item * 3}</h4>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${30 + item * 20}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30 mt-16">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/assets/generated/ott-logo.dim_512x512.png" 
                  alt="Star Anime OTT" 
                  className="h-10 w-10"
                />
                <div>
                  <h4 className="font-bold text-lg">Star Anime</h4>
                  <p className="text-xs text-muted-foreground">Premium Streaming Platform</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Your ultimate destination for anime streaming. Watch thousands of episodes and movies in HD quality.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Quick Links</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Browse</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Trending</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">New Releases</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">My List</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Support</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Star Anime OTT. Built with ❤️ using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
