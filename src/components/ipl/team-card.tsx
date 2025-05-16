import type { TeamStats } from '@/data/ipl-teams';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React from 'react'; // Import React for React.Fragment

interface TeamCardProps {
  team: TeamStats;
}

const formatIncome = (income: number) => {
  return `₹${income.toLocaleString('en-IN')}`;
};

export function TeamCardComponent({ team }: TeamCardProps) {
  const statsDetails = [
    { label: "Life Expectancy", value: `${team.lifeExpectancy.toFixed(1)} years` },
    { label: "Infant Mortality Rate", value: `${team.infantMortalityRate} per 1k births` },
    { label: "Literacy Rate", value: `${team.literacyRate.toFixed(1)}%` },
    { label: "Attendance Ratio", value: `${team.attendanceRatio.toFixed(1)}%` },
    { label: "Per Capita Income", value: formatIncome(team.perCapitaIncome), important: true },
  ];

  return (
    <Card className="w-full shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out bg-card flex flex-col rounded-lg overflow-hidden">
      <CardHeader className="flex flex-row items-center space-x-4 p-5 bg-primary/5 border-b border-border">
        <Image 
          src={team.logoUrl} 
          alt={`${team.name} logo`} 
          width={56} 
          height={56} 
          className="rounded-full object-contain aspect-square"
          unoptimized
        />
        <div className="flex-grow">
          <CardTitle className="text-xl font-bold text-primary">{team.name}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground mt-1">{team.city}, {team.state}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-5 space-y-3 flex-grow">
        {statsDetails.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <div className="flex justify-between items-center text-sm">
              <span className="text-foreground/80">{stat.label}:</span>
              <span className={stat.important ? "font-semibold text-accent" : "font-medium text-foreground"}>
                {stat.value}
              </span>
            </div>
            {index < statsDetails.length - 1 && <Separator className="my-2 bg-border/50" />}
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
}
