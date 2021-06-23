import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
	@PrimaryColumn({ default: uuid() })
	readonly id: string;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@Column({ nullable: true, default: false })
	admin: boolean;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	update_at: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}

export { User };
