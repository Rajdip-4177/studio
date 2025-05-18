
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { List, TableIcon, TrendingUp, BarChartBig } from 'lucide-react'; // Added more icons
import { teamsData } from '@/data/ipl-teams';
import { TeamTableComponent } from '@/components/ipl/team-table';
import { TeamCardListComponent } from '@/components/ipl/team-card-list';

export default function IplStatsPage() {
  const [viewMode, setViewMode] = useState<'table' | 'card'>('table');
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const toggleViewMode = () => {
    setViewMode(prevMode => (prevMode === 'table' ? 'card' : 'table'));
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-12 selection:bg-primary/20 selection:text-primary-foreground">
      <header className="text-center mb-12 md:mb-20">
        <div className="inline-block p-1 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent mb-4">
          <BarChartBig className="h-16 w-16 text-primary-foreground" />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight drop-shadow-md animate-fadeIn">
          IPL Teams Socio-Economic Analysis
        </h1>
        <p 
          className="mt-3 text-lg sm:text-xl text-secondary font-semibold animate-fadeIn" 
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          by Rajdip
        </p>
        <p className="mt-6 text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed animate-fadeIn"
           style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          Explore key socio-economic indicators associated with the home regions of Indian Premier League teams. Dive into the data!
        </p>
      </header>

      <main className="container mx-auto max-w-screen-xl">
        <div className="flex justify-center sm:justify-end mb-8 md:mb-10">
          <Button 
            onClick={toggleViewMode} 
            variant="outline" 
            size="lg"
            className="shadow-lg border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-300 ease-in-out group hover:scale-105 focus:scale-105 active:scale-100"
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
        
        <div className="animate-fadeIn" style={{animationDelay: '0.3s', opacity: 0}}>
          {viewMode === 'table' ? (
            <div key="table-view">
              <TeamTableComponent data={teamsData} />
            </div>
          ) : (
            <div key="card-view">
              <TeamCardListComponent data={teamsData} />
            </div>
          )}
        </div>
      </main>

      <footer className="text-center mt-24 md:mt-32 py-10 border-t border-border/50">
        <p className="text-md text-muted-foreground">
          IPL Stats Hub &copy; {currentYear !== null ? currentYear : ''}. For illustrative and analytical purposes.
        </p>
         <p className="text-sm text-muted-foreground/80 mt-2">
          Team logos are trademarks of their respective IPL franchises.
        </p>
      </footer>
    </div>
  );
}
