"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getApiUrl } from "@/lib/api";

export interface SpeakerItem {
  id: string;
  name: string;
  email?: string;
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
  updateSpeakerByAdmin: (id: string, speakerData: Partial<SpeakerItem>) => void;
  createSponsorByAdmin: (sponsor: Omit<SponsorItem, "id">) => void;
  updateSponsorByAdmin: (id: string, sponsorData: Partial<SponsorItem>) => void;
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
  updateSpeakerByAdmin: () => {},
  createSponsorByAdmin: () => {},
  updateSponsorByAdmin: () => {},
  toggleSpeakerConfirmation: () => {},
  toggleSponsorConfirmation: () => {},
  deleteSpeaker: () => {},
  deleteSponsor: () => {},
});

export const EventDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [speakers, setSpeakers] = useState<SpeakerItem[]>(DEFAULT_SPEAKERS);
  const [sponsors, setSponsors] = useState<SponsorItem[]>(DEFAULT_SPONSORS);

  const fetchLivePublicData = async () => {
    const apiUrl = getApiUrl();
    try {
      const [speakersRes, sponsorsRes] = await Promise.all([
        fetch(`${apiUrl}/public/speakers`).catch(() => null),
        fetch(`${apiUrl}/public/sponsors`).catch(() => null),
      ]);

      if (speakersRes && speakersRes.ok) {
        const data = await speakersRes.json();
        const mappedConfirmed: SpeakerItem[] = (data.confirmed || []).map((sp: any) => ({
          id: sp.id,
          name: sp.name,
          role: sp.role,
          company: sp.company,
          topic: sp.topic,
          bio: sp.bio || '',
          linkedin: '',
          image: sp.image,
          confirmed: true,
        }));
        const mappedProposals: SpeakerItem[] = (data.proposals || []).map((prop: any) => ({
          id: prop.id,
          name: prop.name,
          email: prop.email,
          role: prop.role || 'Speaker Applicant',
          company: prop.company || 'Pending Review',
          topic: prop.topic,
          bio: prop.abstract,
          linkedin: '',
          confirmed: prop.status === 'APPROVED' || prop.confirmed === true,
        }));
        const allSpeakers = [...mappedConfirmed, ...mappedProposals];
        if (allSpeakers.length > 0) {
          setSpeakers(allSpeakers);
        }
      }

      if (sponsorsRes && sponsorsRes.ok) {
        const data = await sponsorsRes.json();
        const mappedConfirmed: SponsorItem[] = (data.confirmed || []).map((sp: any) => ({
          id: sp.id,
          name: sp.name,
          category: sp.tier || sp.category || 'Sponsor Partner',
          desc: '',
          logo: sp.logo || 'pending',
          confirmed: true,
        }));
        const mappedEnquiries: SponsorItem[] = (data.enquiries || []).map((enq: any) => ({
          id: enq.id,
          name: enq.company,
          category: `${enq.tier || 'COMMUNITY'} Partner`,
          desc: enq.message || '',
          logo: enq.logoUrl || 'pending',
          confirmed: enq.status === 'APPROVED' || enq.confirmed === true,
          contactEmail: enq.email,
        }));
        const allSponsors = [...mappedConfirmed, ...mappedEnquiries];
        if (allSponsors.length > 0) {
          setSponsors(allSponsors);
        }
      }
    } catch (err) {
      console.warn('Backend public data fetch fallback:', err);
    }
  };

  // Sync with localStorage & Backend API
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

    fetchLivePublicData();
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
      confirmed: false,
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
      confirmed: false,
      registeredAt: new Date().toISOString(),
    };
    const updated = [...sponsors, newSponsor];
    saveSponsors(updated);
  };

  const createSpeakerByAdmin = async (speakerData: Omit<SpeakerItem, "id">) => {
    const apiUrl = getApiUrl();
    try {
      await fetch(`${apiUrl}/admin/speakers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          name: speakerData.name,
          email: speakerData.email || 'speaker@rec.edu',
          company: speakerData.company,
          role: speakerData.role,
          topic: speakerData.topic,
          abstract: speakerData.bio,
          image: speakerData.image,
          photoUrl: speakerData.image,
          linkedin: speakerData.linkedin,
          status: 'APPROVED',
          confirmed: speakerData.confirmed,
        }),
      });
    } catch (err) {
      console.warn('Admin speaker create API fallback:', err);
    }
    const newSpeaker: SpeakerItem = {
      ...speakerData,
      id: `sp-${Date.now()}`,
      registeredAt: new Date().toISOString(),
    };
    const updated = [newSpeaker, ...speakers];
    saveSpeakers(updated);
  };

  const updateSpeakerByAdmin = async (id: string, speakerData: Partial<SpeakerItem>) => {
    const target = speakers.find((sp) => sp.id === id);
    if (target && !id.startsWith('sp-')) {
      const apiUrl = getApiUrl();
      try {
        await fetch(`${apiUrl}/admin/speakers/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            ...(speakerData.name && { name: speakerData.name }),
            ...(speakerData.email && { email: speakerData.email }),
            ...(speakerData.role !== undefined && { role: speakerData.role }),
            ...(speakerData.company !== undefined && { company: speakerData.company }),
            ...(speakerData.topic && { topic: speakerData.topic }),
            ...(speakerData.bio !== undefined && { bio: speakerData.bio, abstract: speakerData.bio }),
            ...(speakerData.image !== undefined && { image: speakerData.image, photoUrl: speakerData.image }),
            ...(speakerData.linkedin !== undefined && { linkedin: speakerData.linkedin }),
            ...(speakerData.confirmed !== undefined && { confirmed: speakerData.confirmed }),
          }),
        });
      } catch (err) {
        console.warn('Admin speaker patch API fallback:', err);
      }
    }
    const updated = speakers.map((sp) =>
      sp.id === id ? { ...sp, ...speakerData } : sp
    );
    saveSpeakers(updated);
  };

  const createSponsorByAdmin = async (sponsorData: Omit<SponsorItem, "id">) => {
    const apiUrl = getApiUrl();
    try {
      await fetch(`${apiUrl}/admin/sponsors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          company: sponsorData.name,
          contact: sponsorData.name,
          email: sponsorData.contactEmail || 'sponsor@rec.edu',
          tier: sponsorData.category,
          message: sponsorData.desc,
          logoUrl: sponsorData.logo,
          logo: sponsorData.logo,
          status: 'APPROVED',
          confirmed: sponsorData.confirmed,
        }),
      });
    } catch (err) {
      console.warn('Admin sponsor create API fallback:', err);
    }
    const newSponsor: SponsorItem = {
      ...sponsorData,
      id: `spon-${Date.now()}`,
      registeredAt: new Date().toISOString(),
    };
    const updated = [...sponsors, newSponsor];
    saveSponsors(updated);
  };

  const updateSponsorByAdmin = async (id: string, sponsorData: Partial<SponsorItem>) => {
    const target = sponsors.find((sp) => sp.id === id);
    if (target && !id.startsWith('spon-')) {
      const apiUrl = getApiUrl();
      try {
        await fetch(`${apiUrl}/admin/sponsors/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            ...(sponsorData.name && { company: sponsorData.name }),
            ...(sponsorData.category && { tier: sponsorData.category }),
            ...(sponsorData.desc !== undefined && { message: sponsorData.desc }),
            ...(sponsorData.logo !== undefined && { logoUrl: sponsorData.logo, logo: sponsorData.logo }),
            ...(sponsorData.confirmed !== undefined && { confirmed: sponsorData.confirmed }),
          }),
        });
      } catch (err) {
        console.warn('Admin sponsor patch API fallback:', err);
      }
    }
    const updated = sponsors.map((sp) =>
      sp.id === id ? { ...sp, ...sponsorData } : sp
    );
    saveSponsors(updated);
  };

  const toggleSpeakerConfirmation = async (id: string) => {
    const target = speakers.find(sp => sp.id === id);
    if (target && !id.startsWith('sp-')) {
      const apiUrl = getApiUrl();
      try {
        await fetch(`${apiUrl}/admin/speakers/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            status: !target.confirmed ? 'APPROVED' : 'PENDING',
            confirmed: !target.confirmed,
          }),
        });
      } catch (err) {
        console.warn('Admin speaker patch API fallback:', err);
      }
    }
    const updated = speakers.map((sp) =>
      sp.id === id ? { ...sp, confirmed: !sp.confirmed } : sp
    );
    saveSpeakers(updated);
  };

  const toggleSponsorConfirmation = async (id: string) => {
    const target = sponsors.find(sp => sp.id === id);
    if (target && !id.startsWith('spon-')) {
      const apiUrl = getApiUrl();
      try {
        await fetch(`${apiUrl}/admin/sponsors/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            status: !target.confirmed ? 'APPROVED' : 'PENDING',
            confirmed: !target.confirmed,
          }),
        });
      } catch (err) {
        console.warn('Admin sponsor patch API fallback:', err);
      }
    }
    const updated = sponsors.map((sp) =>
      sp.id === id ? { ...sp, confirmed: !sp.confirmed } : sp
    );
    saveSponsors(updated);
  };

  const deleteSpeaker = async (id: string) => {
    if (!id.startsWith('sp-')) {
      const apiUrl = getApiUrl();
      try {
        await fetch(`${apiUrl}/admin/speakers/${id}`, {
          method: 'DELETE',
          credentials: 'include',
        });
      } catch (err) {
        console.warn('Admin speaker delete API fallback:', err);
      }
    }
    const updated = speakers.filter((sp) => sp.id !== id);
    saveSpeakers(updated);
  };

  const deleteSponsor = async (id: string) => {
    if (!id.startsWith('spon-')) {
      const apiUrl = getApiUrl();
      try {
        await fetch(`${apiUrl}/admin/sponsors/${id}`, {
          method: 'DELETE',
          credentials: 'include',
        });
      } catch (err) {
        console.warn('Admin sponsor delete API fallback:', err);
      }
    }
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
        updateSpeakerByAdmin,
        createSponsorByAdmin,
        updateSponsorByAdmin,
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
