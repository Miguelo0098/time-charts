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

const formSchema = z.object({
  file: z.instanceof(File),
});

type FormSchema = z.infer<typeof formSchema>;

export function CSVForm() {
  const { setRecords } = useTimeRecordsStore();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: FormSchema) {
    const fileText = await values.file.text();
    const fileLines = fileText.split("\n");

    const timeRegex = /\d{2}:[0-5]\d:[0-5]\d/;
    const validTimes = fileLines.filter((line) => timeRegex.test(line));
    setRecords(validTimes);
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Upload a CSV file</CardTitle>
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
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
