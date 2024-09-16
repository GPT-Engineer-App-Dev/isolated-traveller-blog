import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neo-bg">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold text-neo-text border-4 border-neo-text p-4 inline-block transform -rotate-2">
          Neobrutalist App
        </h1>
        <p className="text-2xl text-neo-text bg-neo-secondary p-4 border-2 border-neo-text shadow-neo">
          Embrace the bold and raw aesthetic!
        </p>
        <div className="space-x-4">
          <Button className="bg-neo-primary text-neo-text text-xl font-bold py-3 px-6 border-4 border-neo-text shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            Get Started
          </Button>
          <Button className="bg-neo-accent text-neo-text text-xl font-bold py-3 px-6 border-4 border-neo-text shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
