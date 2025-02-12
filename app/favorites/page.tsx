export const dynamic = "force-dynamic"; // Forces dynamic rendering

import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";
import { Suspense } from "react";

type Props = {};

const page = async (props: Props) => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings."
      />
    );
  }

  return <Suspense><FavoritesClient listings={listings} currentUser={currentUser} /></Suspense>;
};

export default page;
