import { classifyTimeRecords } from "@/utils/classifyTimeRecords";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

type Props = {
  timeRecords: string[];
};

export function TimeRecordChart({ timeRecords }: Props) {
  const data = classifyTimeRecords(timeRecords, 60);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Time Records</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {Array.from(data).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
