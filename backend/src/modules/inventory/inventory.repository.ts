import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class InventoryRepository {
  constructor(private readonly prisma: PrismaService){}

  async findAll(){
    return await this.prisma.producto.findMany();
  }
}