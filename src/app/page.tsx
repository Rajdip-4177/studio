"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { List, TableIcon } from 'lucide-react';
import { teamsData } from '@/data/ipl-teams';
import { TeamTableComponent } from '@/components/ipl/team-table';
import { TeamCardListComponent } from '@/components/ipl/team-card-list';

export default function IplStatsPage() {
  const [viewMode, setViewMode] = useState<'table' | 'card'>('table');
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    // This will only run on the client, after initial hydration
    setCurrentYear(new Date().getFullYear());
  }, []); // Empty dependency array ensures this runs once on mount

  const toggleViewMode = () => {
    setViewMode(prevMode => (prevMode === 'table' ? 'card' : 'table'));
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-12 selection:bg-primary/20 selection:text-primary">
      <header className="text-center mb-10 md:mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight drop-shadow-md">
          IPL Teams Socio-Economic Analysis
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Explore key socio-economic indicators associated with the regions of Indian Premier League teams.
        </p>
      </header>

      <main className="container mx-auto max-w-screen-xl">
        <div className="flex justify-center sm:justify-end mb-6 md:mb-8">
          <Button 
            onClick={toggleViewMode} 
            variant="outline" 
            size="lg"
            className="shadow-lg bg-card hover:bg-accent hover:text-accent-foreground focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-200 ease-in-out group"
            aria-label={`Switch to ${viewMode === 'table' ? 'Card View' : 'Table View'}`}
            aria-pressed={viewMode === 'card'}
          >
            {viewMode === 'table' ? 
              <List className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-6" /> : 
              <TableIcon className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
            }
            Switch to {viewMode === 'table' ? 'Card View' : 'Table View'}
          </Button>
        </div>
        
        <div>
          {viewMode === 'table' ? (
            <div key="table-view" className="animate-fadeIn">
              <TeamTableComponent data={teamsData} />
            </div>
          ) : (
            <div key="card-view" className="animate-fadeIn">
              <TeamCardListComponent data={teamsData} />
            </div>
          )}
        </div>
      </main>

      <footer className="text-center mt-16 md:mt-24 py-8 border-t border-border/70">
        <p className="text-sm text-muted-foreground">
          IPL Stats Hub &copy; {currentYear !== null ? currentYear : ''}. All data is for illustrative and analytical purposes only.
        </p>
         <p className="text-xs text-muted-foreground/70 mt-1">
          Team logos are trademarks of their respective IPL franchises.
        </p>
      </footer>
    </div>
  );
}
