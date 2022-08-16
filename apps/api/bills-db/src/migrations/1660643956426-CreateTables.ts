import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1660643956426 implements MigrationInterface {
    name = 'CreateTables1660643956426'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bill" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "customerName" character varying(255) NOT NULL, "number" integer NOT NULL, "contractNumber" integer NOT NULL, "totalPrice" double precision NOT NULL, "postTrackingNumber" character varying(64), "fromDate" character varying(32) NOT NULL, CONSTRAINT "PK_683b47912b8b30fe71d1fa22199" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sending_point" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "point" character varying(128) NOT NULL, "date" character varying(32) NOT NULL, "serviceId" uuid, CONSTRAINT "PK_7da8c13fbf8b38e9801f133aa8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "unloading_point" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "point" character varying(128) NOT NULL, "date" character varying(32) NOT NULL, "serviceId" uuid, CONSTRAINT "PK_29b498272600c42abeb9523cc84" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "service" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying(64) NOT NULL, "description" text, "count" integer NOT NULL, "price" double precision NOT NULL, "billId" uuid, CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sending_point" ADD CONSTRAINT "FK_632277f756bec7fb809b00df803" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "unloading_point" ADD CONSTRAINT "FK_0173e076a69ce63225c2b95ac12" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service" ADD CONSTRAINT "FK_b3707be7032a41be6de61616ab6" FOREIGN KEY ("billId") REFERENCES "bill"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service" DROP CONSTRAINT "FK_b3707be7032a41be6de61616ab6"`);
        await queryRunner.query(`ALTER TABLE "unloading_point" DROP CONSTRAINT "FK_0173e076a69ce63225c2b95ac12"`);
        await queryRunner.query(`ALTER TABLE "sending_point" DROP CONSTRAINT "FK_632277f756bec7fb809b00df803"`);
        await queryRunner.query(`DROP TABLE "service"`);
        await queryRunner.query(`DROP TABLE "unloading_point"`);
        await queryRunner.query(`DROP TABLE "sending_point"`);
        await queryRunner.query(`DROP TABLE "bill"`);
    }

}
