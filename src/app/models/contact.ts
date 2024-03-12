export type Contact = {
	email: string;
};

export type ContactActions = {
	addContact(contact: Contact): Promise<void>;
	removeContact(contact: Contact): Promise<void>;
	updateContact(contact: Contact): Promise<void>;
};
