import { CSVForm } from "./components/partials/CSVForm";
import { TimeRecordChart } from "./components/partials/TimeRecordChart";
import { useTimeRecordsStore } from "./hooks/useTimeRecordsStore";

function App() {
  const { timeRecords } = useTimeRecordsStore();

  return (
    <main className="p-4">
      <h1>Time chart</h1>
      <p>Visualize your time records in a chart.</p>
      <CSVForm />
      {timeRecords && <TimeRecordChart timeRecords={timeRecords} />}
    </main>
  );
}

export default App;
