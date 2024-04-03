import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useTimeRecordsStore } from "@/hooks/useTimeRecordsStore";
import { stringToSeconds } from "@/utils/timeParser";
import { DEFAULT_INTERVAL } from "@/constants/defaultInterval";

const formSchema = z.object({
  file: z.instanceof(File),
  interval: z.coerce.number().int().positive().default(DEFAULT_INTERVAL),
});

type FormSchema = z.infer<typeof formSchema>;

export function CSVForm() {
  const { setRecords, setInterval } = useTimeRecordsStore();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: FormSchema) {
    const fileText = await values.file.text();
    const fileLines = fileText.split("\n");

    const timeRegex = /\d{2}:[0-5]\d:[0-5]\d/;
    const validTimes = fileLines
      .filter((line) => timeRegex.test(line))
      .map((line) => line.match(timeRegex)![0]);
    setRecords(validTimes.map(stringToSeconds).sort());
    setInterval(values.interval);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload your time records</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>File</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="file.csv"
                      type="file"
                      accept=".csv"
                      value={undefined}
                      onChange={(e) => {
                        field.onChange(e.target.files?.[0]);
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Upload a CSV file with times in a single column
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interval"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interval</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder={`${DEFAULT_INTERVAL}`}
                      min={1}
                    />
                  </FormControl>
                  <FormDescription>Interval in seconds</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
