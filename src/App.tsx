/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { InteractiveDemo } from './components/InteractiveDemo';
import { EvidenceSection } from './components/EvidenceSection';
import { ComplianceStatusSection } from './components/ComplianceStatusSection';
import { InspectorWorkflow } from './components/InspectorWorkflow';
import { DashboardPreview } from './components/DashboardPreview';
import { InspectionHistory } from './components/InspectionHistory';
import { FeaturesSection } from './components/FeaturesSection';
import { UserTypesSection } from './components/UserTypesSection';
import { TechnologySection } from './components/TechnologySection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { ImpactSection } from './components/ImpactSection';
import { LegalMetrologySection } from './components/LegalMetrologySection';
import { TrustSection } from './components/TrustSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { PortalModal } from './components/PortalModal';

export default function App() {
  const [isPortalModalOpen, setIsPortalModalOpen] = useState<boolean>(false);
  const [portalRole, setPortalRole] = useState<'inspector' | 'admin' | 'citizen'>('inspector');

  const handleOpenPortal = (role: 'inspector' | 'admin' | 'citizen' = 'inspector') => {
    setPortalRole(role);
    setIsPortalModalOpen(true);
  };

  const handleStartInspection = () => {
    const demoElement = document.getElementById('demo-section');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenPortal('inspector');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      {/* Top Navigation */}
      <Navbar onOpenPortal={() => handleOpenPortal('inspector')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onStartInspection={handleStartInspection} />

        {/* 2. Problem / The Challenge */}
        <ProblemSection />

        {/* 3. Solution / 7-Step Workflow */}
        <SolutionSection />

        {/* 4. Interactive Demo Simulator (3 Scenarios) */}
        <InteractiveDemo />

        {/* 5. Evidence & Explainability */}
        <EvidenceSection />

        {/* 6. Standardized Compliance Statuses */}
        <ComplianceStatusSection />

        {/* 7. Inspector Workflow & Governance */}
        <InspectorWorkflow />

        {/* 8. Administrative Dashboard Preview (Recharts) */}
        <DashboardPreview />

        {/* 9. Inspection History & Audit Trail */}
        <InspectionHistory />

        {/* 10. Comprehensive Features Grid */}
        <FeaturesSection />

        {/* 11. Role-Based User Personas */}
        <UserTypesSection onOpenPortal={handleOpenPortal} />

        {/* 12. Technology Stack */}
        <TechnologySection />

        {/* 13. System Architecture Flowchart */}
        <ArchitectureSection />

        {/* 14. Impact & Value */}
        <ImpactSection />

        {/* 15. Legal Metrology Statutory Alignment */}
        <LegalMetrologySection />

        {/* 16. Trust & Traceability Pillars */}
        <TrustSection />

        {/* 17. FAQ Accordion */}
        <FaqSection />

        {/* 18. Final Call to Action */}
        <FinalCta onOpenPortal={() => handleOpenPortal('inspector')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Portal Launcher & Configuration Modal */}
      <PortalModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
        defaultRole={portalRole}
      />
    </div>
  );
}
