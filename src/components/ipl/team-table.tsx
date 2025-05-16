import type { TeamStats } from '@/data/ipl-teams';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface TeamTableProps {
  data: TeamStats[];
}

const formatIncome = (income: number) => {
  return typeof income === 'number' ? `₹${income.toLocaleString('en-IN')}` : 'N/A';
};

export function TeamTableComponent({ data }: TeamTableProps) {
  const headers = [
    "Team", "City", "State", "Life Expectancy (Years)", "Infant Mortality Rate (per 1k births)", "Literacy Rate (%)", "Attendance Ratio (%)", "Per Capita Income (₹)"
  ];

  return (
    <ScrollArea className="rounded-lg border shadow-xl bg-card w-full">
      <Table className="min-w-full">
        <TableHeader className="sticky top-0 bg-card z-10 shadow-sm">
          <TableRow>
            {headers.map(header => (
              <TableHead key={header} className="font-semibold text-foreground whitespace-nowrap px-4 py-3 text-sm">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((team, index) => (
            <TableRow 
              key={team.id} 
              className={index % 2 === 0 ? 'bg-background/50 hover:bg-muted/60' : 'bg-card hover:bg-muted/60 transition-colors duration-150'}
            >
              <TableCell className="whitespace-nowrap px-4 py-3">
                <div className="flex items-center space-x-3">
                  <Image 
                    src={team.logoUrl} 
                    alt={`${team.name} logo`} 
                    width={32} 
                    height={32} 
                    className="rounded-full object-contain aspect-square" 
                    unoptimized // IPL Logos are SVGs or PNGs optimized, unoptimized might be better
                  />
                  <span className="font-medium text-foreground">{team.name}</span>
                </div>
              </TableCell>
              <TableCell className="whitespace-nowrap px-4 py-3 text-foreground/90">{team.city}</TableCell>
              <TableCell className="whitespace-nowrap px-4 py-3 text-foreground/90">{team.state}</TableCell>
              <TableCell className="text-right whitespace-nowrap px-4 py-3 text-foreground/90">
                {typeof team.lifeExpectancy === 'number' ? team.lifeExpectancy.toFixed(1) : 'N/A'}
              </TableCell>
              <TableCell className="text-right whitespace-nowrap px-4 py-3 text-foreground/90">
                {typeof team.infantMortalityRate === 'number' ? team.infantMortalityRate : 'N/A'}
              </TableCell>
              <TableCell className="text-right whitespace-nowrap px-4 py-3 text-foreground/90">
                {typeof team.literacyRate === 'number' ? team.literacyRate.toFixed(1) + '%' : 'N/A'}
              </TableCell>
              <TableCell className="text-right whitespace-nowrap px-4 py-3 text-foreground/90">
                {typeof team.attendanceRatio === 'number' ? team.attendanceRatio.toFixed(1) + '%' : 'N/A'}
              </TableCell>
              <TableCell className="text-right whitespace-nowrap px-4 py-3 font-medium text-foreground/90">{formatIncome(team.perCapitaIncome)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
