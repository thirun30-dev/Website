"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface SpeakerItem {
  id: string;
  name: string;
  role: string;
  company: string;
  topic: string;
  bio: string;
  linkedin: string;
  image?: string;
  confirmed: boolean;
  registeredAt?: string;
}

export interface SponsorItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  logo: string; // SVG or image path
  confirmed: boolean;
  contactEmail?: string;
  registeredAt?: string;
}

interface EventDataContextType {
  speakers: SpeakerItem[];
  sponsors: SponsorItem[];
  addSpeakerProposal: (speaker: Omit<SpeakerItem, "id" | "confirmed">) => void;
  addSponsorEnquiry: (sponsor: Omit<SponsorItem, "id" | "confirmed" | "logo">) => void;
  createSpeakerByAdmin: (speaker: Omit<SpeakerItem, "id">) => void;
  createSponsorByAdmin: (sponsor: Omit<SponsorItem, "id">) => void;
  toggleSpeakerConfirmation: (id: string) => void;
  toggleSponsorConfirmation: (id: string) => void;
  deleteSpeaker: (id: string) => void;
  deleteSponsor: (id: string) => void;
}

const DEFAULT_SPEAKERS: SpeakerItem[] = [];

const DEFAULT_SPONSORS: SponsorItem[] = [];

const EventDataContext = createContext<EventDataContextType>({
  speakers: DEFAULT_SPEAKERS,
  sponsors: DEFAULT_SPONSORS,
  addSpeakerProposal: () => {},
  addSponsorEnquiry: () => {},
  createSpeakerByAdmin: () => {},
  createSponsorByAdmin: () => {},
  toggleSpeakerConfirmation: () => {},
  toggleSponsorConfirmation: () => {},
  deleteSpeaker: () => {},
  deleteSponsor: () => {},
});

export const EventDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [speakers, setSpeakers] = useState<SpeakerItem[]>(DEFAULT_SPEAKERS);
  const [sponsors, setSponsors] = useState<SponsorItem[]>(DEFAULT_SPONSORS);

  // Sync with localStorage
  useEffect(() => {
    const savedSpeakers = localStorage.getItem("event_speakers");
    const savedSponsors = localStorage.getItem("event_sponsors");

    if (savedSpeakers) {
      try {
        setSpeakers(JSON.parse(savedSpeakers));
      } catch (e) {}
    }
    if (savedSponsors) {
      try {
        setSponsors(JSON.parse(savedSponsors));
      } catch (e) {}
    }
  }, []);

  const saveSpeakers = (data: SpeakerItem[]) => {
    setSpeakers(data);
    localStorage.setItem("event_speakers", JSON.stringify(data));
  };

  const saveSponsors = (data: SponsorItem[]) => {
    setSponsors(data);
    localStorage.setItem("event_sponsors", JSON.stringify(data));
  };

  const addSpeakerProposal = (speakerData: Omit<SpeakerItem, "id" | "confirmed">) => {
    const newSpeaker: SpeakerItem = {
      ...speakerData,
      id: `sp-${Date.now()}`,
      confirmed: false, // Pending admin approval!
      registeredAt: new Date().toISOString(),
    };
    const updated = [newSpeaker, ...speakers];
    saveSpeakers(updated);
  };

  const addSponsorEnquiry = (sponsorData: Omit<SponsorItem, "id" | "confirmed" | "logo">) => {
    const newSponsor: SponsorItem = {
      ...sponsorData,
      id: `spon-${Date.now()}`,
      logo: "pending",
      confirmed: false, // Pending admin approval!
      registeredAt: new Date().toISOString(),
    };
    const updated = [...sponsors, newSponsor];
    saveSponsors(updated);
  };

  const createSpeakerByAdmin = (speakerData: Omit<SpeakerItem, "id">) => {
    const newSpeaker: SpeakerItem = {
      ...speakerData,
      id: `sp-${Date.now()}`,
      registeredAt: new Date().toISOString(),
    };
    const updated = [newSpeaker, ...speakers];
    saveSpeakers(updated);
  };

  const createSponsorByAdmin = (sponsorData: Omit<SponsorItem, "id">) => {
    const newSponsor: SponsorItem = {
      ...sponsorData,
      id: `spon-${Date.now()}`,
      registeredAt: new Date().toISOString(),
    };
    const updated = [...sponsors, newSponsor];
    saveSponsors(updated);
  };

  const toggleSpeakerConfirmation = (id: string) => {
    const updated = speakers.map((sp) =>
      sp.id === id ? { ...sp, confirmed: !sp.confirmed } : sp
    );
    saveSpeakers(updated);
  };

  const toggleSponsorConfirmation = (id: string) => {
    const updated = sponsors.map((sp) =>
      sp.id === id ? { ...sp, confirmed: !sp.confirmed } : sp
    );
    saveSponsors(updated);
  };

  const deleteSpeaker = (id: string) => {
    const updated = speakers.filter((sp) => sp.id !== id);
    saveSpeakers(updated);
  };

  const deleteSponsor = (id: string) => {
    const updated = sponsors.filter((sp) => sp.id !== id);
    saveSponsors(updated);
  };

  return (
    <EventDataContext.Provider
      value={{
        speakers,
        sponsors,
        addSpeakerProposal,
        addSponsorEnquiry,
        createSpeakerByAdmin,
        createSponsorByAdmin,
        toggleSpeakerConfirmation,
        toggleSponsorConfirmation,
        deleteSpeaker,
        deleteSponsor,
      }}
    >
      {children}
    </EventDataContext.Provider>
  );
};

export const useEventData = () => useContext(EventDataContext);
