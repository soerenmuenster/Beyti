export const dynamic = "force-dynamic"; // Forces dynamic rendering

import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";
import { Suspense } from "react";

const ReservationPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks like you have no reservations on your property"
      />
    );
  }

  return (
    <Suspense><ReservationsClient reservations={reservations} currentUser={currentUser} /></Suspense>
  );
};

export default ReservationPage;
