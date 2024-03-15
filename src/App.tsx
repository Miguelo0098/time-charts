import { CSVForm } from "./components/partials/CSVForm";
import { TimeRecordChart } from "./components/partials/TimeRecordChart";
import { useTimeRecordsStore } from "./hooks/useTimeRecordsStore";

function App() {
  const { timeRecords } = useTimeRecordsStore();

  return (
    <main className="w-full p-4 flex flex-col items-center gap-y-4">
      <h1 className="text-4xl font-bold">Time records</h1>
      <p>Check time distribution between fastest and slowest records</p>
      <section className="w-full max-w-[720px]">
        <CSVForm />
      </section>
      {timeRecords && (
        <section className="w-full max-w-[720px]">
          <TimeRecordChart timeRecords={timeRecords} />
        </section>
      )}
    </main>
  );
}

export default App;
