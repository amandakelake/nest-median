import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// TODO use @nestjs-prisma to auto reject prisma module

@Injectable()
export class PrismaService extends PrismaClient {}
