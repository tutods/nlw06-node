import { Tag } from 'modules/tags/entities/Tag';
import { User } from 'modules/users/entities/User';
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryColumn,
	UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('compliments')
class Compliment {
	@PrimaryColumn({ default: uuid() })
	readonly id: string;

	@Column()
	user_sender: string;

	@ManyToOne(() => User, { nullable: false })
	@JoinColumn({ name: 'user_sender' })
	userSender: User;

	@Column()
	user_receiver: string;

	@JoinColumn({ name: 'user_receiver' })
	@ManyToOne(() => User, { nullable: false })
	userReceiver: User;

	@Column()
	tag_id: string;

	@JoinColumn({ name: 'tag_id' })
	@ManyToOne(() => Tag, { nullable: false })
	tag: Tag;

	@Column()
	message: string;

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

export { Compliment };
