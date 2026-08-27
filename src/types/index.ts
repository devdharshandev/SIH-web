export type ComplianceStatus = 'COMPLIANT' | 'NEEDS REVIEW' | 'POTENTIAL ISSUE';

export interface ExtractedField {
  label: string;
  value: string;
  confidence: number;
  status: 'passed' | 'review' | 'failed';
  ruleReference?: string;
  notes?: string;
  boundingBox?: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
}

export interface DemoScenario {
  id: string;
  title: string;
  productName: string;
  category: string;
  status: ComplianceStatus;
  score: number;
  imageAlt: string;
  description: string;
  highlights: string[];
  extractedFields: ExtractedField[];
  evidenceNotes: string;
  inspectorActionRecommended: string;
}

export interface InspectionRecord {
  id: string;
  productName: string;
  batchNumber: string;
  inspectionDate: string;
  score: number;
  status: ComplianceStatus;
  inspectorId: string;
  district: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
