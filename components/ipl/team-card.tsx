
import type { TeamStats } from '@/data/ipl-teams';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React from 'react'; 
import { TrendingUp, TrendingDown, Activity, DollarSign, BookOpen, Baby } from 'lucide-react'; // Added icons

interface TeamCardProps {
  team: TeamStats;
}

const formatIncome = (income: number | undefined | null) => {
  return (income !== undefined && income !== null && typeof income === 'number' && !isNaN(income))
    ? `₹${income.toLocaleString('en-IN')}`
    : 'N/A';
};

const getStatIcon = (label: string) => {
  if (label.toLowerCase().includes("life expectancy")) return <Activity className="h-4 w-4 text-secondary" />;
  if (label.toLowerCase().includes("infant mortality")) return <Baby className="h-4 w-4 text-destructive" />;
  if (label.toLowerCase().includes("literacy rate")) return <BookOpen className="h-4 w-4 text-green-500" />; // Using a direct color for positive emphasis
  if (label.toLowerCase().includes("attendance ratio")) return <TrendingUp className="h-4 w-4 text-primary" />;
  if (label.toLowerCase().includes("per capita income")) return <DollarSign className="h-4 w-4 text-accent" />;
  return null;
};


export function TeamCardComponent({ team }: TeamCardProps) {
  const statsDetails = [
    { 
      label: "Life Expectancy", 
      value: (team.lifeExpectancy !== undefined && team.lifeExpectancy !== null && typeof team.lifeExpectancy === 'number' && !isNaN(team.lifeExpectancy)) 
        ? `${team.lifeExpectancy.toFixed(1)} years` 
        : 'N/A' 
    },
    { 
      label: "Infant Mortality Rate", 
      value: (team.infantMortalityRate !== undefined && team.infantMortalityRate !== null && typeof team.infantMortalityRate === 'number' && !isNaN(team.infantMortalityRate)) 
        ? `${team.infantMortalityRate} per 1k births` 
        : 'N/A' 
    },
    { 
      label: "Literacy Rate", 
      value: (team.literacyRate !== undefined && team.literacyRate !== null && typeof team.literacyRate === 'number' && !isNaN(team.literacyRate)) 
        ? `${team.literacyRate.toFixed(1)}%` 
        : 'N/A' 
    },
    { 
      label: "Attendance Ratio", 
      value: (team.attendanceRatio !== undefined && team.attendanceRatio !== null && typeof team.attendanceRatio === 'number' && !isNaN(team.attendanceRatio))
        ? `${team.attendanceRatio.toFixed(1)}%` 
        : 'N/A' 
    },
    { 
      label: "Per Capita Income", 
      value: formatIncome(team.perCapitaIncome), 
      important: true 
    },
  ];

  return (
    <Card className="w-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out bg-card flex flex-col rounded-xl overflow-hidden border-border/70">
      <CardHeader className="flex flex-row items-center space-x-4 p-5 bg-primary text-primary-foreground border-b-0">
        <Image 
          src={team.logoUrl} 
          alt={`${team.name} logo`} 
          width={60} 
          height={60} 
          className="rounded-full object-contain aspect-square border-2 border-primary-foreground/50 shadow-md"
          unoptimized
        />
        <div className="flex-grow">
          <CardTitle className="text-2xl font-bold">{team.name}</CardTitle>
          <CardDescription className="text-sm text-primary-foreground/80 mt-1">{team.city}, {team.state}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-5 space-y-3 flex-grow">
        {statsDetails.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <div className="flex justify-between items-center text-md">
              <div className="flex items-center space-x-2">
                {getStatIcon(stat.label)}
                <span className="text-foreground/90">{stat.label}:</span>
              </div>
              <span className={stat.important ? "font-semibold text-accent text-lg" : "font-medium text-foreground"}>
                {stat.value}
              </span>
            </div>
            {index < statsDetails.length - 1 && <Separator className="my-3 bg-border/50" />}
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
}
