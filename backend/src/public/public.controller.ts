import { Controller, Get, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('public')
export class PublicController {
  constructor(private prisma: PrismaService) {}

  @Post('speaker-proposal')
  @HttpCode(HttpStatus.OK)
  async createSpeakerProposal(@Body() data: any) {
    const proposal = await this.prisma.speakerProposal.create({
      data: {
        name: data.name || data.fullName,
        email: data.email,
        phone: data.phone || data.mobile || data.contactNumber,
        company: data.company || data.organization,
        role: data.role || data.designation || data.title,
        topic: data.topic || data.sessionTitle,
        abstract: data.abstract || data.sessionAbstract || data.description || 'Proposal submitted',
        bio: data.bio,
        status: 'PENDING',
      },
    });
    return { success: true, message: 'Speaker proposal submitted successfully!', data: proposal };
  }

  @Post('sponsor-enquiry')
  @HttpCode(HttpStatus.OK)
  async createSponsorEnquiry(@Body() data: any) {
    const enquiry = await this.prisma.sponsorEnquiry.create({
      data: {
        company: data.company || data.companyName,
        contact: data.contact || data.contactPerson || data.fullName || data.name,
        contactNumber: data.contactNumber || data.phone || data.mobile,
        alternateNumber: data.alternateNumber,
        email: data.email,
        tier: data.tier || data.sponsorshipTier || 'COMMUNITY',
        message: data.message || data.comments,
        status: 'PENDING',
      },
    });
    return { success: true, message: 'Sponsor enquiry submitted successfully!', data: enquiry };
  }

  @Post('hackathon-registration')
  @HttpCode(HttpStatus.OK)
  async createHackathonRegistration(@Body() data: any) {
    const registration = await this.prisma.hackathonRegistration.create({
      data: {
        name: data.name || data.fullName || data.leaderName,
        email: data.email,
        phone: data.phone || data.mobile,
        college: data.college || data.institution,
        team: data.team || data.teamName,
        domain: data.domain || data.track || 'GenAI & Serverless',
        size: String(data.size || data.teamSize || '4'),
        status: 'APPROVED',
      },
    });
    return { success: true, message: 'Hackathon team registered successfully!', data: registration };
  }

  @Get('speakers')
  async getPublicSpeakers() {
    const confirmed = await this.prisma.confirmedSpeaker.findMany({
      orderBy: { order: 'asc' },
    });
    const approvedProposals = await this.prisma.speakerProposal.findMany({
      where: { status: 'APPROVED' },
    });
    return { success: true, confirmed, proposals: approvedProposals };
  }

  @Get('sponsors')
  async getPublicSponsors() {
    const confirmed = await this.prisma.confirmedSponsor.findMany({
      orderBy: { order: 'asc' },
    });
    const approvedEnquiries = await this.prisma.sponsorEnquiry.findMany({
      where: { status: 'APPROVED' },
    });
    return { success: true, confirmed, enquiries: approvedEnquiries };
  }

  @Get('hackathons')
  async getPublicHackathons() {
    const count = await this.prisma.hackathonRegistration.count();
    const teams = await this.prisma.hackathonRegistration.findMany({
      take: 20,
      orderBy: { createdAt: 'desc' },
    });
    return { success: true, registeredTeams: count, recentTeams: teams };
  }
}
