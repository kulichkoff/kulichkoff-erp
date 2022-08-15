import {MigrationInterface, QueryRunner} from "typeorm";

export class MyInit1660593619104 implements MigrationInterface {
    name = 'MyInit1660593619104'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bill" ADD "fromDate" character varying(32) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bill" DROP COLUMN "fromDate"`);
    }

}
