import SendGridContactActions from "@/app/models/sendgrid";
import { Contact, ContactActions } from "@/app/models/contact";
import logger from "@/logger";
import { ZodError, z } from "zod";
import JSONResponse from "../utils/json-response";

const emailSchema = z.string().email("Invalid Email ID");

export async function PUT(req: Request) {
	logger.info("Register interest API called");
	logger.info(JSON.stringify(req), "Request");

	if (!req.headers.get("content-type")?.includes("application/json")) {
		return JSONResponse.error("Invalid content type", 400);
	}

	const contactActions: ContactActions = SendGridContactActions;

	try {
		const body = await req.json();
		emailSchema.parse(body.email);
		const contact: Contact = { email: body.email };
		await contactActions.addContact(contact);
		return JSONResponse.success(undefined, "Interest registered");
	} catch (error) {
		if (error instanceof ZodError) {
			return JSONResponse.error(error.issues[0].message, 422);
		}
		logger.error(error);
		return JSONResponse.unknownError();
	}
}
