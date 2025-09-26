"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

type Stat = { indicator: string; reach: string | number };

const DEFAULT_STATS: Stat[] = [
  { indicator: "Students (nursery–grade 8)", reach: "6,200" },
  { indicator: "Schools supported", reach: "45" },
  { indicator: "Teachers trained", reach: "200" },
  { indicator: "Libraries instituted", reach: "20" },
  { indicator: "Mentors developed", reach: "16" },
  { indicator: "Communities engaged", reach: "80" },
  { indicator: "Village education committees", reach: "45" },
  { indicator: "Parents reached", reach: "8,600" },
  { indicator: "Kids educated", reach: "6,000" },
  { indicator: "Volunteers from across India", reach: "65" },
];

export function ImpactStatsTable({
  stats = DEFAULT_STATS,
}: {
  stats?: Stat[];
}) {
  return (
    <Card className="border-border/60 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <Table aria-label="Impact indicators and reach">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-2/3 text-foreground/80">
              Indicator
            </TableHead>
            <TableHead className="w-1/3 text-right text-foreground/80">
              Reach
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stats.map((s, i) => (
            <TableRow key={i} className="hover:bg-muted/30">
              <TableCell className="font-medium">{s.indicator}</TableCell>
              <TableCell className="text-right tabular-nums">
                {s.reach}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default ImpactStatsTable;
