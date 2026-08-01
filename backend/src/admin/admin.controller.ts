import { Controller, Get, Post, Patch, Delete, Body, Param, Query, HttpStatus, HttpCode } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('admin')
export class AdminController {
  constructor(private prisma: PrismaService) {}

  // 1. Dashboard Overall Statistics
  @Get('dashboard-stats')
  async getDashboardStats() {
    const totalRegistrations = await this.prisma.user.count({ where: { role: 'PARTICIPANT', deletedAt: null } });
    const verifiedEntries = await this.prisma.registration.count({ where: { entryVerified: true } });
    const goodiesDistributed = await this.prisma.registration.count({ where: { goodiesVerified: true } });
    
    const speakerProposalsCount = await this.prisma.speakerProposal.count();
    const approvedSpeakersCount = await this.prisma.speakerProposal.count({ where: { status: 'APPROVED' } });
    const confirmedSpeakersCount = await this.prisma.confirmedSpeaker.count();

    const sponsorEnquiriesCount = await this.prisma.sponsorEnquiry.count();
    const approvedSponsorsCount = await this.prisma.sponsorEnquiry.count({ where: { status: 'APPROVED' } });
    const confirmedSponsorsCount = await this.prisma.confirmedSponsor.count();

    const hackathonTeamsCount = await this.prisma.hackathonRegistration.count();

    return {
      success: true,
      stats: {
        totalRegistrations,
        verifiedEntries,
        goodiesDistributed,
        speakerProposalsCount,
        approvedSpeakersCount,
        confirmedSpeakersCount,
        sponsorEnquiriesCount,
        approvedSponsorsCount,
        confirmedSponsorsCount,
        hackathonTeamsCount,
      },
    };
  }

  // 2. Speaker Proposals Management (CRUD + Approve/Reject)
  @Get('speakers')
  async getSpeakerProposals() {
    const proposals = await this.prisma.speakerProposal.findMany({ orderBy: { createdAt: 'desc' } });
    const confirmed = await this.prisma.confirmedSpeaker.findMany({ orderBy: { order: 'asc' } });
    return { success: true, proposals, confirmed };
  }

  @Post('speakers')
  @HttpCode(HttpStatus.CREATED)
  async createSpeakerProposal(@Body() data: any) {
    const item = await this.prisma.speakerProposal.create({
      data: {
        name: data.name,
        email: data.email || 'speaker@rec.edu',
        phone: data.phone || null,
        company: data.company || null,
        role: data.role || null,
        topic: data.topic,
        abstract: data.abstract || data.bio || 'Added by admin',
        photoUrl: data.photoUrl || data.image || null,
        linkedin: data.linkedin || null,
        status: data.status || 'APPROVED',
        confirmed: data.confirmed || false,
      },
    });
    return { success: true, message: 'Speaker created successfully!', data: item };
  }

