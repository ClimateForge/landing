export default function TermsPage() {
	return (
		<div className="container mx-auto px-4 py-8 max-w-4xl">
			<h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
			<p className="text-sm text-gray-600 mb-6">
				Last Updated: April 4, 2024
			</p>

			<p className="mb-4">
				Welcome to ClimateForge.ai. By accessing or using our website
				and services, you agree to be bound by these Terms of Use. If
				you do not agree with any part of these Terms, you should not
				use our services.
			</p>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					1. Acceptance of Terms
				</h2>
				<p>
					By using ClimateForge.ai, you agree to comply with these
					Terms of Use and any applicable laws and regulations.
				</p>
			</div>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					2. Use of Google Services
				</h2>
				<p>
					If you access ClimateForge.ai using Google APIs or services,
					you must also comply with Google's Terms of Service (
					<a
						href="https://developers.google.com/terms"
						className="text-blue-600 hover:underline"
					>
						https://developers.google.com/terms
					</a>
					). Your use of Google login, data access, or integrations is
					subject to their privacy policies and terms.
				</p>
			</div>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					3. User Accounts and Registration
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						Users must provide accurate and up-to-date information
						when creating an account.
					</li>
					<li>
						You are responsible for maintaining the confidentiality
						of your account credentials.
					</li>
					<li>
						ClimateForge.ai reserves the right to suspend or
						terminate accounts for violations of these Terms.
					</li>
				</ul>
			</div>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					4. Privacy Policy
				</h2>
				<p>
					Your use of ClimateForge.ai is also governed by our Privacy
					Policy, which details how we collect, use, and protect user
					data. Please review it for more information.
				</p>
			</div>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					5. Prohibited Conduct
				</h2>
				<p>Users may not:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Violate any applicable laws or regulations.</li>
					<li>
						Use ClimateForge.ai for unauthorized or fraudulent
						purposes.
					</li>
					<li>
						Attempt to interfere with, disrupt, or gain unauthorized
						access to our systems.
					</li>
					<li>
						Infringe on intellectual property rights of
						ClimateForge.ai or third parties.
					</li>
					<li>
						Use the service to distribute malware, spyware, or other
						harmful code.
					</li>
					<li>
						Engage in activities that could disable, overburden, or
						impair the proper functioning of our services.
					</li>
				</ul>
			</div>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					6. Intellectual Property Rights
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						All content on ClimateForge.ai, including text,
						graphics, logos, and software, is the property of
						ClimateForge.ai or its licensors.
					</li>
					<li>
						Users may not copy, distribute, or modify our content
						without prior written consent.
					</li>
				</ul>
			</div>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					7. Disclaimers and Limitation of Liability
				</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						ClimateForge.ai is provided "as is" without warranties
						of any kind.
					</li>
					<li>
						We are not responsible for inaccuracies, errors, or
						interruptions in service.
					</li>
					<li>
						To the extent permitted by law, ClimateForge.ai shall
						not be liable for any indirect, incidental, or
						consequential damages arising from the use of our
						services.
					</li>
				</ul>
			</div>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					8. Modifications to Terms
				</h2>
				<p>
					We reserve the right to update these Terms at any time.
					Continued use of ClimateForge.ai after changes are made
					constitutes acceptance of the new Terms. We will notify
					users of material changes to these Terms.
				</p>
			</div>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">9. Termination</h2>
				<p>
					ClimateForge.ai reserves the right to terminate or suspend
					access to our services, without prior notice or liability,
					for any reason, including breach of these Terms.
				</p>
			</div>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					10. Governing Law
				</h2>
				<p>
					These Terms are governed by the laws of California, United
					States. Any disputes will be resolved in the appropriate
					courts of California, United States.
				</p>
			</div>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					11. Data Processing and Security
				</h2>
				<p>
					We implement appropriate technical and organizational
					measures to ensure a level of security appropriate to the
					risk of processing user data. We will promptly notify users
					of any security breaches that may affect their personal
					information.
				</p>
			</div>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					12. Contact Information
				</h2>
				<p>
					For any questions regarding these Terms, please contact us
					at{" "}
					<a
						href="mailto:team@climateforge.ai"
						className="text-blue-600 hover:underline"
					>
						team@climateforge.ai
					</a>
					.
				</p>
			</div>

			<p className="mt-8 font-medium">
				By using ClimateForge.ai, you acknowledge that you have read and
				agree to these Terms of Use.
			</p>
		</div>
	);
}
