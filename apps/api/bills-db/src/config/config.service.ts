import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

class ConfigService {
    constructor(
        private readonly env: { [k: string]: string | undefined },
    ) {}

    public getValue(key: string, throwOnMissing = true): string {
        const value = this.env[key];

        if (!value && throwOnMissing) {
            throw new Error(`Config error — missing env.${key}`);
        }

        return value as string;
    }

    /**
     * checks if all needed values exist
     * @param keys
     */
    public ensureValues(keys: string[]): ConfigService {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }

    public get port(): string {
        return this.getValue('PORT');
    }

    public get isProduction(): boolean {
        const mode = this.getValue('MODE', false);
        return mode === 'PROD';
    }

    public get typeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',

            host: this.getValue('POSTGRES_HOST', false) || 'localhost',
            port: parseInt(this.getValue('POSTGRES_PORT', false)) || 5432,
            username: this.getValue('POSTGRES_USER', false) || 'postgres',
            password: this.getValue('POSTGRES_PASSWORD'),
            database: this.getValue('POSTGRES_DATABASE', false) || 'kf_erp',

            autoLoadEntities: true,
        };
    }

    public get typeOrmJsonOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',

            host: this.getValue('POSTGRES_HOST', false) || 'localhost',
            port: parseInt(this.getValue('POSTGRES_PORT', false)) || 5432,
            username: this.getValue('POSTGRES_USER', false) || 'postgres',
            password: this.getValue('POSTGRES_PASSWORD'),
            database: this.getValue('POSTGRES_DATABASE', false) || 'kf_erp',

            entities: ['**/models/*{.ts,.js}'],

            migrationsTableName: 'migration',
            migrations: [path.join('**', 'migrations', '*{.ts,.js}')],

            synchronize: false,

            ssl: false,
        };
    }

}

const configService = new ConfigService(process.env)
    .ensureValues([
        'POSTGRES_PASSWORD',
    ]);

export { configService };
