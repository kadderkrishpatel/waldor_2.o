import { safetyPoints } from "./PatientSafety.data";
import SafetyCard from "./SafetyCard";

export default function SafetyGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {safetyPoints.map((point) => (
        <SafetyCard key={point.id} point={point} />
      ))}
    </div>
  );
}
