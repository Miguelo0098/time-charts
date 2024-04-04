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
  interval: number;
};

export function TimeRecordChart({ timeRecords, interval }: Props) {
  const data = classifyTimeRecords(timeRecords, interval);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Time Records</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="lowerLimit" />
            <YAxis />
            <Tooltip
              labelFormatter={(_label, payload) => {
                return payload[0]?.payload?.label;
              }}
            />
            <Bar name="records" dataKey="records.length" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
