import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
  timeRecords: string[];
};

export function TimeRecordList({ timeRecords }: Props) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Time records</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {timeRecords.map((record) => (
            <li key={crypto.randomUUID()}>{record}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
