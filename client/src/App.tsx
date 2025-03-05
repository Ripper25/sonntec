import React, { useState, useEffect, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Preloader from "@/components/preloader";
import NotFound from "@/pages/not-found";

// Lazy load components
const Home = React.lazy(() => import("@/pages/home"));
const QuoteCalculator = React.lazy(() => import("@/pages/quote-calculator"));
const Markets = React.lazy(() => import("@/pages/markets"));

function Router() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Suspense fallback={<Preloader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/quote" component={QuoteCalculator} />
        <Route path="/markets" component={Markets} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;