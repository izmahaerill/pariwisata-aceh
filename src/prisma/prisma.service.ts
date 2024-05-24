import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://db_pariwisata_aceh_owner:UbgILTs5jom8@ep-fragrant-cake-a15g0wrn-pooler.ap-southeast-1.aws.neon.tech/db_pariwisata_aceh?sslmode=require',
        },
      },
    });
  }
}
