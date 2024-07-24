"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalItem() {
	useEffect(() => {
		(async function () {
			const cal = await getCalApi();
			cal("ui", {
				theme: "light",
				styles: { branding: { brandColor: "#5850EC" } },
				hideEventTypeDetails: false,
				layout: "month_view",
			});
		})();
	}, []);
	return (
		<Cal className="max-h-[550px] scroll"
			calLink="dog-leads-test/15min"
			style={{ width: "100%", height: "100%", overflowY: "scroll",  }}
			config={{ layout: "month_view" }}
		/>
	);
}
