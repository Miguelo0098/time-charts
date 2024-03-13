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
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  file: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

export function CSVForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: FormSchema) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>File</FormLabel>
              <FormControl>
                <Input placeholder="file.csv" type="file" {...field} />
              </FormControl>
              <FormDescription>
                Upload a CSV file with times in a single column
              </FormDescription>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
