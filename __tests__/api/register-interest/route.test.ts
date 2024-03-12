/*
 * @jest-environment node
 */

// import { PUT } from "@/app/api/register-interest/route";
// import { ContactActions } from "@/app/models/contact";
// import { NextApiRequest } from "next";
// import { createRequest } from "node-mocks-http";

// describe("register interest API", () => {
// 	const mockContactActions: ContactActions = {
// 		addContact: jest.fn(),
// 		removeContact: jest.fn(),
// 		updateContact: jest.fn(),
// 	};

// 	it("validate email", async () => {
// 		const req = createRequest<NextApiRequest>({
// 			method: "PUT",
// 			headers: {
// 				"content-type": "application/json",
// 			},
// 			body: {
// 				email: "test@test.com",
// 			},
// 		});

// 		return PUT(req, mockContactActions).then((data) => {
// 			expect(data).toBe("peanut butter");
// 		});
// 	});
// });
