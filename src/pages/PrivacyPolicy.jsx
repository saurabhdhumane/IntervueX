import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 heading-premium mb-8">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-8 font-medium">Last updated: April 24, 2026</p>

        <div className="prose prose-blue max-w-none space-y-10 text-gray-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 heading-premium mb-4">1. Information We Collect</h2>
            <p>
              When you use IntervueX, we collect information you provide directly to us. This includes your name, email address, and profile photo when you authenticate using Google Sign-In. We also collect the interview details, schedules, and notes that you enter into the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 heading-premium mb-4">2. Data Storage and Synchronization</h2>
            <p>
              To provide you with a seamless experience across devices and ensure your data is backed up, IntervueX features an advanced offline-first architecture. Your data is stored locally on your device for instant access without an internet connection, and securely synchronizes with our backend servers in the background when you are online. All data synchronized to our servers is stored using secure databases.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 heading-premium mb-4">3. Notifications</h2>
            <p>
              We use third-party services, specifically OneSignal, to deliver push notifications for interview reminders and important updates. To do this, we may share a unique device identifier with OneSignal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 heading-premium mb-4">4. Advertising & Third-Party Services</h2>
            <p>
              To keep IntervueX free, we use third-party services for advertising and analytics. 
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li>
                <strong>Google AdMob:</strong> This app uses Google AdMob which may collect device information (such as Advertising IDs) for the purpose of serving personalized or non-personalized advertisements.
              </li>
              <li>
                <strong>Google Authentication:</strong> We use Google services to authenticate your account securely.
              </li>
            </ul>
            <p className="mt-4">
              For more information on how Google uses data, please visit their <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy & Terms</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 heading-premium mb-4">5. Data Sharing</h2>
            <p>
              We do not sell your personal information. We only share data with the third-party service providers mentioned above (such as Google and OneSignal) to the extent necessary to provide authentication, notifications, and advertising services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 heading-premium mb-4">6. Security</h2>
            <p>
              We prioritize the security of your data. All sensitive personal information (including your name, email, phone, and location) as well as your private interview details (companies, salaries, and notes) are secured at rest using military-grade <b>AES-256-GCM encryption</b>. This means your private data is encrypted before it is written to our database, adding a critical layer of security to ensure your privacy is strictly maintained. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 heading-premium mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
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
