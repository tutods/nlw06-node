import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('tags')
class Tag {
	@PrimaryColumn({ default: uuid() })
	readonly id: string;

	@Column()
	name: string;

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

export { Tag };
