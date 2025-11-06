import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, HardDrive, Globe, GitCommit, Lock, Code } from "lucide-react";
import bogorgLogo from "@/assets/bogorg-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <img 
            src={bogorgLogo} 
            alt="Bogorg Logo" 
            className="w-32 h-32 md:w-40 md:h-40 animate-fade-in"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-foreground animate-fade-in">
            bogorg
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl animate-fade-in">
            The art of making things work in the weirdest possible way.
          </p>
          <p className="text-lg text-muted-foreground max-w-xl animate-fade-in">
            We build strange, inefficient, and oddly satisfying solutions that still get the job done.
          </p>
          <Button 
            size="lg" 
            className="mt-4 animate-fade-in"
            onClick={() => window.open('https://github.com/bogorg', '_blank')}
          >
            <Github className="mr-2" />
            Visit our GitHub
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer group"
                onClick={() => window.open('https://github.com/bogorg/kvd', '_blank')}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  KVD
                </h3>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                A dumb Redis-compatible key-value database using Docker containers as storage
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                  Go
                </span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                  Docker
                </span>
              </div>
            </div>
          </Card>

          {/* Placeholder for future projects */}
          <Card className="p-6 border-dashed flex items-center justify-center min-h-[200px]">
            <p className="text-muted-foreground text-center">
              More weird projects<br />coming soon...
            </p>
          </Card>
        </div>
      </section>

      {/* Ideas Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Dumb Ideas We Love</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <HardDrive className="h-5 w-5" />
              <h3 className="text-lg font-semibold">File System as a Database</h3>
            </div>
            <p className="text-muted-foreground">
              Each file is a row, directories are tables. Watch your filesystem cry.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <Globe className="h-5 w-5" />
              <h3 className="text-lg font-semibold">DNS as a Message Queue</h3>
            </div>
            <p className="text-muted-foreground">
              Use TXT records to send messages. Slow, unreliable, beautiful chaos.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <GitCommit className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Git Commits as a Chat App</h3>
            </div>
            <p className="text-muted-foreground">
              Every message is a commit. Conversation history is literally git history.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <Lock className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Blockchain for Todo Lists</h3>
            </div>
            <p className="text-muted-foreground">
              Immutable tasks. Mining required to mark as complete. Peak inefficiency.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <Code className="h-5 w-5" />
              <h3 className="text-lg font-semibold">CSS as a Programming Language</h3>
            </div>
            <p className="text-muted-foreground">
              Build logic using only CSS selectors and animations. No JavaScript allowed.
            </p>
          </Card>
        </div>
      </section>

      {/* Join Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Join the Weird Side</h2>
          <p className="text-xl text-muted-foreground">
            Got a brilliantly terrible idea? We want to see it!
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">1. Have a Dumb Idea</h3>
              <p className="text-sm text-muted-foreground">
                The more inefficient and absurd, the better. Bonus points for making people ask "but why?"
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">2. Build It Anyway</h3>
              <p className="text-sm text-muted-foreground">
                Actually make it work. It should be terrible, but it should work.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">3. Share the Horror</h3>
              <p className="text-sm text-muted-foreground">
                Open a PR or create a new repo under bogorg. Let the world witness your creation.
              </p>
            </Card>
          </div>
          <div className="pt-4">
            <Button 
              size="lg"
              onClick={() => window.open('https://github.com/bogorg', '_blank')}
            >
              <Github className="mr-2" />
              Start Contributing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-muted-foreground">
        <p>Built with questionable decisions and a lot of fun</p>
        <p className="mt-2">© 2024 bogorg - Making things work, weirdly</p>
      </footer>
    </div>
  );
};

export default Index;

