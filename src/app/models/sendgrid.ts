import { Contact, ContactActions } from "./contact";
import logger from "@/logger";
import client from "@sendgrid/client";
import { ClientRequest } from "@sendgrid/client/src/request";

if (!process.env.SENDGRID_API_KEY) {
	logger.error("SENDGRID_API_KEY is not defined");
	throw new Error("SENDGRID_API_KEY is not defined");
}
client.setApiKey(process.env.SENDGRID_API_KEY);

const SendGridContactActions: ContactActions = {
	addContact: async (contact: Contact) => {
		const data = {
			contacts: [{ email: contact.email }],
		};

		const request: ClientRequest = {
			url: `/v3/marketing/contacts`,
			method: "PUT",
			body: data,
		};

		return client
			.request(request)
			.then(([response, body]) => {
				console.log(response.statusCode);
				console.log(response.body);
			})
			.catch((error) => {
				console.error(error);
			});
	},

	removeContact: async (contact: Contact) => {
		// Remove the contact from SendGrid
	},

	updateContact: async (contact: Contact) => {
		// Update the contact in SendGrid
	},
};

export default SendGridContactActions;
