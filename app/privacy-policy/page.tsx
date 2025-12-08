import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, FileText, Lock, Eye, CheckCircle, Mail, MapPin, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: "Privacy Policy | Roof Claim Pros",
  description: "Roof Claim Pros' privacy policy regarding personal information collection and usage.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-[#122E5F] to-[#2563eb] px-8 py-12 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <Shield className="h-10 w-10" />
              <h1 className="text-4xl md:text-5xl font-bold">PRIVACY POLICY</h1>
            </div>
          </div>

          <div className="px-8 py-12 space-y-12">
            <section className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                This Privacy Notice for Roof Claim Pros ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Visit our website at <a href="https://roof-claim-pros.vercel.app" className="text-[#2563eb] hover:underline" target="_blank" rel="noopener noreferrer">https://roof-claim-pros.vercel.app</a> or any website of ours that links to this Privacy Notice</li>
                <li>Use Roof Claim Pros. Roof Claim Pros helps homeowners get free roof replacement quotes after storm damage. We connect homeowners with licensed and insured contractors quickly and safely.</li>
                <li>Engage with us in other related ways, including any marketing or events</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-[#2563eb] p-6 my-8 rounded-r-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:roofing@gmail.com" className="text-[#2563eb] hover:underline">roofing@gmail.com</a>.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-6 w-6 text-[#122E5F]" />
                <h2 className="text-2xl font-bold text-gray-900">SUMMARY OF KEY POINTS</h2>
              </div>
              <p className="text-gray-700 mb-6">
                This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">What personal information do we process?</h3>
                  <p className="text-gray-600 text-sm">When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. <a href="#section-1" className="text-[#2563eb] hover:underline">Learn more about personal information you disclose to us.</a></p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Do we process any sensitive personal information?</h3>
                  <p className="text-gray-600 text-sm">Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Do we collect any information from third parties?</h3>
                  <p className="text-gray-600 text-sm">We do not collect any information from third parties.</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">How do we process your information?</h3>
                  <p className="text-gray-600 text-sm">We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. <a href="#section-2" className="text-[#2563eb] hover:underline">Learn more about how we process your information.</a></p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">In what situations and with which parties do we share personal information?</h3>
                  <p className="text-gray-600 text-sm">We may share information in specific situations and with specific third parties. <a href="#section-4" className="text-[#2563eb] hover:underline">Learn more about when and with whom we share your personal information.</a></p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">How do we keep your information safe?</h3>
                  <p className="text-gray-600 text-sm">We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. <a href="#section-7" className="text-[#2563eb] hover:underline">Learn more about how we keep your information safe.</a></p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">What are your rights?</h3>
                  <p className="text-gray-600 text-sm">Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. <a href="#section-9" className="text-[#2563eb] hover:underline">Learn more about your privacy rights.</a></p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">How do you exercise your rights?</h3>
                  <p className="text-gray-600 text-sm">The easiest way to exercise your rights is by visiting <a href="https://roof-claim-pros.vercel.app" className="text-[#2563eb] hover:underline" target="_blank" rel="noopener noreferrer">https://roof-claim-pros.vercel.app</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-6 w-6 text-[#122E5F]" />
                <h2 className="text-2xl font-bold text-gray-900">TABLE OF CONTENTS</h2>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li><a href="#section-1" className="text-[#2563eb] hover:underline">WHAT INFORMATION DO WE COLLECT?</a></li>
                <li><a href="#section-2" className="text-[#2563eb] hover:underline">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
                <li><a href="#section-3" className="text-[#2563eb] hover:underline">WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</a></li>
                <li><a href="#section-4" className="text-[#2563eb] hover:underline">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
                <li><a href="#section-5" className="text-[#2563eb] hover:underline">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
                <li><a href="#section-6" className="text-[#2563eb] hover:underline">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
                <li><a href="#section-7" className="text-[#2563eb] hover:underline">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
                <li><a href="#section-8" className="text-[#2563eb] hover:underline">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
                <li><a href="#section-9" className="text-[#2563eb] hover:underline">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
                <li><a href="#section-10" className="text-[#2563eb] hover:underline">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
                <li><a href="#section-11" className="text-[#2563eb] hover:underline">DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
                <li><a href="#section-12" className="text-[#2563eb] hover:underline">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
                <li><a href="#section-13" className="text-[#2563eb] hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
                <li><a href="#section-14" className="text-[#2563eb] hover:underline">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
              </ol>
            </section>

            <section id="section-1" className="scroll-mt-8">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b-2 border-[#2563eb]">
                <Lock className="h-6 w-6 text-[#122E5F]" />
                <h2 className="text-3xl font-bold text-gray-900">1. WHAT INFORMATION DO WE COLLECT?</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal information you disclose to us</h3>
                <p className="text-gray-700 mb-4"><strong>In Short:</strong> We collect personal information that you provide to us.</p>
                <p className="text-gray-700 mb-4">
                  We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                </p>
                <div className="bg-blue-50 rounded-lg p-6 my-6 border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Personal Information Provided by You.</h4>
                  <p className="text-gray-700 mb-3">The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>names</li>
                    <li>phone numbers</li>
                    <li>email addresses</li>
                  </ul>
                  <p className="text-gray-700 mt-4"><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
                  <p className="text-gray-700 mt-4">
                    <strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Stripe. You may find their privacy notice link(s) here: __________.
                  </p>
                </div>
                <p className="text-gray-700 mb-4">
                  All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded-r-lg">
                  <p className="text-gray-700"><strong>Google API</strong></p>
                  <p className="text-gray-700">Our use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.</p>
                </div>
              </div>
            </section>

            <section id="section-2" className="scroll-mt-8">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b-2 border-[#2563eb]">
                <Eye className="h-6 w-6 text-[#122E5F]" />
                <h2 className="text-3xl font-bold text-gray-900">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process the personal information for the following purposes listed below. We may also process your information for other purposes only with your prior explicit consent.
                </p>
                <p className="text-gray-700">
                  We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                </p>
              </div>
            </section>

            <section id="section-3" className="scroll-mt-8">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b-2 border-[#2563eb]">
                <CheckCircle className="h-6 w-6 text-[#122E5F]" />
                <h2 className="text-3xl font-bold text-gray-900">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  <strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.
                </p>
                <p className="text-gray-700 mb-4"><strong>If you are located in Canada, this section applies to you.</strong></p>
                <p className="text-gray-700 mb-4">
                  We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.
                </p>
                <p className="text-gray-700 mb-4">
                  In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                  <li>For investigations and fraud detection and prevention</li>
                  <li>For business transactions provided certain conditions are met</li>
                  <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                  <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                  <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
                  <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                  <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                  <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
                  <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                  <li>If the information is publicly available and is specified by the regulations</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments
                </p>
              </div>
            </section>

            <section id="section-4" className="scroll-mt-8">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b-2 border-[#2563eb]">
                <Shield className="h-6 w-6 text-[#122E5F]" />
                <h2 className="text-3xl font-bold text-gray-900">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  <strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.
                </p>
                <p className="text-gray-700 mb-4">We may need to share your personal information in the following situations:</p>
                <div className="bg-blue-50 rounded-lg p-6 my-6 border border-blue-100">
                  <p className="text-gray-700 mb-3"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
                  <p className="text-gray-700">
                    <strong>When we use Google Maps Platform APIs.</strong> We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). Google Maps uses GPS, Wi-Fi, and cell towers to estimate your location. GPS is accurate to about 20 meters, while Wi-Fi and cell towers help improve accuracy when GPS signals are weak, like indoors. This data helps Google Maps provide directions, but it is not always perfectly precise.
                  </p>
                </div>
              </div>
            </section>

            <section id="section-5" className="scroll-mt-8">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b-2 border-[#2563eb]">
                <FileText className="h-6 w-6 text-[#122E5F]" />
                <h2 className="text-3xl font-bold text-gray-900">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.
                </p>
                <p className="text-gray-700 mb-4">
                  We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
                </p>
                <p className="text-gray-700 mb-4">
                  We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.
                </p>
                <p className="text-gray-700 mb-4">
                  To the extent these online tracking technologies are deemed to be a "sale"/"sharing" (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section "DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"
                </p>
                <p className="text-gray-700">
                  Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                </p>
              </div>
            </section>

            <section id="section-6" className="scroll-mt-8">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b-2 border-[#2563eb]">
                <Lock className="h-6 w-6 text-[#122E5F]" />
                <h2 className="text-3xl font-bold text-gray-900">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
                </p>
                <p className="text-gray-700 mb-4">
                  We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
                </p>
                <p className="text-gray-700">
                  When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                </p>
              </div>
            </section>

            <section id="section-7" className="scroll-mt-8">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b-2 border-[#2563eb]">
                <Shield className="h-6 w-6 text-[#122E5F]" />
                <h2 className="text-3xl font-bold text-gray-900">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  <strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
                </p>
                <p className="text-gray-700 mb-4">
                  We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                </p>
              </div>
            </section>

            <section id="section-8" className="scroll-mt-8">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b-2 border-[#2563eb]">
                <Lock className="h-6 w-6 text-[#122E5F]" />
                <h2 className="text-3xl font-bold text-gray-900">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction.
                </p>
                <p className="text-gray-700 mb-4">
                  We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18 or the equivalent age as specified by law in your jurisdiction, please contact us at __________.
                </p>
              </div>
            </section>

            <section id="section-9" className="scroll-mt-8">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b-2 border-[#2563eb]">
                <CheckCircle className="h-6 w-6 text-[#122E5F]" />
                <h2 className="text-3xl font-bold text-gray-900">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  <strong>In Short:</strong> Depending on your state of residence in the US or in some regions, such as Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.
                </p>
                <p className="text-gray-700 mb-4">
                  In some regions (like Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
                </p>
                <p className="text-gray-700 mb-4">
                  We will consider and act upon any request in accordance with applicable data protection laws.
                </p>
                <div className="bg-blue-50 rounded-lg p-6 my-6 border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Withdrawing your consent:</h4>
                  <p className="text-gray-700 mb-3">
                    If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
                  </p>
                  <p className="text-gray-700">
                    However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 my-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Account Information</h4>
                  <p className="text-gray-700 mb-3">
                    If you would at any time like to review or change the information in your account or terminate your account, you can:
                  </p>
                  <p className="text-gray-700">
                    Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                  </p>
                </div>
                <p className="text-gray-700">
                  If you have questions or comments about your privacy rights, you may email us at <a href="mailto:roofing@gmail.com" className="text-[#2563eb] hover:underline">roofing@gmail.com</a>.
                </p>
              </div>
            </section>

            <section id="section-10" className="scroll-mt-8">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b-2 border-[#2563eb]">
                <Eye className="h-6 w-6 text-[#122E5F]" />
                <h2 className="text-3xl font-bold text-gray-900">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
                </p>
                <p className="text-gray-700">
                  California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
                </p>
              </div>
            </section>

            <section id="section-11" className="scroll-mt-8">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b-2 border-[#2563eb]">
                <Shield className="h-6 w-6 text-[#122E5F]" />
                <h2 className="text-3xl font-bold text-gray-900">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  <strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories of Personal Information We Collect</h3>
                <p className="text-gray-700 mb-4">
                  The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section "WHAT INFORMATION DO WE COLLECT?"
                </p>
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-300 rounded-lg">
                    <thead className="bg-[#122E5F] text-white">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Category</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Examples</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold">Collected</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">A. Identifiers</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-700">NO</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">B. Personal information as defined in the California Customer Records statute</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Name, contact information, education, employment, employment history, and financial information</td>
                        <td className="px-4 py-3 text-sm text-center text-green-600 font-semibold">YES</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">C. Protected classification characteristics under state or federal law</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-700">NO</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">D. Commercial information</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Transaction information, purchase history, financial details, and payment information</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-700">NO</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">E. Biometric information</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Fingerprints and voiceprints</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-700">NO</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">F. Internet or other similar network activity</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-700">NO</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">G. Geolocation data</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Device location</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-700">NO</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">H. Audio, electronic, sensory, or similar information</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Images and audio, video or call recordings created in connection with our business activities</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-700">NO</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">I. Professional or employment-related information</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-700">NO</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">J. Education Information</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Student records and directory information</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-700">NO</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">K. Inferences drawn from collected personal information</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-700">NO</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">L. Sensitive personal Information</td>
                        <td className="px-4 py-3 text-sm text-gray-700"></td>
                        <td className="px-4 py-3 text-sm text-center text-gray-700">NO</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 mb-4">
                  We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Receiving help through our customer support channels;</li>
                  <li>Participation in customer surveys or contests; and</li>
                  <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  We will use and retain the collected personal information as needed to provide the Services or for:
                </p>
                <p className="text-gray-700 mb-6"><strong>Category B</strong> - As long as the user has an account with us</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sources of Personal Information</h3>
                <p className="text-gray-700 mb-4">Learn more about the sources of personal information we collect in <a href="#section-1" className="text-[#2563eb] hover:underline">"WHAT INFORMATION DO WE COLLECT?"</a></p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Use and Share Personal Information</h3>
                <p className="text-gray-700 mb-4">Learn more about how we use your personal information in the section, <a href="#section-2" className="text-[#2563eb] hover:underline">"HOW DO WE PROCESS YOUR INFORMATION?"</a></p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Will your information be shared with anyone else?</h3>
                <p className="text-gray-700 mb-4">
                  We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, <a href="#section-4" className="text-[#2563eb] hover:underline">"WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</a>
                </p>
                <p className="text-gray-700 mb-4">
                  We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.
                </p>
                <p className="text-gray-700 mb-6">
                  We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h3>
                <p className="text-gray-700 mb-4">
                  You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Right to know whether or not we are processing your personal data</li>
                  <li>Right to access your personal data</li>
                  <li>Right to correct inaccuracies in your personal data</li>
                  <li>Right to request the deletion of your personal data</li>
                  <li>Right to obtain a copy of the personal data you previously shared with us</li>
                  <li>Right to non-discrimination for exercising your rights</li>
                  <li>Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California's privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Depending upon the state where you live, you may also have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)</li>
                  <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)</li>
                  <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)</li>
                  <li>Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)</li>
                  <li>Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Connecticut and Minnesota)</li>
                  <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)</li>
                  <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Exercise Your Rights</h3>
                <p className="text-gray-700 mb-4">
                  To exercise these rights, you can contact us by visiting <a href="https://roof-claim-pros.vercel.app" className="text-[#2563eb] hover:underline" target="_blank" rel="noopener noreferrer">https://roof-claim-pros.vercel.app</a>, by emailing us at <a href="mailto:roofing@gmail.com" className="text-[#2563eb] hover:underline">roofing@gmail.com</a>, or by referring to the contact details at the bottom of this document.
                </p>
                <p className="text-gray-700 mb-4">
                  Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Request Verification</h3>
                <p className="text-gray-700 mb-4">
                  Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.
                </p>
                <p className="text-gray-700 mb-4">
                  If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Appeals</h3>
                <p className="text-gray-700 mb-4">
                  Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a href="mailto:roofing@gmail.com" className="text-[#2563eb] hover:underline">roofing@gmail.com</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">California "Shine The Light" Law</h3>
                <p className="text-gray-700">
                  California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
                </p>
              </div>
            </section>

            <section id="section-12" className="scroll-mt-8">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b-2 border-[#2563eb]">
                <FileText className="h-6 w-6 text-[#122E5F]" />
                <h2 className="text-3xl font-bold text-gray-900">12. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
                </p>
                <p className="text-gray-700">
                  We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
                </p>
              </div>
            </section>

            <section id="section-13" className="scroll-mt-8">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b-2 border-[#2563eb]">
                <Mail className="h-6 w-6 text-[#122E5F]" />
                <h2 className="text-3xl font-bold text-gray-900">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">If you have questions or comments about this notice, you may contact us by post at:</p>
                <div className="bg-blue-50 rounded-lg p-6 my-6 border border-blue-100">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[#122E5F] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Roof Claim Pros</p>
                      <p className="text-gray-700">123, Dalla California, USA</p>
                      <p className="text-gray-700">California, CA 90001</p>
                      <p className="text-gray-700">United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="section-14" className="scroll-mt-8">
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b-2 border-[#2563eb]">
                <CheckCircle className="h-6 w-6 text-[#122E5F]" />
                <h2 className="text-3xl font-bold text-gray-900">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit: <a href="https://roof-claim-pros.vercel.app" className="text-[#2563eb] hover:underline flex items-center space-x-1" target="_blank" rel="noopener noreferrer"><span>https://roof-claim-pros.vercel.app</span> <ExternalLink className="h-4 w-4 inline" /></a>.
                </p>
              </div>
            </section>
          </div>
        </div>
    </main>
      <Footer />
    </div>
  );
}
