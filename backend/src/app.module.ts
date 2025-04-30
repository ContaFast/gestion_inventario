import { Module } from '@nestjs/common';
import { SettingsModule } from './modules/settings/settings.module';
import { AuthModule } from './modules/auth/auth.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { SalesModule } from './modules/sales/sales.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ManagementModule } from './modules/management/management.module';

@Module({
  imports: [
    AuthModule,
    InventoryModule,
    SalesModule,
    DashboardModule,
    SettingsModule,
    ManagementModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
