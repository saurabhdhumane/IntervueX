import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

export default function AccountDeletion() {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Point this to your live AWS Lambda backend or local backend
      // Replace with production URL when deployed
      const apiUrl = window.location.hostname === 'localhost' 
        ? 'http://localhost:3000/api/auth/delete-request'
        : 'https://1j3jv18ab4.execute-api.ap-south-1.amazonaws.com/api/auth/delete-request';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, reason }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit request');
      }

      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 sm:pt-36 flex flex-col justify-center py-12 px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sm:mx-auto sm:w-full sm:max-w-md text-center"
      >
        <div className="mx-auto h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
          <ShieldCheck className="h-6 w-6 text-indigo-600" />
        </div>
        <h2 className="mt-2 text-center text-3xl font-extrabold text-slate-900 tracking-tight">
          Data Deletion Request
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600 max-w-sm mx-auto">
          We respect your privacy. Submit your email to request complete deletion of your account and associated data.
        </p>
      </motion.div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white py-8 px-6 shadow-xl shadow-slate-200/50 sm:rounded-2xl sm:px-10 border border-slate-100"
        >
          {status === 'success' ? (
            <div className="text-center py-6">
              <div className="mx-auto h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Request Received</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Your deletion request has been securely logged. Your account and all associated data will be permanently wiped within 7 business days.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-indigo-600 font-medium text-sm hover:text-indigo-500"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Registered Email Address <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-slate-700">
                  Reason for deletion (Optional)
                </label>
                <div className="mt-2">
                  <textarea
                    id="reason"
                    name="reason"
                    rows={3}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow resize-none"
                    placeholder="Let us know how we could have done better..."
                  />
                </div>
              </div>

              {status === 'error' && (
                <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">
                  Something went wrong submitting your request. Please try again.
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {status === 'loading' ? (
                    <Loader2 className="animate-spin h-5 w-5" />
                  ) : (
                    <>
                      Request Deletion
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>

        <p className="mt-8 text-center text-xs text-slate-500">
          This process is permanent and cannot be undone once completed.
        </p>
      </div>
    </div>
  );
}
