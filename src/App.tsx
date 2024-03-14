import { CSVForm } from "./components/partials/CSVForm";
import { TimeRecordChart } from "./components/partials/TimeRecordChart";
import { TimeRecordList } from "./components/partials/TimeRecordList";
import { useTimeRecordsStore } from "./hooks/useTimeRecordsStore";

function App() {
  const { timeRecords } = useTimeRecordsStore();

  return (
    <main>
      <h1>Time chart</h1>
      <p>Visualize your time records in a chart.</p>
      <CSVForm />
      {timeRecords && <TimeRecordList timeRecords={timeRecords} />}
      {timeRecords && <TimeRecordChart timeRecords={timeRecords} />}
    </main>
  );
}

export default App;
