import Appointments from "@/components/sections/Appointments";

export const metadata = {
  title: "Book an Appointment | Beatriz Nogueira - Physiotherapist",
  description:
    "Schedule your physiotherapy appointment with Beatriz Nogueira. Offering initial consultations, follow-up sessions, and online consultations.",
};

export default function AppointmentsPage() {
  return (
    <div className="pt-20">
      <Appointments />
    </div>
  );
}
