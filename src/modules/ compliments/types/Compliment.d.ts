import { TagType } from 'modules/tags/types/Tag';
import { UserType } from 'modules/users/types/User';

export type ComplimentType = {
	id?: string;
	user_sender: string;
	userSender?: UserType;
	user_receiver: string;
	userReceiver?: UserType;
	tag_id: string;
	tag?: TagType;
	message: string;
	created_at?: Date;
	updated_at?: Date;
};
