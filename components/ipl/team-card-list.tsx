import type { TeamStats } from '@/data/ipl-teams';
import { TeamCardComponent } from './team-card';

interface TeamCardListProps {
  data: TeamStats[];
}

export function TeamCardListComponent({ data }: TeamCardListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
      {data.map(team => (
        <TeamCardComponent key={team.id} team={team} />
      ))}
    </div>
  );
}
