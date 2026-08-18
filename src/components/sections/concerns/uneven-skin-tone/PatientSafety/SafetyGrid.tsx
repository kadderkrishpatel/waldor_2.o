import { safetyPoints } from "./PatientSafety.data";
import SafetyCard from "./SafetyCard";

export default function SafetyGrid() {
  return (
    <div className="space-y-6">
      {/* Row 1 */}
      <div className="grid gap-6 lg:grid-cols-3">
        {safetyPoints.slice(0, 3).map((point) => (
          <SafetyCard key={point.id} point={point} />
        ))}
      </div>

      {/* Row 2 */}
      <div className="grid gap-6 grid lg:grid-cols-2">
        <SafetyCard point={safetyPoints[3]} />
        <SafetyCard point={safetyPoints[4]} />
      </div>

      {/* Row 3 */}
      <div className="grid gap-6">
        <SafetyCard point={safetyPoints[5]} />
      </div>
    </div>
  );
}
