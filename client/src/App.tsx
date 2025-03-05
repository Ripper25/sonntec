import React, { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Preloader from "@/components/preloader";
import Home from "@/pages/home";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading and asset preparation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
          <Toaster />
        </>
      )}
    </QueryClientProvider>
  );
}