const JSONResponse = {
	success: (data?: Record<string, any> | Array<any>, message?: string) => {
		return Response.json({ success: true, data, message }, { status: 200 });
	},
	error: (message: string, status: number) => {
		return Response.json({ success: false, message }, { status });
	},
	unknownError: () => {
		return Response.json(
			{ success: false, message: "Internal server error" },
			{ status: 500 }
		);
	},
};

export default JSONResponse;
