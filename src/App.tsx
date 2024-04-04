import { ThemeProvider } from "./components/contexts/ThemeProvider";
import { CSVForm } from "./components/partials/CSVForm";
import { ModeToggle } from "./components/partials/ModeToggle";
import { TimeRecordChart } from "./components/partials/TimeRecordChart";
import { useTimeRecordsStore } from "./hooks/useTimeRecordsStore";

function App() {
  const { timeRecords, interval } = useTimeRecordsStore();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="w-full p-4 flex flex-col items-center gap-y-4">
        <header className="w-full flex justify-between items-center">
          <h1 className="text-4xl font-bold">Time records</h1>
          <ModeToggle />
        </header>

        <p>Check time distribution between fastest and slowest records</p>
        <section className="w-full max-w-[720px]">
          <CSVForm />
        </section>
        {timeRecords && (
          <section className="w-full max-w-[720px]">
            <TimeRecordChart timeRecords={timeRecords} interval={interval} />
          </section>
        )}
      </main>
    </ThemeProvider>
  );
}

export default App;