  @Patch('speakers/:id')
  async updateSpeakerProposal(@Param('id') id: string, @Body() data: any) {
    const item = await this.prisma.speakerProposal.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.email && { email: data.email }),
        ...(data.phone !== undefined && { phone: data.phone }),
        ...(data.company !== undefined && { company: data.company }),
        ...(data.role !== undefined && { role: data.role }),
        ...(data.topic && { topic: data.topic }),
        ...(data.abstract !== undefined && { abstract: data.abstract }),
        ...(data.bio !== undefined && { abstract: data.bio }),
        ...((data.photoUrl !== undefined || data.image !== undefined) && { photoUrl: data.photoUrl || data.image }),
        ...(data.linkedin !== undefined && { linkedin: data.linkedin }),
        ...(data.status && { status: data.status }),
        ...(data.confirmed !== undefined && { confirmed: data.confirmed }),
      },
    });
    return { success: true, message: 'Speaker updated successfully!', data: item };
  }

  @Delete('speakers/:id')
  async deleteSpeakerProposal(@Param('id') id: string) {
    await this.prisma.speakerProposal.delete({ where: { id } });
    return { success: true, message: 'Speaker proposal deleted successfully!' };
  }

  // 3. Sponsor Enquiries Management (CRUD + Approve/Reject)
  @Get('sponsors')
  async getSponsorEnquiries() {
    const enquiries = await this.prisma.sponsorEnquiry.findMany({ orderBy: { createdAt: 'desc' } });
    const confirmed = await this.prisma.confirmedSponsor.findMany({ orderBy: { order: 'asc' } });
    return { success: true, enquiries, confirmed };
  }

  @Post('sponsors')
  @HttpCode(HttpStatus.CREATED)
  async createSponsorEnquiry(@Body() data: any) {
    const item = await this.prisma.sponsorEnquiry.create({
      data: {
        company: data.company,
        contact: data.contact,
        contactNumber: data.contactNumber || null,
        alternateNumber: data.alternateNumber || null,
        email: data.email,
        tier: data.tier || 'COMMUNITY',
        message: data.message || null,
        logoUrl: data.logoUrl || data.logo || null,
        status: data.status || 'APPROVED',
        confirmed: data.confirmed || false,
      },
    });
    return { success: true, message: 'Sponsor created successfully!', data: item };
  }

  @Patch('sponsors/:id')
  async updateSponsorEnquiry(@Param('id') id: string, @Body() data: any) {
    const item = await this.prisma.sponsorEnquiry.update({
      where: { id },
      data: {
        ...(data.company && { company: data.company }),
        ...(data.contact && { contact: data.contact }),
        ...(data.contactNumber !== undefined && { contactNumber: data.contactNumber }),
        ...(data.email && { email: data.email }),
        ...(data.tier && { tier: data.tier }),
        ...(data.message !== undefined && { message: data.message }),
        ...((data.logoUrl !== undefined || data.logo !== undefined) && { logoUrl: data.logoUrl || data.logo }),
        ...(data.status && { status: data.status }),
        ...(data.confirmed !== undefined && { confirmed: data.confirmed }),
      },
    });
    return { success: true, message: 'Sponsor updated successfully!', data: item };
  }

  @Delete('sponsors/:id')
  async deleteSponsorEnquiry(@Param('id') id: string) {
    await this.prisma.sponsorEnquiry.delete({ where: { id } });
    return { success: true, message: 'Sponsor enquiry deleted successfully!' };
  }

  // 4. Hackathon Teams Management (CRUD + Approve/Reject)
  @Get('hackathons')
  async getHackathonRegistrations() {
    const items = await this.prisma.hackathonRegistration.findMany({ orderBy: { createdAt: 'desc' } });
    return { success: true, data: items };
  }

  @Post('hackathons')
  @HttpCode(HttpStatus.CREATED)
  async createHackathonRegistration(@Body() data: any) {
    const item = await this.prisma.hackathonRegistration.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        college: data.college,
        team: data.team,
        domain: data.domain || 'GenAI & Serverless',
        size: String(data.size || '4'),
        status: data.status || 'APPROVED',
      },
    });
    return { success: true, message: 'Hackathon team registered successfully!', data: item };
  }

  @Patch('hackathons/:id')
  async updateHackathonRegistration(@Param('id') id: string, @Body() data: any) {
    const item = await this.prisma.hackathonRegistration.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.email && { email: data.email }),
        ...(data.phone !== undefined && { phone: data.phone }),
        ...(data.college && { college: data.college }),
        ...(data.team && { team: data.team }),
        ...(data.domain && { domain: data.domain }),
        ...(data.size && { size: String(data.size) }),
        ...(data.status && { status: data.status }),
      },
    });
    return { success: true, message: 'Hackathon registration updated successfully!', data: item };
  }

  @Delete('hackathons/:id')
  async deleteHackathonRegistration(@Param('id') id: string) {
    await this.prisma.hackathonRegistration.delete({ where: { id } });
    return { success: true, message: 'Hackathon registration deleted successfully!' };
  }

  // 5. Attendees / Participant Registrations Management (CRUD)
  @Get('registrations')
  async getRegistrations() {
    const users = await this.prisma.user.findMany({
      where: { role: 'PARTICIPANT', deletedAt: null },
      include: { registration: true },
      orderBy: { createdAt: 'desc' },
    });
    return { success: true, data: users };
  }

  @Delete('registrations/:id')
  async deleteRegistration(@Param('id') userId: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { deletedAt: new Date() },
    });
    return { success: true, message: 'Participant deleted successfully!' };
  }
}
