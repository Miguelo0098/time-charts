import { classifyTimeRecords } from "@/utils/classifyTimeRecords";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  timeRecords: number[];
};

export function TimeRecordChart({ timeRecords }: Props) {
  const data = classifyTimeRecords(timeRecords, 60);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Time Records</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="records.length" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
