import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCompliment1624815241334 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'compliments',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true
					},
					{
						name: 'user_sender',
						type: 'uuid'
					},
					{
						name: 'user_receiver',
						type: 'uuid'
					},
					{
						name: 'tag_id',
						type: 'uuid'
					},
					{
						name: 'message',
						type: 'varchar'
					},
					{
						name: 'created_at',
						type: 'timestamp with time zone',
						default: 'now()'
					},
					{
						name: 'updated_at',
						type: 'timestamp with time zone',
						default: 'now()'
					}
				],
				foreignKeys: [
					{
						name: 'user_sender_fk',
						columnNames: ['user_sender'],
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						onDelete: 'SET NULL',
						onUpdate: 'SET NULL'
					},
					{
						name: 'user_receiver_fk',
						columnNames: ['user_receiver'],
						referencedTableName: 'users',
						referencedColumnNames: ['id'],
						onDelete: 'SET NULL',
						onUpdate: 'SET NULL'
					},
					{
						name: 'tag_id_fk',
						columnNames: ['tag_id'],
						referencedTableName: 'tags',
						referencedColumnNames: ['id'],
						onDelete: 'CASCADE',
						onUpdate: 'CASCADE'
					}
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('compliments', true, true);
	}
}
