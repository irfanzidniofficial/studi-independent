import React from "react";
import AboutMeetup from "../../components/molecules/AboutMeetUp";
import HactivMeetUp from "../../components/molecules/HactivMeetUp";
import Meetup from "../../components/molecules/Meetup";
import Member from "../../components/molecules/Member";
import NextMeetup from "../../components/molecules/NextMeetup";
import PastMeetups from "../../components/molecules/PastMeetups";

export default function Home() {
  return (
    <div>
      <HactivMeetUp />
      <NextMeetup />
      <AboutMeetup />
      <Member />
      <PastMeetups />
    </div>
  );
}
