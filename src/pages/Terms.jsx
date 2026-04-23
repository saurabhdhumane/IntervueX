import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 heading-premium mb-8">
          Terms & Conditions
        </h1>
        <p className="text-gray-500 mb-8 font-medium">Last updated: April 23, 2026</p>

        <div className="prose prose-blue max-w-none space-y-10 text-gray-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 heading-premium mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using IntervueX ("the App"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 heading-premium mb-4">2. Description of Service</h2>
            <p>
              IntervueX is an interview tracking and management application that allows users to organize their job applications, schedule reminders, and synchronize data across devices using Google authentication and our backend services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 heading-premium mb-4">3. User Accounts</h2>
            <p>
              To access certain features of the App, you must sign in using your Google account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. We reserve the right to terminate accounts that violate these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 heading-premium mb-4">4. User Content</h2>
            <p>
              You retain all rights to the information, notes, and data you submit through the App ("User Content"). By submitting User Content, you grant us a license to store, process, and synchronize this data across our servers to provide the service to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 heading-premium mb-4">5. Third-Party Services</h2>
            <p>
              The App integrates with third-party services, including Google (for authentication and advertising) and OneSignal (for push notifications). Your use of these third-party services is subject to their respective terms and policies. We are not responsible for the availability or functionality of these external services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 heading-premium mb-4">6. Limitation of Liability</h2>
            <p>
              IntervueX is provided "as is" without warranties of any kind. We shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the App, including but not limited to data loss or device malfunction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 heading-premium mb-4">7. Changes to Terms</h2>
            <p>
              We may update these Terms and Conditions from time to time. We will notify you of any significant changes by updating the "Last updated" date at the top of this page. Your continued use of the App after such modifications constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 heading-premium mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="mt-4 font-bold text-gray-900">
              Email: <a href="mailto:hello@nopelt.com" className="text-blue-600">hello@nopelt.com</a>
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
